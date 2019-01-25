

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
        value: "8"
    },
    serviceClassCode: {
        required: true,
        position: 2,
        length: 3,
        patterm: "/[2][028][05]/",
        value: "200"
    },
    entryCount: {
        required: true,
        position: 5,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    entryHash: {
        required: true,
        position: 11,
        length: 10,
        patterm: "/[0-9]{10}/",
        value: 0
    },
    totalDebitAmount: {
        required: true,
        position: 21,
        length: 12,
        patterm: "/[0-9]{12}/",
        value: 0
    },
    totalCreditAmount: {
        required: true,
        position: 33,
        length: 12,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    companyIdentification: {
        required: true,
        position: 45,
        length: 10,
        patterm: "/[0-9 ]{10}/",
        value: " 810101012"
    },
    messageAuthCode: {
        required: false,
        position: 55,
        length: 19,
        patterm: "/[ ]{19}/",
        value: ""
    },
    reserved: {
        required: false,
        position: 74,
        length: 6,
        patterm: "/[ ]{6}/",
        value: ""
    },
    originatingDfiId: {
        required: true,
        position: 80,
        length: 8,
        patterm: "/[0-9]{8}/",
        value: "09290524"
    },
    batchNumber: {
        required: true,
        position: 88,
        length: 7,
        patterm: "/[0-9]{7}/",
        value: 1
    },
}

module.exports = BatchControl;