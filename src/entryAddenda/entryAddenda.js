

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
        pattern: "(7)",
        value: "7"
    },
    addendaTypeCode: {
        name: "AddendaTypeCode",
        required: true,
        position: 2,
        length: 2,
        pattern: "[0-9]{2}",
        value: "05"
    },
    paymentRelatedInfo: {
        name: "PaymentRelatedInformation",
        required: false,
        position: 4,
        length: 80,
        pattern: "[0-9\w\-\*\\ ]{80}",
        value: ""
    },
    addendaSequenceNumber: {
        name: "AddendaSequenceNumber",
        required: true,
        position: 84,
        length: 4,
        pattern: "[0-9]{4}",
        value: "0001"
    },
    entryDetailSequenceNumber: {
        name: "EntryDetailSequenceNumber",
        required: true,
        position: 88,
        length: 7,
        pattern: "[0-9]{7}",
        value: ""
    },
}

module.exports = EntryAddenda;