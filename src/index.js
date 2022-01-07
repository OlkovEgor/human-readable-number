module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
    if (number < 100) {
        return myFunction(number);
    }
    if (number < 1000) {
        const hundreds = Math.floor(number/100);
        let twodigits = number%100;
        let firstPart = numbers[hundreds] + ' hundred'
        if (twodigits === 0) {
            return firstPart;
        }
        return firstPart + ' ' + myFunction(twodigits);
    }









    function myFunction(number) {
        if (number <= 13) {
            return numbers[number];
        }
        if (number === 15) {
            return 'fifteen';
        }
        if (number === 18) {
            return 'eighteen';
        }
        if (number < 20) {
            return numbers[number%10]+'teen';
        }
        const tens = Math.floor(number/10);
        const units = number%10;
        let firstPart;
        if (tens === 2) {
            firstPart = 'twen';
        } else if (tens === 3) {
            firstPart = 'thir';
        } else if (tens === 4) {
            firstPart = 'for';
        } else if (tens === 5) {
            firstPart = 'fif';
        } else if (tens === 8) {
            firstPart = 'eigh';
        } else { 
            firstPart = numbers[tens];
        }
        firstPart = firstPart+ 'ty';
        if (units === 0) {
            return firstPart;
        } else {
            return firstPart + " " + numbers[units]
        }
    }
}
