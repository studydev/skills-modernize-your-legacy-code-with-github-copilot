# Test Plan — Student Account Management System (COBOL)

This test plan covers the business logic implemented in the current COBOL application. Use these test cases to validate behavior with business stakeholders. Fill in `Actual Result` and `Status` during execution.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|---|---|---|---|---|---|---|---|
| TC-001 | View current balance | Application started; no prior transactions (initial state) | 1. At menu, choose `1` (View Balance). | Application displays current balance: `1000.00`. | TBD | TBD | Initial balance is set to `1000.00`. |
| TC-002 | Credit account — single credit | Application started; balance = `1000.00` | 1. Choose `2` (Credit)
2. When prompted, enter `250.00` | After operation, application displays new balance: `1250.00`. Balance persists for session. | TBD | TBD | Write operation should update in-memory balance. |
| TC-003 | Debit account — sufficient funds | Application started; balance = `1000.00` | 1. Choose `3` (Debit)
2. When prompted, enter `100.00` | Debit succeeds; new balance displayed: `900.00`. | TBD | TBD | Debit only allowed if balance >= amount. |
| TC-004 | Debit account — insufficient funds | Application started; balance = `1000.00` | 1. Choose `3` (Debit)
2. Enter `2000.00` | Application displays "Insufficient funds for this debit." Balance remains `1000.00`. | TBD | TBD | No overdraft allowed; balance must not change. |
| TC-005 | Multiple transactions sequence | Application started; balance = `1000.00` | 1. Choose `2` and credit `500.00` → expect `1500.00`
2. Choose `3` and debit `200.00` → expect `1300.00`
3. Choose `1` to view balance | Final displayed balance should be `1300.00`. | TBD | TBD | Verifies read/write consistency across sequential operations. |
| TC-006 | Invalid menu choice handling | Application started | 1. At menu, enter `9` (or non 1-4 value) | Application displays "Invalid choice, please select 1-4." and returns to menu without state change. | TBD | TBD | Ensure no state mutation on invalid choice. |
| TC-007 | Exit behavior | Application started | 1. At menu, choose `4` (Exit) | Application displays goodbye message and terminates. | TBD | TBD | `CONTINUE-FLAG` should be set to `NO`. |
| TC-008 | Session persistence (in-memory only) | Application started; balance = `1000.00` | 1. Choose `2` and credit `100.00` → expect `1100.00`
2. Choose `4` to exit
3. Restart application
4. Choose `1` (View Balance) | Upon restart, balance should be reset to `1000.00` (no persistent storage). | TBD | TBD | Confirms session-scoped persistence only. |
| TC-009 | Input validation — non-numeric amount | Application started; balance = `1000.00` | 1. Choose `2` (Credit)
2. Enter non-numeric input (e.g., `abc`) when prompted for amount | Expected behavior: application should either reject input or handle gracefully; if no validation present, behavior is undefined. Document actual behavior. | TBD | TBD | COBOL `ACCEPT` into numeric PIC may treat input differently; clarify expected validation requirement with stakeholders. |
| TC-010 | Boundary test — zero amount transactions | Application started; balance = `1000.00` | 1. Choose `2`, enter `0.00`
2. Choose `3`, enter `0.00` | Zero-value credit/debit should leave balance unchanged and not error. | TBD | TBD | Verify zero is treated as a no-op. |
| TC-011 | Large amount handling | Application started; balance = `1000.00` | 1. Choose `2`, enter a very large amount within PIC limits (e.g., `999999.99`) | Application updates balance according to numeric limits; ensure no overflow or truncation. | TBD | TBD | PIC is `9(6)V99` — validate numeric limits and behavior at extremes. |



## Execution Notes

- Leave `Actual Result` and `Status` blank (or mark `TBD`) until tests are executed.
- For test cases involving numeric input, record exact strings entered including decimal separators.
- If any behavior is undefined or surprising (see TC-009), capture the observed behavior in `Comments` and escalate to stakeholders for decision on required validation.

## How to use this plan for Node.js tests

- Each `Test Case ID` should map to a unit or integration test in the Node.js implementation.
- `Pre-conditions` may be implemented as test fixtures that set starting balance state.
- `Expected Result` should be enforced with assertions; `Actual Result` will be filled after test runs.


---

Generated for: Student Account Management System (COBOL)
