const XMLWriter = require('./XMLWriter');

class Main {
    startXMLWriter() {
        let writer = new XMLWriter();
        writer.createXML();
    }
    main() {
        this.startXMLWriter();
    }
}

let main = new Main();
main.startXMLWriter();