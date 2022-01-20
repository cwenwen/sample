# Sample

## File Structure

```
.
├── my-app
│   └── src
│       ├── hooks
│       │   └── useForm.js
│       └── App.js
├── README.md
├── dataTransformer.js
├── debounce.js
├── debounceExample.js
├── fibonacci.js
├── stackByLinkedList.js
├── throttle.js
├── throttleExample.js
└── useForm.js
```

## Content

### `my-app`

使用 Create React App 架設，用以檢視 `useForm` 的實作。

### `dataTransformer.js`

將資料整合成期望的輸出結果。

### `debounce.js`

實作 debounce，在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。

### `debounceExample.js`

以文字輸入的範例敘述 debounce 的運作方式。

### `fibonacci.js`

實作 Fibonacci number（費式數列），建立函式 `fibonacci` 代入參數 `position`，`position` 表示的是想要得到 Fibonacci sequence 中的第幾個數字的值。

### `stackByLinkedList.js`

使用 linked list 實作 stack，包含以下方法：

- `push()`：添加新元素。
- `pop()`：移除元素並返回被移除的元素。
- `size()`：返回所有元素數量。

### `throttle.js`

實作 throttle，在觸發後的 timeout 時間內只會執行一次。

### `throttleExample.js`

以 scroll 的範例敘述 throttle 的運作方式。

### `useForm.js`

實作 React Custom Hook，依照登入畫面範例完成 `userForm` 實作，使用上方的 `my-app` 來執行。
