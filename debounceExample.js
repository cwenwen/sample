import debounce from './debounce';

function search(input) {
  // 搜尋資料顯示於畫面上
}

const debouncedSearch = debounce(search, 1000);

// 當 input 的內容改變，1000 毫秒後才會執行搜尋
<input
  name="searchInput"
  onChange={debouncedSearch}
  placeholder="請輸入搜尋內容"
/>;
