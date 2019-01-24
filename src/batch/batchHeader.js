

class BatchHeader {
    constructor() {
        this.fields = fields;
    }

}

const fields = {
    recordTypeCode: {
        required: true,
        position: 1,
        length: 1,
        patterm: "/(5)/",
        defaultValue: "5"
    },
    serviceClassCode: {
        required: true,
        position: 2,
        length: 3,
        patterm: "/[2][028][05]/",
        defaultValue: "200"
    },
    companyName: {
        required: true,
        position: 5,
        length: 16,
        patterm: "/[0-9\w\- ]{16}/",
        defaultValue: "My Company"
    },
    companyDiscretionaryData: {
        required: false,
        position: 21,
        length: 20,
        patterm: "/[0-9\w\- ]{20}/",
        defaultValue: "Payroll 01-01-19"
    },
    companyIdentification: {
        required: true,
        position: 41,
        length: 10,
        patterm: "/[0-9]{10}/",
        defaultValue: "810101012"
    },
    standardEntryClassCode: {
        required: true,
        position: 51,
        length: 3,
        patterm: "/[A-Z]{3}/",
        defaultValue: "PPD"
    },
    companyEntryDescription: {
        required: true,
        position: 54,
        length: 10,
        patterm: "/[0-9A-Z\- ]{10}/",
        defaultValue: "PAYROLL"
    },
    companyDescriptiveDate: {
        required: false,
        position: 64,
        length: 6,
        patterm: "/[0-9A-Z\- ]{6}/",
        defaultValue: "190101"
    },
    effectiveEntryDate: {
        required: true,
        position: 70,
        length: 6,
        patterm: "/[0-9]{6}/",
        defaultValue: "190102"
    },
    settlementDate: {
        required: false,
        position: 76,
        length: 3,
        patterm: "/[ ]{3}/",
        defaultValue: "   "
    },
    originatorStatusCode: {
        required: true,
        position: 79,
        length: 1,
        patterm: "/(1)/",
        defaultValue: "1"
    },
    originatingDfiIdentification: {
        required: true,
        position: 80,
        length: 8,
        patterm: "/[0-9]{8}/",
        defaultValue: "09290524"
    },
    batchNumber: {
        required: true,
        position: 88,
        length: 7,
        patterm: "/[0-9]{7}/",
        defaultValue: 1
    }

}

module.exports = BatchHeader;