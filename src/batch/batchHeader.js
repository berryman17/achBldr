const Constants = require('../constants');

class BatchHeader {
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
        pattern: /(5)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "5"
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
    companyName: {
        name: "CompanyName",
        required: true,
        position: 5,
        length: 16,
        pattern: /[\w\-]{16}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    companyDiscretionaryData: {
        name: "CompanyDiscretionaryData",
        required: false,
        position: 21,
        length: 20,
        pattern: /[\w\-]{20}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    companyIdentification: {
        name: "CompanyIdentification",
        required: true,
        position: 41,
        length: 10,
        pattern: /[0-9]{10}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: Constants.SPACE,
        value: ""
    },
    standardEntryClassCode: {
        name: "StandardEntryClassCode",
        required: true,
        position: 51,
        length: 3,
        pattern: /[A-Z]{3}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    companyEntryDescription: {
        name: "CompanyEntryDescription",
        required: true,
        position: 54,
        length: 10,
        pattern: /[\w\-]{10}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    companyDescriptiveDate: {
        name: "CompanyDescriptiveDate",
        required: false,
        position: 64,
        length: 6,
        pattern: /[\w\-]{6}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    effectiveEntryDate: {
        name: "EffectiveEntryDate",
        required: true,
        position: 70,
        length: 6,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    settlementDate: {
        name: "SettlementDate",
        required: false,
        position: 76,
        length: 3,
        pattern: /[ ]{3}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    originatorStatusCode: {
        name: "OriginatorStatusCode",
        required: true,
        position: 79,
        length: 1,
        pattern: /(1)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "1"
    },
    originatingDfiId: {
        name: "OriginatingDfiIdentification",
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

module.exports = BatchHeader;