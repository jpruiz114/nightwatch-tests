var shotsPath = "C:\\Development\\VP\\IB\\dev-env\\C71_PHP704_MEMCH_PG94_MYS56_VRSH4_RBT\\www\\html\\webmgr\\sites\\templates\\chiromatrix\\chiropractic\\general\\buffalo\\edit\\assets\\img\\screenshots\\";

module.exports = {
    'October admin login test' : function (browser) {
        browser
            .url('http://templates.local-chiromatrix.com/Chiropractic/General/buffalo/edit/site/editor/cms/')
            .waitForElementVisible('body', 10000)
            .setValue('input[type=text][name=login]', 'admin')
            .setValue('input[type=password][name=password]', 'admin')
            .click('button[type=submit]')
            .pause(1000)
            .click('button[id=se__gulpScreenShot]')
            .waitForElementVisible('p[class="lead text-muted"]', 60000)
            .pause(5000)
            .fileExists(
                shotsPath + "desktop-1280x1024.png",
                function(result) {
                    this.assert.equal(result.value, true);
                }
            )
            .fileExists(
                shotsPath + "tablet-768x946.png",
                function(result) {
                    this.assert.equal(result.value, true);
                }
            )
            .fileExists(
                shotsPath + "phone-320x570.png",
                function(result) {
                    this.assert.equal(result.value, true);
                }
            )
            .end();
    }
};
