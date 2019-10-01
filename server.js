var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var models = require("./models");

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', function (req, res) {
  let body = req.body;
  console.log(body);

  models.User.create({

    email: body.email,

    password: body.password,

    name: body.name,

    phone: body.phone,

    date: body.date,

    history: body.history,

    point: body.point,

    wallet: body.wallet
  }).then(result => {
    console.log("User 데이터 추가 완료");
    res.redirect("/user");
  }).catch(err => {
    console.log(err);
    console.log("데이터 추가 실패");
  })
});

app.post('/tboards', function (req, res) {
  let body = req.body;
  console.log(body);

  models.TBoard.create({

    type: body.type,

    amount: body.amount,

    price: body.price,

    date: body.date,

    method: body.method,

    status: body.status,

    sellerId: body.sellerId,

    buyerId: body.buyerId

  }).then(result => {
    console.log("TradeBoard 데이터 추가 완료");
    res.redirect("/tboards");
  }).catch(err => {
    console.log(err);
    console.log("데이터 추가 실패");
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

models.sequelize.sync().then(() => {
  console.log(" DB 연결 성공");
}).catch(err => {
  console.log("연결 실패");
  console.log(err);
})