module.exports = {
    "Checking if file exists" : function (browser) {
        browser
            .fileExists(
                "C:\\Development\\Personal\\test-files\\dummy-log.txt",
                function(result) {
                    //console.dir(result);

                    this.assert.equal(result.value, true);
                }
            )
            .end();
    }
};
