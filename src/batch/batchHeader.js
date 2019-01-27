

class BatchHeader {
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
        pattern: "(5)",
        value: "5"
    },
    serviceClassCode: {
        name: "ServiceClassCode",
        required: true,
        position: 2,
        length: 3,
        pattern: "[2][028][05]",
        value: "200"
    },
    companyName: {
        name: "CompanyName",
        required: true,
        position: 5,
        length: 16,
        pattern: "[0-9\w\- ]{16}",
        value: "My Company"
    },
    companyDiscretionaryData: {
        name: "CompanyDiscretionaryData",
        required: false,
        position: 21,
        length: 20,
        pattern: "[0-9\w\- ]{20}",
        value: "Payroll 01-01-19"
    },
    companyIdentification: {
        name: "CompanyIdentification",
        required: true,
        position: 41,
        length: 10,
        pattern: "[0-9]{10}",
        value: "810101012"
    },
    standardEntryClassCode: {
        name: "StandardEntryClassCode",
        required: true,
        position: 51,
        length: 3,
        pattern: "[A-Z]{3}",
        value: "PPD"
    },
    companyEntryDescription: {
        name: "CompanyEntryDescription",
        required: true,
        position: 54,
        length: 10,
        pattern: "[0-9A-Z\- ]{10}",
        value: "PAYROLL"
    },
    companyDescriptiveDate: {
        name: "CompanyDescriptiveDate",
        required: false,
        position: 64,
        length: 6,
        pattern: "[0-9A-Z\- ]{6}",
        value: "190101"
    },
    effectiveEntryDate: {
        name: "EffectiveEntryDate",
        required: true,
        position: 70,
        length: 6,
        pattern: "[0-9]{6}",
        value: "190102"
    },
    settlementDate: {
        name: "SettlementDate",
        required: false,
        position: 76,
        length: 3,
        pattern: "[ ]{3}",
        value: "   "
    },
    originatorStatusCode: {
        name: "OriginatorStatusCode",
        required: true,
        position: 79,
        length: 1,
        pattern: "(1)",
        value: "1"
    },
    originatingDfiId: {
        name: "OriginatingDfiIdentification",
        required: true,
        position: 80,
        length: 8,
        pattern: "[0-9]{8}",
        value: "09290524"
    },
    batchNumber: {
        name: "BatchNumber",
        required: true,
        position: 88,
        length: 7,
        pattern: "[0-9]{7}",
        value: 1
    }

}

module.exports = BatchHeader;