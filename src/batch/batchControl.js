

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
        pattern: "(8)",
        value: "8"
    },
    serviceClassCode: {
        name: "ServiceClassCode",
        required: true,
        position: 2,
        length: 3,
        pattern: "[2][028][05]",
        value: "200"
    },
    entryCount: {
        name: "EntryCount",
        required: true,
        position: 5,
        length: 6,
        pattern: "[0-9]{6}",
        value: 0
    },
    entryHash: {
        name: "EntryHash",
        required: true,
        position: 11,
        length: 10,
        pattern: "[0-9]{10}",
        value: 0
    },
    totalDebitAmount: {
        name: "TotalDebitAmount",
        required: true,
        position: 21,
        length: 12,
        pattern: "[0-9]{12}",
        value: 0
    },
    totalCreditAmount: {
        name: "TotalCreditAmount",
        required: true,
        position: 33,
        length: 12,
        pattern: "[0-9]{6}",
        value: 0
    },
    companyIdentification: {
        name: "CompanyIdentification",
        required: true,
        position: 45,
        length: 10,
        pattern: "[0-9 ]{10}",
        value: " 810101012"
    },
    messageAuthCode: {
        name: "MessageAuthenticationCode",
        required: false,
        position: 55,
        length: 19,
        pattern: "[ ]{19}",
        value: ""
    },
    reserved: {
        name: "Reserved",
        required: false,
        position: 74,
        length: 6,
        pattern: "[ ]{6}",
        value: ""
    },
    originatingDfiId: {
        name: "OriginationDfiIdentification",
        required: true,
        position: 80,
        length: 8,
        pattern: "[0-9]{8}",
        value: "09290524"
    },
    batchNumber: {
        name: "BatchNumber",
        required: true,
        position: 88,
        length: 7,
        pattern: "[0-9]{7}",
        value: 1
    }
}

module.exports = BatchControl;