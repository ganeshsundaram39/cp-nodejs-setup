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
  main();
});

function main() {
  let [n] = readLine();
  n = +n;
  let obj2 = {},coins,second,coin0,coin1;
  for (let i = 0; i < n; i++) {
     coins = readLine();
     coin1 = coins[1]
     coin0 = coins[0]
    if (obj2[coin1]) {
      second = obj2[coin1];
    } else {
      second = obj2[coin1] = +coin1 * 2;
    }
    console.log((second>2  ||coin0>0)&&( (+coin0 + second) % 2 === 0) ? "YES" : "NO");
  }
}
