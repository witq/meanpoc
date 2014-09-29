(function () {

  'use strict';

  // modules

  var bodyParser    = require('body-parser'),
    express         = require('express'),
    methodOverride  = require('method-override'),

  // config

    app = express(),
    db = require('./config/server/database'),
    port = process.env.port || 8080;

  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(__dirname + '/public'));

  // routes

  require('./server/routes')(app);

  // start app

  app.listen(port);
  console.log('Listening on ' + port);

}());
