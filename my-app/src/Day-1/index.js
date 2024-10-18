function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function shuffleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        var randomIndex = randomNumber(arr.length);
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
