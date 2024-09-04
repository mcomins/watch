const express = require('express');
const http = require('serverless-http');
const { Nuxt } = require('nuxt');

const app = express();
const config = require('../nuxt.config.js');

app.use('/api/health', require('./routes/health'));

const nuxt = new Nuxt(config);
app.use((req, res, next) => {
  nuxt.ready().then(() => nuxt.render(req, res, next));
});

module.exports.handler = http(app, { binary: ['font/*', 'image/*'] });
