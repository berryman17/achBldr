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
    var regex = new RegExp(immediateDestinationOrOriginField.pattern);

    // test the string against the fields pattern
    if (regex.test(immediateDestinationOrOriginField.value)) {
        return true;
    } else {
        return false;
    }

}

exports.validateImmediateDestinationOrOriginName = (immediateDestinationOrOriginNameField) => {
    var regex = new RegExp(immediateDestinationOrOriginNameField.pattern);

    // trim string
    resultString = immediateDestinationOrOriginNameField.value.trim();

    // test the string against the fields pattern
    if (regex.test(resultString)) {
        return true;
    } else {
        return false;
    }
}

exports.validateReferenceCode = (referenceCode) => {
    var regex = new RegExp(referenceCode.pattern);

    // trim string
    resultString = referenceCode.value.trim();

    // test the string against the fields pattern
    if (regex.test(resultString)) {
        return true;
    } else {
        return false;
    }   
}

