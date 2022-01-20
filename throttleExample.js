import throttle from './throttle';

function doSomething(scrollPos) {
  // 依照 scroll 的 position 執行一些東西，例如顯示動畫等等
}

const throttledDoSomething = throttle(doSomething, 1000);

// 執行 doSomething 之後，間隔 1000 毫秒才會再執行一次
window.addEventListener('scroll', () => {
  throttledDoSomething(window.scrollY);
});
