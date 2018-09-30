//使用 require 方法加載 fs 核心模塊
var fs = require('fs')

// 第一個參數：文件路徑
// 第二個參數：文件內容
// 第三個參數：回調函數
//    error
//
//    成功：
//      文件寫入成功
//      error 是 null
//    失敗：
//      文件寫入失敗
//      error 就是錯誤對象
fs.writeFile('./data/大家好.md', '大家好，我是DennisTai，這邊是寫入文件的文字檔！', function (error) {
  // console.log('文件寫入成功')
  // console.log(error)
  if (error) {
    console.log('寫入失敗')
  } else {
    console.log('寫入成功')
  }
})