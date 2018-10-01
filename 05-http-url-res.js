var http = require('http')

// 1. 創建 Server
var server = http.createServer()

// 2. 監聽 request 請求事件，設置請求處理函數
server.on('request', function (req, res) {
  console.log('收到請求了，請求路徑是：' + req.url)
  console.log('請求我的客戶端的地址是：', req.socket.remoteAddress, req.socket.remotePort)

// res.write('hello')
// res.write(' world')
// res.end()
// 上面的方式比較麻煩，推薦使用更簡單的方式，直接 end 的同時發送響應數據
//在end後面輸入字符串即可，如下
// res.end('hello nodejs')

// 根據不同的請求路徑，發送不同的響應結果
// 1. 獲取請求路徑
//    req.url 獲取到的是端口號之後的那一部分路徑
//    也就是說所有的 url 都是以 / 開頭的 例如:http://127.0.0.1/ <---這個就是"/"
// 2. 判斷路徑處理響應
 var url = req.url

  if (url === '/') {
    res.end('index page')
  } else if (url === '/login') {
    res.end('login page')

    //傳送一個產品數據
  } else if (url === '/products') {
    var products = [{
        name: 'apple X',
        price: 8888
      },
      {
        name: 'oppo X',
        price: 5000
      },
      {
        name: 'HTC X',
        price: 1999
      }
    ]

// 響應內容只能是二進制數據或者字符串
//   數字 不行
//   對象 不行
//   數組 不行
//   布爾值 不行
    res.end(JSON.stringify(products))
  } else {
    res.end('404 Not Found.')
  }
})

// 3. 綁定端口號，啟動服務
server.listen(3000, function () {
  console.log('服務器啟動成功，可以訪問了...')
})
