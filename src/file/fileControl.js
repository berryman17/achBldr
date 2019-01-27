const Constants = require('../constants');

class FileControl {
    constructor() {
        this.fields = fields;
    }

}

const fields = {
    recordTypeCode: {
        name: "RecordTypeCode",
        required: true,
        position: 1,
        length: 1,
        pattern: /(9)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "9"
    },
    batchCount: {
        name: "BatchCount",
        required: true,
        position: 2,
        length: 6,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    blockCount: {
        name: "BlockCount",
        required: true,
        position: 8,
        length: 6,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    entryCount: {
        name: "EntryCode",
        required: true,
        position: 14,
        length: 8,
        pattern: /[0-9]{8}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    entryHash: {
        name: "EntryHash",
        required: true,
        position: 22,
        length: 10,
        pattern: /[0-9]{10}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    totalDebitAmount: {
        name: "TotalDebitAmount",
        required: true,
        position: 32,
        length: 12,
        pattern: /[0-9]{12}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    totalCreditAmount: {
        name: "TotalCreditAmount",
        required: true,
        position: 44,
        length: 12,
        pattern: /[0-9]{12}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    reserved: {
        name: "Reserved",
        required: false,
        position: 56,
        length: 39,
        pattern: /[ ]{39}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    }
}

module.exports = FileControl;