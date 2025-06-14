type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'exponent';

export class Calculator {
  calculate(a: number, b: number, op: Operation): number {
    switch (op) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      case 'exponent':
        return Math.pow(a, b);
      default:
        throw new Error('Unsupported operation');
    }
  }
}
