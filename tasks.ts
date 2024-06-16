// 1.
const customParseInt = (str: string): number => {
    const ASCII_ZERO_INT = '0'.charCodeAt(0)
    let res = 0

    const asciiValues = [];

    for (let i = 0; i < str.length; i++) {
        asciiValues.push(str.charCodeAt(i) - ASCII_ZERO_INT);
    }

    for (let i = 0; i < asciiValues.length; i++) {
        const leftMostDigit = asciiValues.length - i - 1
        const powerOfDigit = 10 ** leftMostDigit
        res += asciiValues[i] * powerOfDigit;
    }

    return res
}

// 2.
const spiralMatrix = (matrix: number[][]) => {
    const res: number[] = []

    let right = matrix[0].length
    let left = 0

    let bottom = matrix.length
    let top = 0

    const toTop = (): void => {
        for (let i = bottom - 1; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    };

    const toBottom = (): void => {
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1]);
        }
        right--;
    };

    const toRight = (): void => {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
    };

    const toLeft = (): void => {
        for (let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom - 1][i]);
        }
        bottom--;
    };



    while (left < right && top < bottom) {
        toRight()
        toBottom()

        if (left >= right || top >= bottom) break

        toLeft()
        toTop()
    }

    return res
}