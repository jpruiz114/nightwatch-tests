module.exports = {
    'eve': function (browser) {
        browser
            .url('http://demosite.onlinechiro.com/chiropractic/general/eve/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/chiropractic/eve-320.png')
            .end();
    },

    'tara': function (browser) {
        browser
            .url('http://demosite.onlinechiro.com/chiropractic/general/tara/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/chiropractic/tara-320.png')
            .end();
    },

    'isabella': function (browser) {
        browser
            .url('http://demosite.onlinechiro.com/chiropractic/general/isabella/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/chiropractic/isabella-320.png')
            .end();
    },

    'ellie': function (browser) {
        browser
            .url('http://demosite.onlinechiro.com/chiropractic/general/ellie/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/chiropractic/ellie-320.png')
            .end();
    },

    'anjali': function (browser) {
        browser
            .url('http://demosite.onlinechiro.com/chiropractic/general/anjali/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/chiropractic/anjali-320.png')
            .end();
    }
};
