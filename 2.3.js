class what {
    static one(first, second) {
        return (first[first.length - 1] === second[0])
    }

    static two(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "0") {
                count++;
                if (count === 3) {
                    return i;
                }
            }
        }
    }

    static three(str) {
        let answer = 0;
        str.split(',').forEach((el) => answer += parseInt(el))
        return answer
    }

    static four(str) {
        const arr = str.split('-')
        return {
            'year':arr[0],
            'mount':arr[1],
            'day':arr[2]
        }
    }
}

console.log(what.one('sadb0y4ik', 'ksadb0y4ik'))
console.log(what.two('a0b0c0d'))
console.log(what.three('12,12,26'))
console.log(what.four('2025-12-31'))
