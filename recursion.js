function fibs(num) {
    if (num === 0){
        return []
    }
    if (num === 1) {
        return [0]
    }
    let fib = [0,1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function fibsRec(num) {
    if (num === 0) {
        return [];
    }
    if (num === 1) {
        return [0];
    }
    if (num === 2) {
        return [0, 1];
    }

    let fib = fibsRec(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]); 
    return fib;
}

console.log(fibs(8))
console.log(fibsRec(8))