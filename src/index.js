module.exports = function toReadable(number) {
    function toReadUnit(num) {
        switch (num) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
        }
    }

    function toReadDec(num) {
        switch (num) {
            case 1:
                return "ten";
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
        }
    }

    function toReadAge(num) {
        switch (num) {
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
        }
    }

    let result = "";

    if (number === 0) {
        return (result = "zero");
    }

    if (number >= 100) {
        result = toReadUnit(Math.floor(number / 100)) + " " + "hundred";
    }

    let numberDec = number % 100;

    if (numberDec < 10 && numberDec > 0) {
        result = result + " " + toReadUnit(numberDec);
    } else if (numberDec > 10 && numberDec < 20) {
        result = result + " " + toReadAge(numberDec);
    } else if (numberDec > 0) {
        result = result + " " + toReadDec(Math.floor(numberDec / 10));
        numberUnit = numberDec % 10;
        if (numberUnit > 0) {
            result = result + " " + toReadUnit(numberUnit);
        }
    }

    return result.trim();
};
