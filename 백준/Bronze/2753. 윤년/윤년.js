const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";      
const input = fs.readFileSync(filePath, "utf-8").split(" ").map(Number);
const year = input[0]



  if (( year % 4 == 0 ) && ( ( year % 100 != 0)||( year % 400 == 0))){
        console.log("1");
  }
  else{
    console.log("0");
  }