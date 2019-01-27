const AchFieldError = require('./error/AchFieldError');

var exports = module.exports = {};

// Fills string fromLeft or fromRight with fillChar to desired outputLength
exports.stringFill = function(inputString, fillChar, fillDirection, outputLength) {
    // if inputString is null or undefined, set to empty string
    if (inputString == undefined || inputString == null) inputString = "";

    // throw error if fillChar is not one character
    if (fillChar.length != 1) throw new Error("fillChar must be one character");
    // throw error if outputLength is less than or equal to 0
    if (outputLength <= 0) throw new Error("outputLength parameter must be greater than 0");
    // throw error if inputString is longer than desired outputLength
    if (inputString.length > outputLength) throw new Error("outputLength must be greater than inputString length");

    var lengthDiff = (outputLength - inputString.length > 0) ? (outputLength - inputString.length) : 0;
    
    // return if input is correct length
    if (lengthDiff == 0) return inputString;

    if (fillDirection == "fromLeft") {
        return fillChar.repeat(lengthDiff) + inputString;
    } else if (fillDirection == "fromRight") {
        return inputString + fillChar.repeat(lengthDiff);
    }   
}

// Checks that required fields are not null or undefined in ACH objects
exports.checkRequiredFields = function(fields) {
    Object.keys(fields).forEach((fieldName) => {
        var field = fields[fieldName];
        if (field.required == true) {
            if (field.value == undefined) {
                throw new AchFieldError(fieldName + " is undefined");
            } else if (field.value == null) {
                throw new AchFieldError(fieldName + " is null");
            }
        }
    })
}

// Shortens input string to field length 
exports.shortenStringForField = (inputString, expectedLength) => {
    // throw error if expectedLength < 1
    if (expectedLength < 1) throw new Error("expectedLength must be greater than 1");

    var resultString = inputString;
    // fill field value with spaces if input is undefined or null
    if (inputString == undefined || inputString == null) {
        resultString = "";

    // shorten input if longer than field length    
    } else if (inputString.length > expectedLength) {
        resultString = inputString.substr(0, expectedLength);
    }

    return resultString;
}
