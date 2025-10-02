const http = require('http');
const fs = require('fs');

const routes = {
  '/': './index.html',
  '/index.html': './index.html',
  '/about.html': './about.html',
  // 新しいページを追加する時は、ここに追加するだけでOK！
  // '/contact.html': './contact.html',
};

// ファイルを読み込んでレスポンスを返す関数
const serveHtml = (res, filePath, statusCode) => {
  // fs.readFileを使ってファイルを読み込む
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 読み込みに失敗したら500エラーを返す
      // 500.htmlが見つからない場合も考慮
      fs.readFile('./500.html', (err500, data500) => {
        if (err500) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('サーバーエラー');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data500);
        }
      });
    } else {
      // 成功したらHTMLを返す
      res.writeHead(statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  // 1. ルーティングの対応表から、リクエストされたURLに対応するファイルパスを探す
  const filePath = routes[req.url];

  // 2. ファイルパスが見つかったか確認する
  if (filePath) {
    // 3. 見つかったら、そのファイルパスとステータスコード200を渡して関数を呼び出す
    serveHtml(res, filePath, 200);
  } else {
    // 4. 見つからなかったら、404ページを表示する
    serveHtml(res, './404.html', 404);
  }
});


server.listen(3000, () => {
  console.log('http://localhost:3000 にアクセスしてみよう');
});