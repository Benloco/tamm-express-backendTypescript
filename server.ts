var express = require('express');
var cookieParser = require('cookie-parser');
var jsonParser = require("body-parser").json;
var session = require("express-session");
var logger = require('morgan');
// var MongoStore = require("connect-mongo")(session);
var http = require('http');
var expressValidator = require('express-validator');
var apiRouter = require('./routes/apiRoutes.ts');
var pubRouter = require('./routes/pubRoutes.ts')
var authSession = require('./middleware/auth.ts')

var app= express();
var server = http.createServer(app);
var port = 4200;

app.use(logger('dev'));
app.use(jsonParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(expressValidator());
app.use(cookieParser());

app.use(session({
    secret: "jkailwqd",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true,
             maxAge: 600000 
            }
  }));

  app.use('/pub/proxy',authSession.auth,pubRouter);
  app.use('/api/proxy',apiRouter);



server.listen(process.env.PORT || port, () => console.log(`App is listening on port ${port} !`));
 
exports. app=app;