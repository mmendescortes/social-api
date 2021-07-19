require('dotenv').config();
const cors = require('cors');
const body = require('body-parser');
const express = require('express');
const api = express();
api.use(cors());
api.use(body.json());
api.use(body.urlencoded({extended: true}));
api.options('*', cors());
api.use(require('./router/auth/router'));
api.use(require('./router/user/router'));
api.use(require('./router/post/router'));
api.use(require('./router/comment/router'));
api.listen(process.env.API_PORT, function () {
  console.log("SocialAPI is listening at http://%s:%s", process.env.API_HOST, process.env.API_PORT);
});