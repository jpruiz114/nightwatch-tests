module.exports = {
    'eve': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/eve/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/eve-320.png')
            .end();
    },

    'tara': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/tara/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/tara-320.png')
            .end();
    },

    'isabella': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/isabella/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/isabella-320.png')
            .end();
    },

    'ellie': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/ellie/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/ellie-320.png')
            .end();
    },

    'anjali': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/anjali/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/anjali-320.png')
            .end();
    },

    'nina': function (browser) {
        browser
            .url('http://demosite.onlinepodiatrysites.com/podiatrist/general/nina/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(320, 570)
            .saveScreenshot('C:/Development/VP/IB/nightwatchjs-tests/screenshots/podiatrysites/nina-320.png')
            .end();
    }
};
