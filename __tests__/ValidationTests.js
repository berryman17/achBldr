const Validation = require('../src/Validation');
const FileHeader = require('../src/file/FileHeader')

describe("pattern validators should return proper boolean for valid/invalid field values", () => {

  var fields;

  beforeEach(() => {
    fields = {
      testField: {
        name: "TestField",
        required: true,
        position: 1,
        length: 15,
        pattern: /[\w]{15}/g,
        value: ""
      }
    }
  });

  test("returns true for field value matching pattern", () => {
    fields.testField.value = "0123456789abcde";
    expect(Validation.validateFieldPattern(fields.testField)).toBe(true);
  });

  test("returns false for field value not matching pattern", () => {
    fields.testField.value = "0123456789@#$%^";
    expect(Validation.validateFieldPattern(fields.testField)).toBe(false);
  });

  test("returns false for field value longer than pattern", () => {
    fields.testField.value = "0123456789abcDEfghijk";
    expect(Validation.validateFieldPattern(fields.testField)).toBe(false);
  });

});