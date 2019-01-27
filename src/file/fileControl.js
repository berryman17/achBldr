

class FileControl {
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
        patterm: "/(9)/",
        value: "9"
    },
    batchCount: {
        name: "BatchCount",
        required: true,
        position: 2,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    blockCount: {
        name: "BlockCount",
        required: true,
        position: 8,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    entryCount: {
        name: "EntryCode",
        required: true,
        position: 14,
        length: 8,
        patterm: "/[0-9]{8}/",
        value: 0
    },
    entryHash: {
        name: "EntryHash",
        required: true,
        position: 22,
        length: 10,
        patterm: "/[0-9]{10}/",
        value: 0
    },
    totalDebitAmount: {
        name: "TotalDebitAmount",
        required: true,
        position: 32,
        length: 12,
        patterm: "/[0-9]{12}/",
        value: 0
    },
    totalCreditAmount: {
        name: "TotalCreditAmount",
        required: true,
        position: 44,
        length: 12,
        patterm: "/[0-9]{12}/",
        value: 0
    },
    reserved: {
        name: "Reserved",
        required: false,
        position: 56,
        length: 39,
        patterm: "/[ ]{39}/",
        value: ""
    }
}

module.exports = FileControl;