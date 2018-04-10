module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://google.com')
      .waitForElementVisible('input.gsfi', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .setValue('input.gsfi', ['functional tests', browser.Keys.ENTER])
      .waitForElementPresent('#searchform', 60000)
      .pause(5000)
      .end();
  }
};
