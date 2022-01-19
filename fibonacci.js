function fibonacci(position) {
  const fibonacciArray = [0, 1];

  for (let i = 2; i <= position; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }

  return fibonacciArray[position];
}
