/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

/**
 * Main Page
 */
var mainApp = express();

// all environments
mainApp.set('port', process.env.PORT || 8081);
mainApp.set('views', path.join(__dirname, 'views'));
mainApp.set('view engine', 'jade');
mainApp.use(express.favicon());
mainApp.use(express.logger('dev'));
mainApp.use(express.json());
mainApp.use(express.urlencoded());
mainApp.use(express.methodOverride());
mainApp.use(mainApp.router);
mainApp.use(require('less-middleware')({ src: path.join(__dirname, 'public/home') }));
mainApp.use(express.static(path.join(__dirname, 'public/home')));

// development only
if ('development' == mainApp.get('env')) {
  mainApp.use(express.errorHandler());
}

http.createServer(mainApp).listen(mainApp.get('port'), function(){
  console.log('Express server listening on port ' + mainApp.get('port'));
});

/**
 * CMS
 */
// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv')().load();

// Require keystone
var cmsApp = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

cmsApp.init({

	'name': 'Itrip',
	'brand': 'Creative Group',
	 
	'port': '8082',

	'less': 'public/cms',
	'static': 'public/cms',
	'favicon': 'public/cms/favicon.ico',

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'UI::{*<J`7Zw8]K=:sn?X[!5R;TN>y;MV5Ra.OVLvrbybDQT(vG"38=Xso/rb77G'

});

// Load your project's Models

cmsApp.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

cmsApp.set('locals', {
	_: require('underscore'),
	env: cmsApp.get('env'),
	utils: cmsApp.utils,
	editable: cmsApp.content.editable
});

// Load your project's Routes

cmsApp.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

cmsApp.set('nav', {
	'posts': ['posts', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

cmsApp.start();
console.log('Keystone Listening on port 8082');

/**
 * NodeBB
 */


/**
 * Proxy Server
 */
var httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    'itrip.com':                '127.0.0.1:8081',
    'www.itrip.com':            '127.0.0.1:8081',
    'dianping.itrip.com':       '127.0.0.1:8082',
    'forum.itrip.com':          '127.0.0.1:8083',
    'blog.itrip.com':           '127.0.0.1:8084',
  }
};

var proxyServer = httpProxy.createServer(options).listen(8080);
console.log('Proxy Server Listening on port 8080');
