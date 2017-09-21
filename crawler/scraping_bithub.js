var phantom = require('phantom')
var _ph, _page, _outObj

phantom.create().then(function (ph) {
  _ph = ph
  return _ph.createPage()
}).then(function (page) {
  _page = page

  return _page.open('https://www.bithumb.com/u1/US109')
}).then(function (status) {
  //console.log(status)
  return _page.evaluate(function () {
    return (document.getElementById('chart_tb').children)[1].innerHTML
  })
}).then(function (html) {
  // var table = document.getElementById('chart_tb')
  console.log(html)
  _page.close()
  _ph.exit()
}).catch(function (e) {
  console.log(e)
  _page.close()
  _ph.exit()
})
