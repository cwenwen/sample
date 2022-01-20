function throttle(func, timeout = 500) {
  let inThrottle = false;
  let timer;

  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        inThrottle = false;
      }, timeout);
    }
  };
}

export default throttle;
