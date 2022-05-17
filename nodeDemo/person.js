const { v4: uuidv4 } = require("uuid")

const person = {
    id: uuidv4(),
    fName: "amalia",
    age: 21
}

module.exports = person;

//export default person;