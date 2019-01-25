
function validateImmediateDestinationOrOrigin(immediateDestinationOrOrigin, pattern) {
    var regex = new RegExp();
    regex.pattern(pattern);

    
    regex.test(immediateDestinationOrOrigin);
}

module.exports = validateImmediateDestinationOrOrigin;