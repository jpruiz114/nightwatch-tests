module.exports = {
    'eve': function (browser) {
        browser
            .url('http://demosite.theonlinepractice.com/dental/general/eve/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/dental/eve-320.png')
            .end();
    }
};
