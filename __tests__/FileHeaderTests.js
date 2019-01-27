const FileHeader = require('../src/file/FileHeader');

describe("FileHeader methods should throw/not throw errors properly", () => {

    var fileHeader;
    const initObj = {
        immediateDestination: "092905249",
        immediateOrigin: "092905249"
    }
    beforeEach(() => {
        fileHeader = new FileHeader(initObj);
    });

    // TODO
    /*
    test("throws error when constructor called with required fields missing", () => {
        const reqMissing = {

        }
        expect(() => {new FileHeader()}).toThrow();
    });

    // TODO
    test("does not throw error when constructor called with optional fields missing", () => {
        const optMissing = {
            
        }
        expect(() => {new FileHeader()}).not.toThrow();
    });
    */
    test("throws error when setImmediateDestination() parameter is undefined", () => {
        expect(() => {fileHeader.setImmediateDestination(undefined)}).toThrow();
    });

    test("throws error when setImmediateDestination() parameter is null", () => {
        expect(() => {fileHeader.setImmediateDestination(null)}).toThrow();
    });

    test("does not throw error when setImmediateDestination() parameter is empty string", () => {
        expect(() => {fileHeader.setImmediateDestination("")}).not.toThrow();
    });

    test("does not throw error when setImmediateDestination() parameter is valid string", () => {
        expect(() => {fileHeader.setImmediateDestination("092905249")}).not.toThrow();
    });

    test("throws error when setImmediateOrigin() parameter is undefined", () => {
        expect(() => {fileHeader.setImmediateOrigin(undefined)}).toThrow();
    });

    test("throws error when setImmediateOrigin() parameter is null", () => {
        expect(() => {fileHeader.setImmediateOrigin(null)}).toThrow();
    });

    test("does not throw error when setImmediateOrigin() parameter is empty string", () => {
        expect(() => {fileHeader.setImmediateOrigin("")}).not.toThrow();
    });

    test("does not throw error when setImmediateOrigin() parameter is valid string", () => {
        expect(() => {fileHeader.setImmediateOrigin("092905249")}).not.toThrow();
    });
});