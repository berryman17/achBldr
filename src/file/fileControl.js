

class FileControl {
    constructor() {
        this.fields = fields;
    }

}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(9)/",
        value: "9"
    },
    batchCount: {
        required: true,
        position: 2,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    blockCount: {
        required: true,
        position: 8,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: 0
    },
    entryCount: {
        required: true,
        position: 14,
        length: 8,
        patterm: "/[0-9]{8}/",
        value: 0
    },
    entryHash: {
        required: true,
        position: 22,
        length: 10,
        patterm: "/[0-9]{10}/",
        value: 0
    },
    totalDebitAmount: {
        required: true,
        position: 32,
        length: 12,
        patterm: "/[0-9]{12}/",
        value: 0
    },
    totalCreditAmount: {
        required: true,
        position: 44,
        length: 12,
        patterm: "/[0-9]{12}/",
        value: 0
    },
    reserved: {
        required: false,
        position: 56,
        length: 39,
        patterm: "/[ ]{39}/",
        value: ""
    },
}

module.exports = FileControl;