const fs = require("fs");
const fileName = "./test.text";

fs.writeSync(fileName, "Hello world");
