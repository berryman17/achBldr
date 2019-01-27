const constants = require('./constants');
const AchFieldError = require('./error/AchFieldError');

var exports = module.exports = {};


/* Returns a boolean indicating if the field value matches the field pattern.
 * @field Object field from object containing value and pattern
 * @return boolean true if value matches pattern
 */
exports.validateFieldPattern = function(field) {

    // ensure that the field value length is correct
    if (field.value.length === field.length) {
    // test the string against the field's pattern
        if (field.value.match(field.pattern)) {
            return true;
        } 
        
    }

    // otherwise return false
    return false;

}


