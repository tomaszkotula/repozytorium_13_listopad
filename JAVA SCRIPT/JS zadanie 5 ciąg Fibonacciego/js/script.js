console.log(" Ciąg Fibonacciego");

// Fibonacci( n )
//    if n=0 then return 0
//    if n=1 then return 1
//    f' ← 0
//    f ← 1
//    for i ← 2 to n
//      do
//        m ← f + f'
//        f' ← f
//        f ← m
//      end
//    return f

function fibo(n) {
    if (n == 0) {
        return 0;

    }
    if (n == 1) {
        return 1;
    }
    let fib1 = 0;
    let fib2 = 1;

    for (let i = 2; i <= n; ++i) {
        let m = fib1 + fib2;
        fib1 = fib2;
        fib2 = m;
    }
    // return fib2;
    result = ["Element",n, "ciągu Fibonacciego=",fib2];
    return result;

}

console.log(fibo(4));
console.log(fibo(8));
console.log(fibo(12));
console.log(fibo(14));
console.log(fibo(19));