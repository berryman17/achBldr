const Utils = require('../src/utils');

describe("ensure stringFill() returns properly formatted strings", () => {
    
    // 9 chars is desired length
    var tooLongString = "toooooooLong";
    var sameLengthString = "justRight";
    var shortString = "short"

    test("does not throw error when required field value provided", () => {
        expect(()  => {Utils.stringFill(tooLongString, " ", "fromLeft", 9)}).toThrow();
    });
    
});

describe("ensure checkRequiredFields() throws errors properly", () => {

    var fields = {
        testField: {
            required: true,
            position: 1, // arbitrary
            length: 1, // arbitrary
            patterm: "/[0-9\w]/", // arbitrary
            value: ""
        }
    }

    beforeEach(() => {
        fields.testField.value = "not empty";
    });

    test("does not throw error when required field value provided", () => {
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("does not throw error when required field value is empty string", () => {
        fields.testField.value = "";
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("does not throw error when required field value is 0", () => {
        fields.testField.value = 0;
        expect(() => {Utils.checkRequiredFields(fields)}).not.toThrow();
    });

    test("throws error when required field value is null", () => {
        fields.testField.value = null;
        expect(() => {Utils.checkRequiredFields(fields)}).toThrow();
    });

    test("throws error when required field value is undefined", () => {
        fields.testField.value = undefined;
        expect(() => {Utils.checkRequiredFields(fields)}).toThrow();
    });
});