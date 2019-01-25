

class Entry {
    constructor() {
        this.addendaList = new Array();
    }

    addAddenda(entryAddenda) {
        this.addendaList.push(entryAddenda);
    }
}



module.exports = Entry;