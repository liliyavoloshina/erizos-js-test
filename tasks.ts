const ASCII_ZERO_INT = '0'.charCodeAt(0)

// 1.
const customParseInt = (str: string): number => {
    let res = 0

    const asciiValues = [];

    for (let i = 0; i < str.length; i++) {
        asciiValues.push(str.charCodeAt(i) - ASCII_ZERO_INT);
    }

    for (let i = 0; i < asciiValues.length; i++) {
        const rightMostDigit = asciiValues.length - i - 1
        res += asciiValues[i] * 10 ** rightMostDigit;
    }

    return res
}