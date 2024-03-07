class what {
    static one(arr) {
        return arr.filter(el => el < 0).length
    }

    static two(arr) {
        return arr.filter(el => el > 0)
    }

    static three(stringa) {
        const answer = stringa.split('')
        answer.splice(-2, 1)
        return answer.join('')
    }
    static four(arr){
        let sumFirstHalf = 0;
        let sumSecondHalf = 0;

        for (let i = 0; i <  Math.floor(arr.length / 2); i++) {
            sumFirstHalf += arr[i];
        }
        for (let i =  Math.floor(arr.length / 2); i < arr.length; i++) {
            sumSecondHalf += arr[i];
        }

        return  sumFirstHalf / sumSecondHalf;
    }
}

console.log(what.one([-1, -2, -3, 4, 5, 6]))
console.log(what.two([-1, -2, -3, 4, 5, 6]))
console.log(what.three('ihavetext'))
console.log(what.four([1, 2, 3, 1, 1, 1]))

