
const File = require('./src/file/file')
const FileHeader = require('./src/file/fileHeader')
const EntryPPD = require('./src/entry/entryPPD')
const EntryAddenda = require('./src/entryAddenda/entryAddenda')

var f = new File();
var e = new EntryPPD();
var ea = new EntryAddenda();

e.addAddenda(ea);
console.log(e.addendaList);
