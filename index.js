const
    express = require('express'),
    path = require('path'),
    config = require('./config'),
    env = require('./env');

express()
    .use(express.static(path.join(__dirname, config.paths.www._root)))
    .listen(env.SERVER_PORT, () => console.log(`Listening on ${env.SERVER_PORT}`));