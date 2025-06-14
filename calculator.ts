type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'exponent';

export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }

  exponent(a: number, b: number): number {
    return Math.pow(a, b);
  }

  calculate(op: Operation, a: number, b: number): number {
    switch (op) {
      case 'add':
        return this.add(a, b);
      case 'subtract':
        return this.subtract(a, b);
      case 'multiply':
        return this.multiply(a, b);
      case 'divide':
        return this.divide(a, b);
      case 'exponent':
        return this.exponent(a, b);
      default:
        throw new Error('Unsupported operation');
    }
  }
}
