module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://lab-activation-happyday.mybluemix.net/')
      .waitForElementVisible('#inputemail', 60000, true,
        function(){}, 'Waiting for Go To Campaign Button')
      .click()
      .waitForElementPresent('#inputemail', 60000)
      .setValue('#inputemail', ['test@test.com', browser.Keys.ENTER])
      .waitForElementPresent('#registeremail', 60000)
      .click()
      .pause(5000)
      .end();
  }
};
