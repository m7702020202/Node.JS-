var http = require('http')

var server = http.createServer()

// request 請求事件處理函數，需要接收兩個參數：
//   Request 請求對象
//     請求對象可以用來獲取客戶端的一些請求信息，例如:請求路徑
//   Response 響應對象
//     響應對象可以用來給客戶端發送響應消息
server.on('request', function (request, response) {
  // http://127.0.0.1:3000/ /
  // http://127.0.0.1:3000/a /a
  // http://127.0.0.1:3000/foo/b /foo/b
  console.log('收到客戶端請求，請求路徑是：' + request.url)

  // response 對象有一個方法：write 可以用來給客戶端發送響應數據
  // write 可以使用多次，但是最後一定要使用 end 來結束響應，否則客戶端會一直等待
  response.write('hello')
  response.write(' nodejs')

  // 告訴客戶端，我的訊息說完了，可以傳給客戶端用戶看了
  response.end()

  // 由於現在服務器的能力還非常的弱，無論是什麼請求，都只能響應 hello nodejs
  //  我希望當請求不同的路徑的時候響應不同的結果
  //  例如：
  //  / index
  //  /login 登入
  //  /register 註冊
  //  /haha 哈哈你好帥
})

server.listen(3000, function () {
  console.log('服務器啟動成功!可以通過 http://127.0.0.1:3000/ 來進行訪問')
})


