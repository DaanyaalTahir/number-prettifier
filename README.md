# Number Prettifier

## Overview
The purpose of this project is to develop a number prettifier that formats numbers greater than 6 digits, supporting millions, billions, and trillions.

The project will be implemented using **JavaScript** with unit tests written in **Jest**.

## Assumptions
The following assumptions are made regarding the input:
1. The input is of type number.
2. The input is non-negative.
3. The input is less than a quadrillion (10<sup>15</sup>).

## Design Approach
A Test-Driven Development (TDD) approach will be used for developing the Number Prettifier.

### Sequence of Steps
1. **List the requirements:**

| ID  | Description                                                                 |
|-----|-----------------------------------------------------------------------------|
| R1  | Accepts numeric type.                                                       |
| R2  | Returns a prettified string version.                                        |
| R3  | Does not prettify numbers less than 6 digits.                               |
| R4  | Prettifies numbers greater than 6 digits, supporting millions, billions, and trillions. |
| R5  | Includes one decimal place when the truncated number is not an integer.     |

2. **State assumptions** (refer to the previous section).
3. **Partition the input space** to help determine appropriate test cases:

| Partition               | Example Values                       |
|-------------------------|--------------------------------------|
| 0 &le; number &lt; 1M   | 532                                  |
| 1M &le; number &lt; 1B  | 2,000,000 or 2,500,000               |
| 1B &le; number &lt; 1T  | 1,000,000,000 or 1,123,456,789       |
| 1T &le; number &lt; 1Q  | 1,000,000,000,000 or 1,234,567,890,123 |

*Q - Quadrillion

4. **Generate test case table:**

| TC ID | Description                    | Example Input        | Expected Output |
|-------|--------------------------------|----------------------|-----------------|
| TC1   | Small integer                  | 532                  | "532"           |
| TC2   | Integer just above 1M          | 2,000,000            | "2M"            |
| TC3   | Floating-point number above 1M | 2,500,000            | "2.5M"          |
| TC4   | Integer just at 1B             | 1,000,000,000        | "1B"            |
| TC5   | Floating-point number above 1B | 1,123,456,789        | "1.1B"          |
| TC6   | Integer just at 1T             | 1,000,000,000,000    | "1T"            |
| TC7   | Floating-point number above 1T | 1,234,567,890,123    | "1.2T"          |

5. **Create the corresponding tests in Jest** (refer to `numberPrettifier.test.js`).
6. **Create the code for the Number Prettifier** (refer to `numberPrettifier.js`).
7. **Run the tests** using `npm test`.

## Results
Below is a screenshot of the test results.

![Test Results](https://github.com/DaanyaalTahir/number-prettifier/blob/master/screenshots/results.png)

## Running the Repository

To set up and run the repository, follow these steps:

1. **Clone the repository**
2. **Install dependencies:** `npm install`
3. **Run the tests:** `npm test`
