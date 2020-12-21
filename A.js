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
        if (i == 'a' || i=='y'||i == 'e' || i == 'o' || i == 'i' || i == 'u') {
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
