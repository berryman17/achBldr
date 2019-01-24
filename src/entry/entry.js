

class Entry {
    constructor() {
        this.addendaList = addendaList;
    }

    addAddenda(entryAddenda) {
        this.addendaList.push(entryAddenda);
    }
}

var addendaList = [];

module.exports = Entry;