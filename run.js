process.stdin.resume();
process.stdin.setEncoding("utf-8");

let standardInputString = "";
let currentLine = 0;

function readLine() {
  return standardInputString[currentLine++].split(" ");
}

process.stdin.on("data", (rawData) => {
  standardInputString += rawData;
});

process.stdin.on("end", (_) => {
  standardInputString = standardInputString
    .trim()
    .split("\n")
    .map((line) => {
      return line.trim();
    });
  const before = Date.now();
  main();
  console.log("");
  const after = Date.now();
  console.log("executed in " + (after - before) / 1000 + "s");
});

const nov = require("./november2021");

function main() {
  // nov.CHEAPFUEL({readLine});
  nov.EQUALCOIN({ readLine });
}
