require('dotenv').config();
const cors = require('cors');
const body = require('body-parser');
const express = require('express');
const api = express();
api.use(cors());
api.use(body.json());
api.use(body.urlencoded({extended: true}));
api.options('*', cors());
api.use(require('./view/auth/router'));
api.use(require('./view/user/router'));
api.use(require('./view/post/router'));
api = api.listen(8000, function () {
  var host = api.address().address;
  var port = api.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});