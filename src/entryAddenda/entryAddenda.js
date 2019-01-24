

class EntryAddenda {
    constructor() {
        this.fields = fields;
    }
    
}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(7)/",
        defaultValue: "7"
    },
    addendaTypeCode: {
        required: true,
        position: 2,
        length: 2,
        patterm: "/[0-9]{2}/",
        defaultValue: "05"
    },
    paymentRelatedInfo: {
        required: false,
        position: 4,
        length: 80,
        patterm: "/[0-9\w\-\*\\ ]{80}/",
        defaultValue: ""
    },
    addendaSequenceNumber: {
        required: true,
        position: 84,
        length: 4,
        patterm: "/[0-9]{4}/",
        defaultValue: "0001"
    },
    entryDetailSequenceNumber: {
        required: true,
        position: 88,
        length: 7,
        patterm: "/[0-9]{7}/",
        defaultValue: ""
    },
}

module.exports = EntryAddenda;