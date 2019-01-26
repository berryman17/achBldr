
class AchFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "AchFieldError"
    }
}

module.exports = AchFieldError;