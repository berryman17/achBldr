

class BatchHeader {
    constructor() {}

    static fields = {
        recordTypeCode = {
            required: true,
            position: 1,
            length: 1,
            patterm: "/(1)/",
            defaultValue: "1"
        },

    }
}