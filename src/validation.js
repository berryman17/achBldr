const constants = require('./constants')

var exports = module.exports = {};


/* Returns a boolean indicating if the immediateDestination or immediateOrigin
 * is in the proper format
 * @immediateDestinationOrOrigin String immediateDestination or immediateOrigin value
 * @pattern String regular expression pattern for field
 * @return boolean Returns true if value matches pattern
 */
exports.validateImmediateDestinationOrOrigin = function(immediateDestinationOrOrigin, pattern) {
    var regex = new RegExp();
    regex.pattern = pattern;

    // trim string
    immediateDestinationOrOrigin = immediateDestinationOrOrigin.trim();

    // if immediateDestinationOrOrigin is 9 characters long
    if (immediateDestinationOrOrigin.length == 9) {

        // add space to beginning (NACHA field format)
        immediateDestinationOrOrigin = constants.SPACE + immediateDestinationOrOrigin;

        // test the string against the fields pattern
        return regex.test(immediateDestinationOrOrigin);

    // if immediateDestinationOrOrigin isn't 9 characters long
    } else {
        return false;
    }

    
}

