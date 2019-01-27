const moment = require('moment');
const File = require('./src/file/File');
const Batch = require('./src/batch/Batch');
const FileHeader = require('./src/file/FileHeader');
const EntryPPD = require('./src/entry/EntryPPD');
const EntryAddenda = require('./src/entryAddenda/EntryAddenda');
const Validation = require('./src/Validation');

/*
var f = new File({
    immediateDestination: "092905249",
    immediateDestinationName: "Stockman Bank of Montana",
    immediateOrigin: "092905249",
    immediateOriginName: "Stockman Bank of Montana",
    fileCreationDate: "190124",
    fileCreationTime: "1925"
});

var b = new Batch();
var e = new EntryPPD();
var ea = new EntryAddenda();
*/

const starter = {
    immediateDestination: "092905249",
    immediateOrigin: "092905249",
    immediateDestinationName: "Stockman Bank of Montana",
    immediateOriginName: "Stockman Bank of Montana",
    fileCreationDate: moment(), // also accepts string "YYMMDD"
    fileCreationTime: moment() // also accepts string "HHmm"
  };

var fileHeader = new FileHeader(starter);
console.log(fileHeader.toAchString() + " " + fileHeader.toAchString().length);

/*
e.addAddenda(ea);
b.addEntry(e);
f.addBatch(b);
console.log(f.header);
*/
