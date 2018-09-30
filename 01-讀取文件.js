// 瀏覽器中的 JavaScript 是沒有文件操作的能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

// fs 是 file-system 的簡寫，就是文件系統的意思
// 在 Node 中如果想要進行文件操作，就必須引入 fs 這個核心模塊
// 在 fs 這個核心模塊中，就提供了所有的文件操作相關的 API
// 例如：fs.readFile 就是用來讀取文件的

// 1. 使用 require 方法加載 fs 核心模塊
var fs = require('fs')

// 2. 讀取文件
//    第一個參數就是要讀取的文件路徑
//    第二個參數是一個回調函數
//
//      成功
//        data 數據
//        error null
//      失敗
//        data undefined沒有數據
//        error 錯誤對象
fs.readFile('./data/a.txt', function (error, data) {
// 直接運行的話 會出現下面這串
// <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a>
// 文件中儲存的其實都是二進制數據 0 1
// 這里為什麼看到的不是 0 和 1 呢？原因是二進制轉為 16 進制了
// 但是無論是二進制01還是16進制，人類都不認識
// 所以我們可以通過 toString 方法把其轉為我們能認識的字符

// console.log(data)

// console.log(error)
// console.log(data)

// 在這裡就可以通過判斷 error 來確認是否有錯誤發生
if (error) {
    console.log('讀取文件失敗')
  } else {
    console.log(data.toString())
  }
})