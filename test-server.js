require('babel-register');

var express = require('express');
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router')
var match = ReactRouter.match
var RouterContext = ReactRouter.context
var ReactRedux = require('react-redux')
var Provider = ReactRedux.Provider
var Store = require('./app/store/store.js')
var store = Store.store
var _ = require('lodash')
var fs = require('fs')
var baseTemplate = fs.readFileSync('./index.html')
var template = _.template(baseTemplate)
var App = require('./app/index.jsx')
var routes = App.routes

var port = development ? 3000 : process.env.PORT;
var development = process.env.NODE_ENV !== 'production';
// var isProduction = s

var app = express()

app.use('./dist', express.static('./dist'))

app.use(function(req, res) {
  match({ routes: routes(), location: req.url },    
  function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var body = ReactDOMServer.renderToString(
        React.createElement(Provider, { store: store }, 
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({ body: body }))
    } else {
      res.status(404).send('not found')
    }
  })  
})