const AchFieldError = require('./error/AchFieldError');

var exports = module.exports = {};

// TODO not complete
exports.stringFill = function(inputString, fillChar, fillDirection, outputLength) {
    console.log(inputString.length)
    // throw error if outputLength is less than or equal to 0
    if (outputLength <= 0) return new Error("outputLength parameter must be greater than 0");
    if (inputString.length > outputLength) return new Error("outputLength must be greater than inputString length");

    var lengthDiff = (outputLength - inputString.length > 0) ? (outputLength - inputString.length) : 0;
    
    // return if input is correct length
    if (lengthDiff == 0) return inputString;

    if (direction = "fromLeft") {
        return fillChar.repeat(lengthDiff) + inputString;
    } else if (direction = "fromRight") {
        return inputString + fillChar.repeat(lengthDiff);
    }   
}

// Checks that required fields are not null or undefined in ACH objects
exports.checkRequiredFields = function(fields) {
    Object.keys(fields).forEach((fieldName) => {
        var field = fields[fieldName];
        if (field.required == true) {
            if (field.value == undefined) {
                throw new AchFieldError(fieldName + " is undefined")
            } else if (field.value == null) {
                throw new AchFieldError(fieldName + " is null")
            }
        }
    })
}