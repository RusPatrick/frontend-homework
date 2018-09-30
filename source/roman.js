'use strict';

const romans = [
    ['M', 1000], 
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

function fromRoman(rom) {
    var num = 0;
    romans.forEach((item, i) => {
        while(rom.indexOf(item[0]) === 0) {
            num += item[1]
            rom = rom.replace(item[0], "")
        }
    })

    return num;
}

function toRoman(num) {
    if (num < 0 || num > 4999) {
        throw new TypeError ("Invalid number. Enter a number from 0 to 4999")
    }  
    var result = '';

    for ( let i = 0; i < romans.length; i++ ) {
        while ( num > num % romans[i][1] ) {
            result += romans[i][0];
            num -= romans[i][1];
        }
    }
    return result;
}

function roman(num) {
    if (typeof num === "number") {
        return toRoman(num);
    } 

    if (!isNaN(parseInt(num))) {
        let intNum = parseInt(num);
        return toRoman(intNum);
    }

    if (typeof num === "string") {
        num = num.toUpperCase();
        return fromRoman(num);
    } else {
        throw new TypeError("Enter decimal or roman number")
    }

}