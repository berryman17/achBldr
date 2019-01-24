
class FileHeader {
    constructor() {
        this.fields = fields;
    }

}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(1)/",
        defaultValue: "1"
    },
    priorityCode: {
        required: true,
        position: 2,
        length: 2,
        patterm: "/(01)/",
        defaultValue: "01"
    },
    immediateDestination: {
        required: true,
        position: 4,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        defaultValue: " 123456789"
    },
    immediateOrigin: {
        required: true,
        position: 14,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        defaultValue: " 123456789"
    },
    fileCreationDate: {
        required: true,
        position: 24,
        length: 6,
        patterm: "/[0-9]{6}/",
        defaultValue: "190101"
    },
    fileCreationTime: {
        required: false,
        position: 30,
        length: 4,
        patterm: "/[0-2][0-9][0-9][0-9]/",
        defaultValue: "2400"
    },
    fileIdModifier: {
        required: true,
        position: 33,
        length: 1,
        patterm: "/[0-9A-Z]{1}/",
        defaultValue: "A"
    },
    recordSi: {
        required: true,
        position: 35,
        length: 3,
        patterm: "/(094)/",
        defaultValue: "094"
    },
    blockingFactor: {
        required: true,
        position: 38,
        length: 2,
        patterm: "/(10)/",
        defaultValue: "10"
    },
    formatCode: {
        required: true,
        position: 10,
        length: 1,
        patterm: "/(1)/",
        defaultValue: "1"
    },
    immediateDestinationName: {
        required: false,
        position: 41,
        length: 23,
        patterm: "/[0-9\w\- ]{0,23}/",
        defaultValue: "Fed Bank"
    },
    immediateOriginName: {
        required: false,
        position: 64,
        length: 23,
        patterm: "/[0-9\w\- ]{0,23}/",
        defaultValue: "My Bank"
    },
    referenceCode: {
        required: false,
        position: 87,
        length: 8,
        patterm: "/[0-9\w\- ]{0,23}/",
        defaultValue: ""
    }

}

module.exports = FileHeader;