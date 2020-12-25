exports.nextRound = ({ readLine }) => {
    let [n, k] = readLine();
    let participants = readLine();

    k = +k;
    let nextRoundCount = 0;
    for (let p in participants) {
        if (+participants[p] && +participants[p] >= +participants[k - 1]) {
            nextRoundCount += 1;
        }
    }
    console.log(nextRoundCount);
}

exports.stringTask = ({ readLine }) => {
    let [input] = readLine(), result = '';
    input = input.toLowerCase();

    for (let i of input) {
        if (i == 'a' || i == 'y' || i == 'e' || i == 'o' || i == 'i' || i == 'u') {
            result += ''
        } else {
            result += '.' + i
        }
    }

    console.log(result);
}


exports.bitPlusPlus = ({ readLine }) => {
    let [numberOfStatements] = readLine(), finalValue = 0;
    numberOfStatements = +numberOfStatements;
    let statement;
    for (let i = 0; i < numberOfStatements; i++) {
        statement = readLine()[0];
        if (statement.includes('++')) {
            finalValue += 1;
        } else if (statement.includes('--')) {
            finalValue -= 1;
        }
    }

    console.log(finalValue);
}

exports.petyaAndStrings = ({ readLine }) => {
    let [firstString] = readLine();
    let [secondString] = readLine(), result = 0;
    firstString = firstString.toLowerCase();
    secondString = secondString.toLowerCase();
    for (let i = 0; i < firstString.length; ++i) {
        if (firstString[i] == secondString[i]) {
            continue;
        } else if (firstString.charCodeAt(i) < secondString.charCodeAt(i)) {
            result = "-1";
            break;
        } else {
            result = "1";
            break;
        }
    }
    console.log(result);
}

exports.beautifulMatrix = ({ readLine }) => {
    let result = 0;
    let row, rowIndex, columnIndex;
    for (let i = 0; i < 5; ++i) {
        rowIndex = i;
        row = readLine();
        columnIndex = row.indexOf("1");
        if (columnIndex >= 0) {
            break;
        }
    }
    result = Math.abs(rowIndex - 2) + Math.abs(columnIndex - 2);
    console.log(result);
}



exports.helpfulMaths=({readLine})=> {
    function merge(left, right) {

        let i = 0, j = 0, result = [];

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {

            result.push(left[i]);
            i++;

        }
        while (j < right.length) {
            result.push(right[j]);
            j++;

        }
        return result;
    }
    function mergeSort(arr) {
        if (!arr || arr.length <= 1)
            return arr;

        let middle = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, middle));
        let right = mergeSort(arr.slice(middle));

        return merge(left, right);
    }

    console.log(mergeSort(readLine()[0].split('+')).join('+'));
}

exports.firstCaptitalize=({readLine}) =>{
    let [word] = readLine();
    console.log(word[0].toUpperCase() + word.slice(1));
}

exports.stonesOnTable=({readLine})=> {
    let [count] = readLine();
    let [stones] = readLine();
    stones = stones.split('');
    let result = 0;
    for (let i = 0; i < count - 1; i++) {
        if (stones[i] == stones[i + 1]) {
            ++result;
        }
    }
    console.log(result);
}

exports.boyOrGirl=({readLine})=> {
    let [word] = readLine();

    word = word.split('');
    let obj = {};
    for (let w of word) {
        obj[w] = 1;
    }
    let count = 0;
    for (let i in obj) {
        count += obj[i];
    }
    console.log(count % 2 === 0 ? 'CHAT WITH HER!' : 'IGNORE HIM!');
}

exports.football=({readLine})=> {
    let [players] = readLine();

    players = players.split('');
    let obj = { 0: 0, 1: 0 };
    let isDangerous;
    let current = players[0];
    for (let v of players) {
        if (v != current) {
            obj[current] = 0;
            current = v;
            obj[v] = 1;
        } else {
            obj[v] = ++obj[v]
        }
        if (obj[v] && obj[v] == 7) {
            isDangerous = true;
            break;
        }
    }
    if (isDangerous) {
        console.log('YES')
    } else {
        console.log('NO')
    }

}