const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(req.url)
    // res.writeHead(200, {"Content-Type": "text/html"})
    // res.end("<h1>heey</h1>");
    // if(req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (error, data) => {
    //         if(error) throw error;
    //         res.writeHead(200, {"Content-Type": "text/html"});
    //         res.end(data)
    //     })
    // }
    // if(req.url === "/") {
    //      fs.readFile(path.join(__dirname, "public", "about.html"), (error, data) => {
    //         if(error) throw error;
    //         res.writeHead(200, {"Content-Type": "text/html"});
    //         res.end(data);
    //      })
    // }
    // //api endpoint example
    // if(req.url === "/api/users") {
    //     const users = [
    //         {
    //             name: "Amalia",
    //             age: 21
    //         },
    //         {
    //             name: "Dixie",
    //             age: 22
    //         },
    //     ];
    //     res.writeHead(200, {"Content-Type": "application/json"})
    //     res.end(JSON.stringify(users))
    // }

    /*======= dynamic server ======= */

    //dynamic filepath
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : `${req.url}.html`)

    fs.readFile(filePath, (error, data) => {
        if(error) {
            if(error.code === "ENOENT") {
                fs.readFile(path.join(__dirname, "public", "404.html"), (error, data) => {
                    if(error) throw error;
                    res.writeHead(404, {"Content-Type": ""})
                    res.end(data)
                })
            } else {
                    res.writeHead(500)
                    res.end("Server error")
            }
        } else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log(`server is running at ${PORT}`));