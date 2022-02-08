// closure 的寫法，加上 cache 改善效能
function createFibonacci() {
  const fibonacciArray = [0, 1];

  return position => {
    const result = fibonacciArray[position];
    if (result) return result;

    for (let i = 2; i <= position; i++) {
      fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray[position];
  };
}

const fibonacci = createFibonacci();

fibonacci(9);
fibonacci(3);
fibonacci(14);

// class 的寫法
class Fibonacci {
  fibonacciArray = [0, 1];

  getResultByPosition = position => {
    const result = this.fibonacciArray[position];
    if (result) return result;

    for (let i = 2; i <= position; i++) {
      this.fibonacciArray[i] =
        this.fibonacciArray[i - 1] + this.fibonacciArray[i - 2];
    }

    return this.fibonacciArray[position];
  };
}

const fibonacciInstance = new Fibonacci();
fibonacciInstance.getResultByPosition(7);
fibonacciInstance.getResultByPosition(4);
fibonacciInstance.getResultByPosition(11);
