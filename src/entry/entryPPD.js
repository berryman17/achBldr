const Entry = require('./Entry')

class EntryPPD extends Entry {
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
        defaultValue: "6"
    },
    transactionCode: {
        required: true,
        position: 2,
        length: 2,
        patterm: "/[0-9]{2}/",
        defaultValue: ""
    },
    receivingDfiId: {
        required: true,
        position: 4,
        length: 8,
        patterm: "/[0-9]{8}/",
        defaultValue: ""
    },
    checkDigit: {
        required: true,
        position: 12,
        length: 1,
        patterm: "/[0-9]/",
        defaultValue: ""
    },
    accountNumber: {
        required: true,
        position: 13,
        length: 17,
        patterm: "/[0-9\w\- ]{17}/",
        defaultValue: ""
    },
    amount: {
        required: true,
        position: 30,
        length: 10,
        patterm: "/[0-9]{10}/",
        defaultValue: 0
    },
    individualIdNumber: {
        required: false,
        position: 40,
        length: 15,
        patterm: "/[0-9\w\- ]{15}/",
        defaultValue: ""
    },
    individualName: {
        required: true,
        position: 55,
        length: 22,
        patterm: "/[0-9\w\- ]{22}/",
        defaultValue: ""
    },
    discretionaryData: {
        required: false,
        position: 77,
        length: 2,
        patterm: "/[0-9\w\- ]{2}/",
        defaultValue: ""
    },
    addendaRecordIndicator: {
        required: true,
        position: 79,
        length: 1,
        patterm: "/[01]/",
        defaultValue: "0"
    },
    traceNumber: {
        required: true,
        position: 80,
        length: 15,
        patterm: "/[0-9]{15}/",
        defaultValue: ""
    }
}

module.exports = EntryPPD;