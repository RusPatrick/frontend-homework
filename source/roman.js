'use strict';

function fromRoman(rom) {
    var num = 0;
    for (let i = 0; i < rom.length; i++) {
        if (rom[i] == 'I') {
            if (rom[i + 1] == 'V') {
                num += 4;
                i++;
                continue;
            }
            if (rom[i + 1] == 'X') {
                num += 9;
                i++;
                continue;
            }
            num++;
        }
        if (rom[i] == 'V') {
            num += 5;
        }
        if (rom[i] == 'X') {
            if (rom[i + 1] == 'L') {
                num += 40;
                i++;
                continue;
            }
            if (rom[i + 1] == 'C') {
                num += 90;
                i++;
                continue;
            }
            num += 10;
        }
        if (rom[i] == 'L') {
            num += 50;
        }
        if (rom[i] == 'C') {
            if (rom[i + 1] == 'D') {
                num += 400;
                i++;
                continue;
            }
            if (rom[i + 1] == 'M') {
                num += 900;
                i++;
                continue;
            }
            num += 100;
        }
        if (rom[i] == 'D') {
            num += 500;
        }
        if (rom[i] == 'M') {
            num += 1000;
        }
    }
    return num;
}

function toRoman(num) {
    if (num < 0 || num > 4999) {
        throw new TypeError ("Invalid number. Enter a number from 0 to 4999")
    }
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = '';

    for ( let i = 0; i < dec.length; i++ ) {
        while ( num > num % dec[i] ) {
            result += romans[i];
            num -= dec[i];
        }
    }
    return result;
}

function roman(num) {
    if (typeof num === "number") {
        return toRoman(num);
    } else if (typeof num === "string") {
        if (!isNaN(parseInt(num))) {
            var intNum = parseInt(num);
            return toRoman(intNum);
        } else {
            num = num.toUpperCase();
            return fromRoman(num);
        }
    } else {
        throw new TypeError("Enter roman or decimal number")
    }
}