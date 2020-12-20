process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = ''
let currentLine = 0

function readLine() {
    return standardInputString[currentLine++].split(' ')
}

process.stdin.on('data', rawData => {
    standardInputString += rawData
})

process.stdin.on('end', _ => {
    standardInputString = standardInputString.trim().split('\n').map(line => {
        return line.trim()
    })
    main()
})

var A = require('./A')

function main() {
    // A.nextRound({ readLine });
    A.stringTask({readLine});

}


