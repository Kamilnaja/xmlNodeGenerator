const fs = require('fs');

class XMLWriter {
    createXML() {
        fs.writeFile('./output.txt', 'This is my awesome text. Zażółć gęślą jaźń', (error) => {
            if (error) throw new Error;
        });
    }
}

module.exports = XMLWriter;