module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://lab-activation-happyday.mybluemix.net/')
      .waitForElementVisible('#gotocampaign', 60000, true,
        function(){}, 'Waiting for Go To Campaign Button')
      .click('#gotocampaign')
      .waitForElementPresent('#inputemail', 60000, true,
        function(){}, 'Waiting for Input Email input')
      .setValue('#inputemail', ['test@test.com', browser.Keys.ENTER])
      .waitForElementPresent('#registeremail', 60000, true,
        function(){}, 'Waiting for Register EMail Button')
      .click('#registeremail')
      .pause(5000)
      .end();
  }
};
