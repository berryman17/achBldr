const Validation = require('../Validation');
const Utils = require('../utils');
const Constants  = require('../constants');
const AchFieldError = require('../error/AchFieldError');
const moment = require('moment');

class FileHeader {
    constructor(config) {
        this.fields = fields;
        this.setImmediateDestination(config.immediateDestination);
        this.setImmediateDestinationName(config.immediateDestinationName);
        this.setImmediateOrigin(config.immediateOrigin);
        this.setImmediateOriginName(config.immediateOriginName);
        this.setFileCreationDate(config.fileCreationDate);

        // throw error if required fields aren't provided
        Utils.checkRequiredFields(this.fields);
    }

    setImmediateDestination(immediateDestination) {
        // throw error if immediateDestination is undefined or null
        if (immediateDestination == undefined || immediateDestination == null) throw new AchFieldError("ImmediateDestination is required");

        var curField = this.fields.immediateDestination;
        var immDest = Utils.stringFill(immediateDestination, Constants.SPACE, Constants.FROM_LEFT, curField.length);
        curField.value = immDest;
        if (!Validation.validateFieldPattern(curField)) throw new AchFieldError("ImmediateDestination has invalid format");
    }

    setImmediateDestinationName(immediateDestinationName) {
        var name = immediateDestinationName;
        var curField = this.fields.immediateDestinationName;
        
        // prep name
        name = Utils.prepInputForField(name, curField);

        // set field value
        curField.value = name;
        // throw error if field is invalid
        if (!Validation.validateFieldPattern(curField)) throw new AchFieldError("ImmediateDestinationName has invalid format");
    }

    setImmediateOrigin(immediateOrigin) {
        // throw error if immediateOrigin is undefined or null
        if (immediateOrigin == undefined || immediateOrigin == null) throw new AchFieldError("ImmediateOrigin is required");

        var curField = this.fields.immediateOrigin;
        var immOri = Utils.stringFill(immediateOrigin, Constants.SPACE, Constants.FROM_LEFT, curField.length);
        curField.value = immOri;
        if (!Validation.validateFieldPattern(curField)) throw new AchFieldError("ImmediateOrigin has invalid format");
    }

    setImmediateOriginName(immediateOriginName) {
        var name = immediateOriginName;
        var curField = this.fields.immediateOriginName;
        // prep name
        name = Utils.prepInputForField(name, curField);

        // set field value
        curField.value = name;
        // throw error if field is invalid
        if (!Validation.validateFieldPattern(curField)) throw new AchFieldError("ImmediateOriginName has invalid format");
    }

    setFileCreationDate(fileCreationDate) {
        const format = "YYMMDD";
        var curField = this.fields.fileCreationDate;
        var fileCrtnDate = fileCreationDate;
        if (fileCrtnDate === undefined || fileCrtnDate === null) {
            curField.value = moment().format(format);
        } else if (fileCrtnDate instanceof moment) {
            curField.value = fileCrtnDate.format(format);
        } else {
            curField.value = fileCrtnDate;
        }
        if (!Validation.validateFieldPattern(curField)) throw new AchFieldError("FileCreationDate has invalid format");
    }

    setFileCreationTime(fileCreationTime) {
        this.fields.fileCreationTime.value = fileCreationTime;
    }

    setReferenceCode(referenceCode) {
        var refCode = referenceCode;
        var curField = this.fields.immediateOriginName;

        // prep refCode
        refCode = Utils.prepInputForField(refCode, curField);
        
        // set field value
        curField.value = refCode;
        // validate field value
        Validation.validateFieldPattern(curField);
    }

    toAchString() {
        var resultString = "";
        Object.keys(this.fields).forEach(field => {
            resultString += fields[field].value;
        });
        return resultString;
    }

}

const fields = {
    recordTypeCode: {
        name: "RecordTypeCode",
        required: true,
        position: 1,
        length: 1,
        pattern: /(1)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "1"
    },
    priorityCode: {
        name: "PriorityCode",
        required: true,
        position: 2,
        length: 2,
        pattern: /(01)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "01"
    },
    immediateDestination: {
        name: "ImmediateDestination",
        required: true,
        position: 4,
        length: 10,
        pattern: /[ ][0-9]{9}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: Constants.SPACE,
        value: ""
    },
    immediateOrigin: {
        name: "ImmediateOrigin",
        required: true,
        position: 14,
        length: 10,
        pattern: /[ ][0-9]{9}/g,
        fillDirection: Constants.FROM_LEFT,
        fillChar: Constants.SPACE,
        value: ""
    },
    fileCreationDate: {
        name: "FileCreationDate",
        required: true,
        position: 24,
        length: 6,
        pattern: /[0-9]{6}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    fileCreationTime: {
        name: "FileCreationTime",
        required: false,
        position: 30,
        length: 4,
        pattern: /[0-2][0-9][0-9][0-9]/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    fileIdModifier: {
        name: "FileIdModifier",
        required: true,
        position: 33,
        length: 1,
        pattern: /[0-9A-Z]{1}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "A"
    },
    recordSize: {
        name: "RecordSize",
        required: true,
        position: 35,
        length: 3,
        pattern: /(094)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "094"
    },
    blockingFactor: {
        name: "BlockingFactor",
        required: true,
        position: 38,
        length: 2,
        pattern: /(10)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "10"
    },
    formatCode: {
        name: "FormatCode",
        required: true,
        position: 10,
        length: 1,
        pattern: /(1)/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: "1"
    },
    immediateDestinationName: {
        name: "ImmediateDestinationName",
        required: false,
        position: 41,
        length: 23,
        pattern: /[\w\- ]{23}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    immediateOriginName: {
        name: "ImmediateOriginName",
        required: false,
        position: 64,
        length: 23,
        pattern: /[\w\- ]{23}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    },
    referenceCode: {
        name: "ReferenceCode",
        required: false,
        position: 87,
        length: 8,
        pattern: /[\w\- ]{8}/g,
        fillDirection: Constants.FROM_RIGHT,
        fillChar: Constants.SPACE,
        value: ""
    }

}

module.exports = FileHeader;