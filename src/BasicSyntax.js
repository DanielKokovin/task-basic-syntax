export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'I' && str[i + 1] === 'V') {
            result += 4;
            i++;
        } else if (str[i] === 'I' && str[i + 1] === 'X') {
            result += 9;
            i++;
        } else if (str[i] === 'X' && str[i + 1] === 'L') {
            result += 40;
            i++;
        } else if (str[i] === 'X' && str[i + 1] === 'C') {
            result += 90;
            i++;
        } else if (str[i] === 'C' && str[i + 1] === 'D') {
            result += 400;
            i++;
        } else if (str[i] === 'C' && str[i + 1] === 'M') {
            result += 900;
            i++;
        } else {
            if (str[i] === 'I') {
                result += 1;
            } else if (str[i] === 'V') {
                result += 5;
            } else if (str[i] === 'X') {
                result += 10;
            } else if (str[i] === 'L') {
                result += 50;
            } else if (str[i] === 'C') {
                result += 100;
            } else if (str[i] === 'D') {
                result += 500;
            } else if (str[i] === 'M') {
                result += 1000;
            }
        }
    }
    return result;
}
