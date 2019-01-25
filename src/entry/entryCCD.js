const Entry = require('./Entry')

class EntryCCD extends Entry {
    constructor() {
        super();
        this.fields = fields;
    }
}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(6)/",
        value: "6"
    },
    transactionCode: {
        required: true,
        position: 2,
        length: 2,
        patterm: "/[0-9]{2}/",
        value: ""
    },
    receivingDfiId: {
        required: true,
        position: 4,
        length: 8,
        patterm: "/[0-9]{8}/",
        value: ""
    },
    checkDigit: {
        required: true,
        position: 12,
        length: 1,
        patterm: "/[0-9]/",
        value: ""
    },
    accountNumber: {
        required: true,
        position: 13,
        length: 17,
        patterm: "/[0-9\w\- ]{17}/",
        value: ""
    },
    amount: {
        required: true,
        position: 30,
        length: 10,
        patterm: "/[0-9]{10}/",
        value: 0
    },
    identificationNumber: {
        required: false,
        position: 40,
        length: 15,
        patterm: "/[0-9\w\- ]{15}/",
        value: ""
    },
    receivingCompanyName: {
        required: true,
        position: 55,
        length: 22,
        patterm: "/[0-9\w\- ]{22}/",
        value: ""
    },
    discretionaryData: {
        required: false,
        position: 77,
        length: 2,
        patterm: "/[0-9\w\- ]{2}/",
        value: ""
    },
    addendaRecordIndicator: {
        required: true,
        position: 79,
        length: 1,
        patterm: "/[01]/",
        value: "0"
    },
    traceNumber: {
        required: true,
        position: 80,
        length: 15,
        patterm: "/[0-9]{15}/",
        value: ""
    }
}

module.exports = EntryCCD;