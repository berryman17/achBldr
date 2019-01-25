

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
        value: "5"
    },
    serviceClassCode: {
        required: true,
        position: 2,
        length: 3,
        patterm: "/[2][028][05]/",
        value: "200"
    },
    companyName: {
        required: true,
        position: 5,
        length: 16,
        patterm: "/[0-9\w\- ]{16}/",
        value: "My Company"
    },
    companyDiscretionaryData: {
        required: false,
        position: 21,
        length: 20,
        patterm: "/[0-9\w\- ]{20}/",
        value: "Payroll 01-01-19"
    },
    companyIdentification: {
        required: true,
        position: 41,
        length: 10,
        patterm: "/[0-9]{10}/",
        value: "810101012"
    },
    standardEntryClassCode: {
        required: true,
        position: 51,
        length: 3,
        patterm: "/[A-Z]{3}/",
        value: "PPD"
    },
    companyEntryDescription: {
        required: true,
        position: 54,
        length: 10,
        patterm: "/[0-9A-Z\- ]{10}/",
        value: "PAYROLL"
    },
    companyDescriptiveDate: {
        required: false,
        position: 64,
        length: 6,
        patterm: "/[0-9A-Z\- ]{6}/",
        value: "190101"
    },
    effectiveEntryDate: {
        required: true,
        position: 70,
        length: 6,
        patterm: "/[0-9]{6}/",
        value: "190102"
    },
    settlementDate: {
        required: false,
        position: 76,
        length: 3,
        patterm: "/[ ]{3}/",
        value: "   "
    },
    originatorStatusCode: {
        required: true,
        position: 79,
        length: 1,
        patterm: "/(1)/",
        value: "1"
    },
    originatingDfiIdentification: {
        required: true,
        position: 80,
        length: 8,
        patterm: "/[0-9]{8}/",
        value: "09290524"
    },
    batchNumber: {
        required: true,
        position: 88,
        length: 7,
        patterm: "/[0-9]{7}/",
        value: 1
    }

}

module.exports = BatchHeader;