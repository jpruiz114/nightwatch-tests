module.exports = {
    "Checking if file does not exist" : function (browser) {
        browser
            .fileExists(
                "C:\\Development\\Personal\\test-files\\me-no-exist.txt",
                function(result) {
                    //console.dir(result);

                    this.assert.equal(result.value, false);
                }
            )
            .end();
    }
};
