import {
    writeFile,
    readFile
} from "fs";

class FileManager {
    writeTextFile() {
        writeFile('myfile.txt', 'The Test Data', (err) => {
            if (err) {
                console.log(`Message ${err.message}`);
                return;
            }
            console.log('File is Written Successfully');
        });
    }
    readTextFile() {
        readFile('myfile.txt', (err, data) => {
            if (err) {
                console.log(`Error ${err.message}`);
                return;
            }
            console.log(`data read from file ${data.toString()}`);
        });
    }
}

module.exports = FileManager;