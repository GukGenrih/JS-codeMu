class what {
    static one(firstDigit) {
        return firstDigit.search(/\d/)
    }

    static two() {

        for (let i = 1; i <= 510; i++) {
            let firstDigit = i.toString()[0]
            let secondDigit = i.toString()[1]
            let sum = parseInt(firstDigit) + parseInt(secondDigit);
            if (sum === 5) {
                console.log(i)
            }
        }
    }

    static three(arr, el) {
        return arr.filter(element => element !== el);
    }

    static four(arr) {
        let sum = 0;
        for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
            sum += arr[i];
        }
        return sum
    }
}

console.log(what.one('sadb0y4ik')) //Спросить правильно выводить 4 или 5 место (начинать считать с 0 или с 1)
what.two() //точно ли консоль лог?
console.log(what.three([1, 2, 3, 4, 5, 'like', 'a', 'boshi'], 5))
console.log(what.four([1,2,3,4,5,6,7]))
