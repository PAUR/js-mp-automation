const
    express = require('express'),
    path = require('path'),
    env = require('./../env'),
    config = require('./../config')(env);

express()
    .use(express.static(path.join(__dirname, '..', config.paths.target._root)))
    .listen(env.FAKE_BACKEND.PORT, console.log.bind(console, `Listening on ${env.FAKE_BACKEND.PORT}`));