// const person = require("./person");


const path = require("path");
const fs = require("fs");
const http = require("http");

/*================= node core modules ===========*/

//current file
console.log(__filename)

//current directory (mappen vi står i)
console.log(__dirname);

/*================= path module methods ===========*/

//basename - gets filename
console.log(path.basename(__filename))

//dirname -  gets directory name
console.log(path.dirname(__filename))

//extname - gets the extenshion (filetype) of file
console.log(path.extname(__filename))

//parse -  creates a path object from the path of the specified file
console.log(path.parse(__filename))

//join - combines paths 
console.log(path.join(__dirname, "test", "hello.html"))

/*====================== filesystem (fs) module methods ==================*/

//mkdir - creates a folder
fs.mkdir(path.join(__dirname, "test", {}, (error) => {
    if(error) throw error;
    console.log("folder created")
}))

//writefile - creates file and writes to it
fs.writeFile(path.join(__dirname, "test", "hello.txt"), "hello there!", (error) => {
    if(error) throw error;
    console.log("created and write to file")
})

//appendfile - adds content to existing file
fs.appendFile(path.join(___dirname, "test", "hello.txt"), "little brother", (error) => {
    if(error) throw error;
    console.log("appended new text to file");
})

//readFile - reads content from file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (error, data) => {
    if(error) throw error;
    console.log(data);
})

//rename - renames a file
fs.rename(path.join(__dirname, "test", "hello.txt"), path.join(__dirname, "test", "helloWorld.txt"), (error) => {
    if(error) throw error;
    console.log("renamed file")
})


/* ================== http module ================== */

//createServer - creates a server object
http.createServer((req, res) => {
    res.write("hello from my first server");
    res.end();
}).listen(2500, () => console.log("server is up and running"));

