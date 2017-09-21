// DB setting
var mongoose = require('mongoose')
var db = mongoose.connection
mongoose.connect('mongodb://127.0.0.1/rellatSocial')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  debug('Connected to mongod server')
})