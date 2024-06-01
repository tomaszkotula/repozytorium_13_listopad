console.log("Operatory logiczne");

// ! Operator negacji (not)
// console.log( !(2>1) ); zwraca wartość odwrotną 

// && Operator iloczynu (and)
// console.log( (2>1) && (12>10) );wyrażenie zarówno po prawej i lewej musi być spełnione czyli w tym wypadku True
// console.log( (0>1) && (12>10) ); False
// console.log( (2>1) && (2>10) );False
// console.log( (0>1) && (2>10) );False

// || Operator sumy (or)wyrażenie zwraca True jeżeli po jednej lub po drugiej stronie wyrażenia || jest prawda
console.log( (0>1) || (2>10) ); //False
console.log( (2>1) || (2>10) );//True
console.log( (0>1) || (12>10) );//True
console.log( (2>1) || (12>10) );//True