

class BatchControl {
    constructor() {
        this.fields = fields;
    }
}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(8)/",
        defaultValue: "8"
    },
    serviceClassCode: {
        required: true,
        position: 2,
        length: 3,
        patterm: "/[2][028][05]/",
        defaultValue: "200"
    },
    entryCount: {
        required: true,
        position: 5,
        length: 6,
        patterm: "/[0-9]{6}/",
        defaultValue: 0
    },
    entryHash: {
        required: true,
        position: 11,
        length: 10,
        patterm: "/[0-9]{10}/",
        defaultValue: 0
    },
    totalDebitAmount: {
        required: true,
        position: 21,
        length: 12,
        patterm: "/[0-9]{12}/",
        defaultValue: 0
    },
    totalCreditAmount: {
        required: true,
        position: 33,
        length: 12,
        patterm: "/[0-9]{6}/",
        defaultValue: 0
    },
    companyIdentification: {
        required: true,
        position: 45,
        length: 10,
        patterm: "/[0-9 ]{10}/",
        defaultValue: " 810101012"
    },
    messageAuthCode: {
        required: false,
        position: 55,
        length: 19,
        patterm: "/[ ]{19}/",
        defaultValue: ""
    },
    reserved: {
        required: false,
        position: 74,
        length: 6,
        patterm: "/[ ]{6}/",
        defaultValue: ""
    },
    originatingDfiId: {
        required: true,
        position: 80,
        length: 8,
        patterm: "/[0-9]{8}/",
        defaultValue: "09290524"
    },
    batchNumber: {
        required: true,
        position: 88,
        length: 7,
        patterm: "/[0-9]{7}/",
        defaultValue: 1
    },
}

module.exports.BatchControl = BatchControl;