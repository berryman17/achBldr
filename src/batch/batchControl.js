const Constants = require('../constants');

class BatchControl {
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
        pattern: /(8)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "8"
    },
    serviceClassCode: {
        name: "ServiceClassCode",
        required: true,
        position: 2,
        length: 3,
        pattern: /[2][028][05]/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    entryCount: {
        name: "EntryCount",
        required: true,
        position: 5,
        length: 6,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    entryHash: {
        name: "EntryHash",
        required: true,
        position: 11,
        length: 10,
        pattern: /[0-9]{10}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: Constants.SPACE,
        value: 0
    },
    totalDebitAmount: {
        name: "TotalDebitAmount",
        required: true,
        position: 21,
        length: 12,
        pattern: /[0-9]{12}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    totalCreditAmount: {
        name: "TotalCreditAmount",
        required: true,
        position: 33,
        length: 12,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    },
    companyIdentification: {
        name: "CompanyIdentification",
        required: true,
        position: 45,
        length: 10,
        pattern: /[0-9 ]{10}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: Constants.SPACE,
        value: ""
    },
    messageAuthCode: {
        name: "MessageAuthenticationCode",
        required: false,
        position: 55,
        length: 19,
        pattern: /[ ]{19}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    reserved: {
        name: "Reserved",
        required: false,
        position: 74,
        length: 6,
        pattern: /[ ]{6}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    originatingDfiId: {
        name: "OriginationDfiIdentification",
        required: true,
        position: 80,
        length: 8,
        pattern: /[0-9]{8}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    batchNumber: {
        name: "BatchNumber",
        required: true,
        position: 88,
        length: 7,
        pattern: /[0-9]{7}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: "0",
        value: 0
    }
}

module.exports = BatchControl;