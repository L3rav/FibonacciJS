const fibonacciCounter = function fibonacci(result, length) {

    if (result.length >= length) { // sprawdzam warunek, jeżeli ilość elementów w tablicy jest >= przypisanej wartości length to zwróc tablicę, jeżeli nie przejdz dalej
        return result;
    }
    result.push(result[result.length - 2] + result[result.length - 1]); // dodaj do tablicy sumę ostatniego i przedostatniego elementu
    return fibonacci(result, length); // wywołujemy funkcję rekurencyjną do momentu aż spełnimy warunek długość tablicy >= length
};

const counter = (length) => {
    return fibonacciCounter([0, 1], length); // pierwszy parametr to tablica startowa z elementem 0 o wartości 0 oraz elementem 1 o wartości 1, drugi parametr to ilość elementów jakie chcemy zwrócić
};

console.time('Calling Time');
console.log(counter(15));
console.timeEnd('Calling Time'); // wywołanie czasu potrzebnego do wykonania funkcji