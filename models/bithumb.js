// mongoose를 사용하기 위해 해당 모듈을 import
var mongoose = require('mongoose')

// 스키마 정의
var Trader = mongoose.Schema
var TraderSchema = new Trader({
  stockMarket: 'string',
  one: {
    currency: 'string',
    finalPrice: 'string',
    purchase: 'string',
    sell: 'string',
    lowest: 'string',
    highest: 'string',
    weightedAvg: 'string'
  },
  other: {
    currency: 'string',
    finalPrice: 'string',
    purchase: 'string',
    sell: 'string',
    lowest: 'string',
    highest: 'string',
    weightedAvg: 'string'
  },

  volume: 'string'

})

module.exports = mongoose.model('trader', TraderSchema)