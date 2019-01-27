const constants = require('./constants');
const AchFieldError = require('./error/AchFieldError');

var exports = module.exports = {};


/* Returns a boolean indicating if the immediateDestination or immediateOrigin
 * is in the proper format
 * @immediateDestinationOrOrigin String immediateDestination or immediateOrigin value
 * @pattern String regular expression pattern for field
 * @return boolean Returns true if value matches pattern
 */
exports.validateImmediateDestinationOrOrigin = function(immediateDestinationOrOriginField) {
    var regex = new RegExp();
    regex.pattern = immediateDestinationOrOriginField.pattern;

    // trim string
    resultString = immediateDestinationOrOriginField.value.trim();

    // if resultString is 9 characters long
    if (resultString.length == 9) {

        // add space to beginning (NACHA field format)
        resultString = constants.SPACE + resultString;

        // test the string against the fields pattern
        if (regex.test(resultString)) {
            return;
        }
    }
    
    // throw error if regex fails
    throw new AchFieldError(immediateDestinationOrOriginField + " didn't match field pattern");

}

exports.validateImmediateDestinationOrOriginName = (immediateDestinationOrOriginNameField) => {
    var regex = new RegExp();
    regex.pattern = immediateDestinationOrOriginNameField.pattern;

    // trim string
    resultString = immediateDestinationOrOriginNameField.value.trim();

    // test the string against the fields pattern
    return regex.test(resultString);
}

