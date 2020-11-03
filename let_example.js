const numbers = [1, 3, 6, 8 , 9];

function getMax(numbers) {
    let max = -Infinity;
    numbers.forEach(number => {
        max = Math.max(max, number);
    });
    return max;
}