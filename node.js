// const os =require("os");
// const add=require("./math");
import os from"os";
import add from "./math.js";
console.log(os.platform());
console.log(add(10,20));
import http from "http";
const server=http.createServer((req,res)=>{
    res.write("hello Students");
    res.write("gdfjhdsfgs");
    res.end;
})
server.listen(3000);

//task crate a Node.js command-line application 