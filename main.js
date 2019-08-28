const fibonacciCounter = function fibonacci(result, length) {

    if (result.length >= length) {
        return result;
    }
    result.push(result[result.length - 2] + result[result.length - 1]);
    return fibonacci(result, length);

};

const counter = function counter(length) {
    console.time('Calling Time');
    console.timeEnd('Calling Time');
    return fibonacciCounter([0, 1], length);
}

console.log(counter(15));