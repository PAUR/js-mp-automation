const
    express = require('express'),
    path = require('path'),
    config = require('./../config'),
    env = require('./../env/index');

express()
    .use(express.static(path.join(__dirname, config.paths.target._root)))
    .listen(env.SERVER_PORT, () => console.log(`Listening on ${env.FAKE_SERVER.PORT}`));