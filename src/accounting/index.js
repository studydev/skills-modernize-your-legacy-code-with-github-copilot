'use strict';

/**
 * Student Account Management System
 *
 * Converted from COBOL to Node.js.
 * Preserves the original three-layer architecture and business rules:
 *
 *   data.cob       -> dataProgram  (in-memory data access layer)
 *   operations.cob -> operations   (business logic layer)
 *   main.cob       -> main         (menu / UI controller)
 */

const readline = require('readline');

const INITIAL_BALANCE = 1000.00;

// ---------------------------------------------------------------------------
// DataProgram  (data.cob)
// ---------------------------------------------------------------------------
function createDataProgram(initialBalance = INITIAL_BALANCE) {
  let storageBalance = initialBalance;

  return {
    read() {
      return storageBalance;
    },
    write(balance) {
      storageBalance = balance;
    },
    reset() {
      storageBalance = initialBalance;
    },
  };
}

// ---------------------------------------------------------------------------
// Operations  (operations.cob)
// ---------------------------------------------------------------------------
function createOperations(dataProgram, io = console) {
  return {
    async total() {
      const balance = dataProgram.read();
      io.log(`Current balance: ${balance.toFixed(2)}`);
    },

    async credit(rl) {
      const amountStr = await rl.question('Enter credit amount: ');
      const amount = parseFloat(amountStr);

      if (Number.isNaN(amount) || amount < 0) {
        io.log('Invalid amount entered.');
        return;
      }

      let balance = dataProgram.read();
      balance += amount;
      dataProgram.write(balance);
      io.log(`Amount credited. New balance: ${balance.toFixed(2)}`);
    },

    async debit(rl) {
      const amountStr = await rl.question('Enter debit amount: ');
      const amount = parseFloat(amountStr);

      if (Number.isNaN(amount) || amount < 0) {
        io.log('Invalid amount entered.');
        return;
      }

      const balance = dataProgram.read();
      if (balance >= amount) {
        const newBalance = balance - amount;
        dataProgram.write(newBalance);
        io.log(`Amount debited. New balance: ${newBalance.toFixed(2)}`);
      } else {
        io.log('Insufficient funds for this debit.');
      }
    },
  };
}

// ---------------------------------------------------------------------------
// LineReader for interactive / piped input
// ---------------------------------------------------------------------------
function createLineReader() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: process.stdin.isTTY,
  });

  const queue = [];
  const waiters = [];

  rl.on('line', (line) => {
    if (waiters.length > 0) {
      waiters.shift()(line);
    } else {
      queue.push(line);
    }
  });

  rl.on('close', () => {
    while (waiters.length > 0) {
      waiters.shift()('');
    }
  });

  return {
    question(prompt) {
      process.stdout.write(prompt);
      return new Promise((resolve) => {
        if (queue.length > 0) {
          resolve(queue.shift());
        } else {
          waiters.push(resolve);
        }
      });
    },
    close() {
      rl.close();
    },
  };
}

async function main() {
  const io = console;
  const lineReader = createLineReader();
  const dataProgram = createDataProgram();
  const operations = createOperations(dataProgram, io);

  let continueFlag = true;

  while (continueFlag) {
    io.log('--------------------------------');
    io.log('Account Management System');
    io.log('1. View Balance');
    io.log('2. Credit Account');
    io.log('3. Debit Account');
    io.log('4. Exit');
    io.log('--------------------------------');

    const choice = await lineReader.question('Enter your choice (1-4): ');

    switch (choice.trim()) {
      case '1':
        await operations.total();
        break;
      case '2':
        await operations.credit(lineReader);
        break;
      case '3':
        await operations.debit(lineReader);
        break;
      case '4':
        continueFlag = false;
        break;
      default:
        io.log('Invalid choice, please select 1-4.');
    }
  }

  io.log('Exiting the program. Goodbye!');
  lineReader.close();
}

if (require.main === module) {
  main();
}

module.exports = {
  INITIAL_BALANCE,
  createDataProgram,
  createOperations,
  createLineReader,
  main,
};
