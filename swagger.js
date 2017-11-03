var express = require('express');
var http = require('http');



var app = express();
// 接口显示页面
app.use('/static', express.static('dist'));
app.listen(8005, function () {
  console.log('app listening on port 8005!');
});
