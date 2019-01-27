const Validation = require('../Validation');
const Utils = require('../utils');
const Constants  = require('../constants');

class FileHeader {
    constructor(config) {
        this.fields = fields;
        this.setImmediateDestination(config.immediateDestination);
        this.setImmediateDestinationName(config.immediateDestinationName);
        this.setImmediateOrigin(config.immediateOrigin);
        this.setImmediateOriginName(config.immediateOriginName);

        // throw error if required fields aren't provided
        Utils.checkRequiredFields(this.fields);
    }



    setImmediateDestination(immediateDestination) {
        this.fields.immediateDestination.value = immediateDestination;
        Validation.validateImmediateDestinationOrOrigin(this.fields.immediateDestination);
    }

    setImmediateDestinationName(immediateDestinationName) {
        var name = "";
        var curField = this.fields.immediateDestinationName;
        // fill field value with spaces if input is undefined or null
        if (immediateDestinationName == undefined || immediateDestinationName == null) {
            // fill empty string with spaces
            name = Utils.stringFill(name, Constants.SPACE, "fromRight", curField.length);
            curField.value = name;
            Validation.validateImmediateDestinationOrOriginName(this.fields.immediateDestinationName);
        } else {
            name = immediateDestinationName;
            // shorten input if longer than field length
            if (immediateDestinationName.length > curField.length) {
                name = name.substr(0, curField.length-1);
            }
            // fill string with spaces if shorter than 
            Utils.stringFill(name, Constants.SPACE, "fromRight", curField.length);
            curField.value = name;
            Validation.validateImmediateDestinationOrOriginName(curField);
        }
    }

    setImmediateOrigin(immediateOrigin) {
        this.fields.immediateOrigin.value = immediateOrigin;
        Validation.validateImmediateDestinationOrOrigin(this.fields.immediateOrigin);
    }

    setImmediateOriginName(immediateOriginName) {
        this.fields.immediateOriginName.value = immediateOriginName;
    }

    setFileCreationDate(fileCreationDate) {
        this.fields.fileCreationDate.value = fileCreationDate;
    }

    setFileCreationTime(fileCreationTime) {
        this.fields.fileCreationTime.value = fileCreationTime;
    }

}

const fields = {
    recordTypeCode: {
        name: "RecordTypeCode",
        required: true,
        position: 1,
        length: 1,
        patterm: "/(1)/",
        value: "1"
    },
    priorityCode: {
        name: "PriorityCode",
        required: true,
        position: 2,
        length: 2,
        patterm: "/(01)/",
        value: "01"
    },
    immediateDestination: {
        name: "ImmediateDestination",
        required: true,
        position: 4,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        value: " 123456789"
    },
    immediateOrigin: {
        name: "ImmediateOrigin",
        required: true,
        position: 14,
        length: 10,
        patterm: "/[ ][0-9]{9}/",
        value: " 123456789"
    },
    fileCreationDate: {
        name: "FileCreationDate",
        required: true,
        position: 24,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: ""
    },
    fileCreationTime: {
        name: "FileCreationTime",
        required: false,
        position: 30,
        length: 4,
        patterm: "/[0-2][0-9][0-9][0-9]/",
        value: ""
    },
    fileIdModifier: {
        name: "FileIdModifier",
        required: true,
        position: 33,
        length: 1,
        patterm: "/[0-9A-Z]{1}/",
        value: "A"
    },
    recordSize: {
        name: "RecordSize",
        required: true,
        position: 35,
        length: 3,
        patterm: "/(094)/",
        value: "094"
    },
    blockingFactor: {
        name: "BlockingFactor",
        required: true,
        position: 38,
        length: 2,
        patterm: "/(10)/",
        value: "10"
    },
    formatCode: {
        name: "FormatCode",
        required: true,
        position: 10,
        length: 1,
        patterm: "/(1)/",
        value: "1"
    },
    immediateDestinationName: {
        name: "ImmediateDestinationName",
        required: false,
        position: 41,
        length: 23,
        patterm: "/[0-9\w\- ]{23}/",
        value: ""
    },
    immediateOriginName: {
        name: "ImmediateOriginName",
        required: false,
        position: 64,
        length: 23,
        patterm: "/[0-9\w\- ]{23}/",
        value: ""
    },
    referenceCode: {
        name: "ReferenceCode",
        required: false,
        position: 87,
        length: 8,
        patterm: "/[0-9\w\- ]{0,23}/",
        value: ""
    }

}

module.exports = FileHeader;