
console.log("Funkcja wyrzuca kwadraty elementów Tablicy");
let numbers = [1,2,3,4];
let squares = numbers.map(function(elem) {
    return elem * elem;
});
console.log(squares); // wyloguje [1,4,9,16]

// Metoda map() wywołana na tablicy, jako parametr przyjmuje funkcję zwrotną, w której przekazujemy koleje elementy tablicy. Funkcja zwraca nową tablicę ze zmodyfikowanymi wartościami.