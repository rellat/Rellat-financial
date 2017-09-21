var phantom = require('phantom')
var _ph, _page, _outObj
var interval = 0
var min = 3000

function Crawler () {
  var self = this
  if (!(self instanceof Crawler)) return new Crawler()

}

Crawler.prototype.start = function () {

  phantom.create().then(function (ph) {
    _ph = ph
    return _ph.createPage()
  }).then(function (page) {
    _page = page

    return _page.open('https://www.bithumb.com/u1/US109')
  }).then(function (status) {
    interval = setInterval(crawling, min)
  }).catch(function (e) {
    console.log(e)
    _page.close()
    _ph.exit()
  })
}

function crawling () {
  _page.evaluate(function () {
    // 여기서 파싱 들어가야됨
    var table = (document.getElementById('chart_tb').children)[1]
    var rows = table.children
    var len = rows.length
    var result = []

    for (var i = 0; i < len; i++) {
      result.push([])

      var row = rows[i].children

      var clen = row.length
      for(var j = 0; j < clen; j++){
        var col = row[j]
        result[i].push(col.innerHTML)
      }

    }

    return result
  }).then(function (html) {
    // var table = document.getElementById('chart_tb')
    console.log(html)

  })
}

(new Crawler).start()

