const FileHeader = require('./FileHeader')
const FileControl = require('./FileControl')

class File {
    constructor(config) {
        this.header = new FileHeader({
            immediateDestination: config.immediateDestination,
            immediateDestinationName: config.immediateDestinationName,
            immediateOrigin: config.immediateOrigin,
            immediateOriginName: config.immediateOriginName,
            fileCreationDate: config.fileCreationDate,
            fileCreationTime: config.fileCreationTime
        });
        this.batchList = new Array();
        this.control = new FileControl();
    }

    addBatch(newBatch) {
        this.batchList.push(newBatch);
    }

    
}



module.exports = File;