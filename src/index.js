const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' ',
};

function decode(expr) {
    let binaryCodeArr = [];
    for (i = 0; i < expr.length / 10; i++) {
        binaryCodeArr.push(expr.substr(0 + i * 10, 10));
    };
    return binaryCodeArr
        .map(item => {
            const oneWordLength = 10;
            let newitem = '';
            for (let j = oneWordLength - 2; j >= 0; j = j - 2) {
                if (item[j] == '*') {
                    newitem = " ";
                }
                else if (item[j] == 1) {
                    item[j + 1] == 1 ? newitem = '-' + newitem : newitem = '.' + newitem;
                }
                else j = 0;
            };
            return newitem;
        })
        .map(item => MORSE_TABLE[item])
        .join('');
};


module.exports = {
    decode
}