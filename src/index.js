const express = require('express');
const http = require('serverless-http');
const { Nuxt } = require('nuxt');

const app = express();
const config = require('../nuxt.config.js');

const nuxt = new Nuxt(config);
app.use(nuxt.render);

module.exports.nuxt = http(app, { binary: ['font/*', 'image/*'] });
