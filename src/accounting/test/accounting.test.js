'use strict';

const { spawnSync } = require('child_process');
const path = require('path');
const {
  INITIAL_BALANCE,
  createDataProgram,
  createOperations,
} = require('../index');

function createMockIo() {
  const logs = [];
  return {
    io: {
      log: (message) => logs.push(String(message)),
    },
    logs,
  };
}

function createMockReader(inputs) {
  let idx = 0;
  return {
    question: async () => {
      const value = inputs[idx];
      idx += 1;
      return value;
    },
  };
}

describe('Student Account Management Test Plan Mapping', () => {
  test('TC-001: View current balance should show initial 1000.00', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);

    await operations.total();

    expect(logs).toContain('Current balance: 1000.00');
  });

  test('TC-002: Credit 250.00 should update balance to 1250.00', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);
    const reader = createMockReader(['250.00']);

    await operations.credit(reader);

    expect(dataProgram.read()).toBe(1250);
    expect(logs).toContain('Amount credited. New balance: 1250.00');
  });

  test('TC-003: Debit 100.00 with sufficient funds should update balance to 900.00', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);
    const reader = createMockReader(['100.00']);

    await operations.debit(reader);

    expect(dataProgram.read()).toBe(900);
    expect(logs).toContain('Amount debited. New balance: 900.00');
  });

  test('TC-004: Debit 2000.00 should be rejected and keep balance at 1000.00', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);
    const reader = createMockReader(['2000.00']);

    await operations.debit(reader);

    expect(dataProgram.read()).toBe(1000);
    expect(logs).toContain('Insufficient funds for this debit.');
  });

  test('TC-005: Credit then debit sequence should end at 1300.00', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);

    await operations.credit(createMockReader(['500.00']));
    await operations.debit(createMockReader(['200.00']));
    await operations.total();

    expect(dataProgram.read()).toBe(1300);
    expect(logs).toContain('Current balance: 1300.00');
  });

  test('TC-006: Invalid menu choice should show message and continue', () => {
    const appDir = path.resolve(__dirname, '..');
    const result = spawnSync('node', ['index.js'], {
      cwd: appDir,
      input: '9\n4\n',
      encoding: 'utf8',
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('Invalid choice, please select 1-4.');
    expect(result.stdout).toContain('Exiting the program. Goodbye!');
  });

  test('TC-007: Exit option should terminate application with goodbye message', () => {
    const appDir = path.resolve(__dirname, '..');
    const result = spawnSync('node', ['index.js'], {
      cwd: appDir,
      input: '4\n',
      encoding: 'utf8',
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('Exiting the program. Goodbye!');
  });

  test('TC-008: Session persistence should reset after restart', () => {
    const appDir = path.resolve(__dirname, '..');

    const firstRun = spawnSync('node', ['index.js'], {
      cwd: appDir,
      input: '2\n100.00\n4\n',
      encoding: 'utf8',
    });
    expect(firstRun.status).toBe(0);
    expect(firstRun.stdout).toContain('Amount credited. New balance: 1100.00');

    const secondRun = spawnSync('node', ['index.js'], {
      cwd: appDir,
      input: '1\n4\n',
      encoding: 'utf8',
    });
    expect(secondRun.status).toBe(0);
    expect(secondRun.stdout).toContain('Current balance: 1000.00');
  });

  test('TC-009: Non-numeric amount should be handled gracefully', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);

    await operations.credit(createMockReader(['abc']));

    expect(dataProgram.read()).toBe(INITIAL_BALANCE);
    expect(logs).toContain('Invalid amount entered.');
  });

  test('TC-010: Zero amount credit/debit should not change balance', async () => {
    const dataProgram = createDataProgram();
    const { io } = createMockIo();
    const operations = createOperations(dataProgram, io);

    await operations.credit(createMockReader(['0.00']));
    await operations.debit(createMockReader(['0.00']));

    expect(dataProgram.read()).toBe(INITIAL_BALANCE);
  });

  test('TC-011: Large amount credit should be applied without truncation in Node.js number model', async () => {
    const dataProgram = createDataProgram();
    const { io, logs } = createMockIo();
    const operations = createOperations(dataProgram, io);

    await operations.credit(createMockReader(['999999.99']));

    expect(dataProgram.read()).toBeCloseTo(1000999.99, 2);
    expect(logs).toContain('Amount credited. New balance: 1000999.99');
  });
});
