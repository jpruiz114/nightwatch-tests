var fileExists = function(filePath, callback) {
    var fs = require('fs');

    callback = callback || function () {};

    var exists;

    try {
        fs.lstatSync(filePath);

        exists = 1;
    } catch (e) {
        exists = 0;
    }

    /**
     * From protocol.js
     * body - The function body to be injected.
     * args - An array of arguments which will be passed to the function.
     * callback - Optional callback function to be called when the command finishes.
     */
    this.execute(
        /**
         * body
         * @param fileExists
         */
        function(fileExists) {
            if (fileExists == 1) {
                return true;
            } else {
                return false;
            }
        },

        /**
         * args
         */
        [exists],

        /**
         * callback
         * @param result
         */
        function (result) {
            callback.call(this, result);
        }
    );

    // This allows the command to be chained.
    return this;
};

exports.command = fileExists;
