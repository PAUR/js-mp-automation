[![Build Status](https://travis-ci.org/PAUR/js-mp-automation.svg)](https://travis-ci.org/PAUR/js-mp-automation)

# Js mentoring automation app

### Links
* [View on Heroku](https://js-mp-automation.herokuapp.com)
* [Repo on github](https://github.com/PAUR/js-mp-automation)

### Npm scripts

* ``` npm run watch ``` build app, starts watchers, runs karma in watch mode, serve usnig browser-sync (best for development)
* ``` npm test ``` single run tests and generates html coverage report
* ``` npm start ``` serve target dir with express
* ``` npm install ``` installs all dependencies and build project

### .env file

* __ENV__ - gets from NODE_ENV, supported values: (development|production). With production or not development env all sources will be optimized (minifyed)
* __PORT__ - gets for SERVER_PORT, port for serving target (for both express and browser-sync)
