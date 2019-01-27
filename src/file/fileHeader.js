const Validation = require('../Validation');
const Utils = require('../utils');
const Constants  = require('../constants');
const AchFieldError = require('../error/AchFieldError');

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
        // throw error if immediateDestination is undefined or null
        if (immediateDestination == undefined || immediateDestination == null) throw new AchFieldError("ImmediateDestination is required");

        var curField = this.fields.immediateDestination;
        var immDest = Utils.stringFill(immediateDestination, Constants.SPACE, "fromLeft", curField.length);
        curField.value = immDest;
        Validation.validateImmediateDestinationOrOrigin(curField);
    }

    setImmediateDestinationName(immediateDestinationName) {
        var name = immediateDestinationName;
        var curField = this.fields.immediateDestinationName;
        // shorten name if longer than field length
        name = Utils.shortenStringForField(name, curField.length);

        // fill string with spaces from right
        name = Utils.stringFill(name, Constants.SPACE, "fromRight", curField.length);
        // set field value
        curField.value = name;
        // throw error if field is invalid
        if (Validation.validateImmediateDestinationOrOriginName(curField)) throw new AchFieldError("ImmediateDestinationName has invalid format");
    }

    setImmediateOrigin(immediateOrigin) {
        // throw error if immediateOrigin is undefined or null
        if (immediateOrigin == undefined || immediateOrigin == null) throw new AchFieldError("ImmediateOrigin is required");

        var curField = this.fields.immediateOrigin;
        var immOri = Utils.stringFill(immediateOrigin, Constants.SPACE, "fromLeft", curField.length);
        curField.value = immOri;
        Validation.validateImmediateDestinationOrOrigin(curField);
    }

    setImmediateOriginName(immediateOriginName) {
        var name = immediateOriginName;
        var curField = this.fields.immediateOriginName;
        // shorten name if longer than field length
        name = Utils.shortenStringForField(name, curField.length);

        // fill string with spaces if shorter than 
        Utils.stringFill(name, Constants.SPACE, "fromRight", curField.length);
        // set field value
        curField.value = name;
        // throw error if field is invalid
        if (Validation.validateImmediateDestinationOrOriginName(curField)) throw new AchFieldError("ImmediateOriginName has invalid format");
    }

    setFileCreationDate(fileCreationDate) {
        this.fields.fileCreationDate.value = fileCreationDate;
    }

    setFileCreationTime(fileCreationTime) {
        this.fields.fileCreationTime.value = fileCreationTime;
    }

    setReferenceCode(referenceCode) {
        var refCode = referenceCode;
        var curField = this.fields.immediateOriginName;
        // shorten refCode if too long
        refCode = Utils.shortenStringForField(refCode, curField.length);

        // fill string with spaces if shorter than field length
        Utils.stringFill(refCode, Constants.SPACE, "fromRight", curField.length);
        // set field value
        curField.value = refCode;
        // validate field value
        Validation.validateReferenceCode(curField);
    }

}

const fields = {
    recordTypeCode: {
        name: "RecordTypeCode",
        required: true,
        position: 1,
        length: 1,
        pattern: "(1)",
        value: "1"
    },
    priorityCode: {
        name: "PriorityCode",
        required: true,
        position: 2,
        length: 2,
        pattern: "(01)",
        value: "01"
    },
    immediateDestination: {
        name: "ImmediateDestination",
        required: true,
        position: 4,
        length: 10,
        pattern: "[ ][0-9]{9}",
        value: ""
    },
    immediateOrigin: {
        name: "ImmediateOrigin",
        required: true,
        position: 14,
        length: 10,
        pattern: "[ ][0-9]{9}",
        value: ""
    },
    fileCreationDate: {
        name: "FileCreationDate",
        required: true,
        position: 24,
        length: 6,
        pattern: "[0-9]{6}",
        value: ""
    },
    fileCreationTime: {
        name: "FileCreationTime",
        required: false,
        position: 30,
        length: 4,
        pattern: "[0-2][0-9][0-9][0-9]",
        value: ""
    },
    fileIdModifier: {
        name: "FileIdModifier",
        required: true,
        position: 33,
        length: 1,
        pattern: "[0-9A-Z]{1}",
        value: "A"
    },
    recordSize: {
        name: "RecordSize",
        required: true,
        position: 35,
        length: 3,
        pattern: "(094)",
        value: "094"
    },
    blockingFactor: {
        name: "BlockingFactor",
        required: true,
        position: 38,
        length: 2,
        pattern: "(10)",
        value: "10"
    },
    formatCode: {
        name: "FormatCode",
        required: true,
        position: 10,
        length: 1,
        pattern: "(1)",
        value: "1"
    },
    immediateDestinationName: {
        name: "ImmediateDestinationName",
        required: false,
        position: 41,
        length: 23,
        pattern: "[0-9\\w\\- ]{23}",
        value: ""
    },
    immediateOriginName: {
        name: "ImmediateOriginName",
        required: false,
        position: 64,
        length: 23,
        pattern: "[0-9\\w\\- ]{23}",
        value: ""
    },
    referenceCode: {
        name: "ReferenceCode",
        required: false,
        position: 87,
        length: 8,
        pattern: "[0-9\\w\\- ]{8}",
        value: ""
    }

}

module.exports = FileHeader;