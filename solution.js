// https://www.youtube.com/watch?v=feDyXKQkSj0
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = ''
let currentLine=0

function readLine(){
    return standardInputString[currentLine++]
}

process.stdin.on('data',rawData=> {
    standardInputString+=rawData
})

process.stdin.on('end',_=>{
    standardInputString = standardInputString.trim().split('\n').map(line=>{
        return line.trim()
    })
    main()
})

function main(){
    const r = parseInt(readLine())
    console.log("Area = ",Math.PI*r*r)
}