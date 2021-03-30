require('dotenv').config()
let body = require('body-parser');
let express = require('express');
let api = express();
api.use(body.json());
api.use(body.urlencoded({extended: true}));
api.use(require('./view/auth/router'));
api.use(require('./view/user/router'));
api.use(require('./view/post/router'));
api = api.listen(8000, function () {
  var host = api.address().address;
  var port = api.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});