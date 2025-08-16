'use strict';
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { router, loadedRoutes } = require("./server.js");
const log = require("../utils/logger");
const checkAPI = require("../utils");
const config = require("../config.json");
const APIKEY = process.cwd() + "/utils/APIKEY.json"
const app = express();
const getIP = require('ipware')().get_ip;
const fs = require('fs');
const { resolve } = require("path");
const path = resolve(__dirname, 'data.json');
const { writeFileSync } = require('fs');

global.checkAPI = checkAPI.check_api_key
global.config = config;
global.APIKEY = APIKEY;
global._404 = process.cwd() + '/public/_404.html';
global.profile = process.cwd() + '/public/bio.html';

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  if (global.admin == true || global.admin == false) return next();
  global.admin
  var ipInfo = getIP(req);
  var block = require("../utils/block-ban/block.js")(ipInfo.clientIp)
  if (block == true) return
  var limit = require("../utils/block-ban/limit-request.js")(ipInfo.clientIp)
  var type = global.config.ADMIN.includes(ipInfo.clientIp) ? 'ADMIN' : 'IP'
  log(`${type}: ${ipInfo.clientIp} - Đã yêu cầu tới path: ${decodeURIComponent(req.url)}`, 'STATUS');
  next();
});

app.get('/total_request', function(request, response, next) {
  var admin = request.query.admin
  if (admin == "true") {
    global.admin = true
  }
  var data = require('./data.json')
  response.json(data)
  next()
})

app.use(function(req, res, next) {
  if (global.admin == true) {
    global.admin = false
    return next();
  }
  var data = require('./data.json');
  data.total = data.total + 1
  writeFileSync(path, JSON.stringify(data, null, 4));
  next();
});

app.use("/", router);
app.set("json spaces", 4);
app.use((error, req, res, next) => {
  res.status(error.status).json({
    message: error.message
  });
});

app.set('port', (process.env.PORT || 1234));
app.get('/', function (request, response) {
     response.sendFile(global.profile);
 });
app.get('/docs', function(request, response) {
  response.send(`hi`);
}).listen(app.get('port'));
const port = app.get('port');
log(`API LECHII`, 'HOST UPTIME');
app.post('/upcode', function(req, res) {
  var code = req.body.code;
  var id = ((Math.random() + 1).toString(36).substring(2)).toUpperCase()
  fs.writeFile(
    `${__dirname}/public/codeStorage/database/_${id}.js`,
    code,
    "utf-8",
    function(err) {
      if (err) return res.json({
        status: false,
        url: 'Không thể up code của bạn lên!'
      })
      return res.json({
        status: true,
        url: 'https://subnhanh.vn/upcode/raw/?id=' + id
      })
    }
  );
});