const Constants = require('../constants');

class EntryAddenda {
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
        pattern: /(7)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "7"
    },
    addendaTypeCode: {
        name: "AddendaTypeCode",
        required: true,
        position: 2,
        length: 2,
        pattern: /[0-9]{2}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "05"
    },
    paymentRelatedInfo: {
        name: "PaymentRelatedInformation",
        required: false,
        position: 4,
        length: 80,
        pattern: /[\w\-\*\\\/]{80}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    addendaSequenceNumber: {
        name: "AddendaSequenceNumber",
        required: true,
        position: 84,
        length: 4,
        pattern: /[0-9]{4}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: 0
    },
    entryDetailSequenceNumber: {
        name: "EntryDetailSequenceNumber",
        required: true,
        position: 88,
        length: 7,
        pattern: /[0-9]{7}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    }
}

module.exports = EntryAddenda;