console.log("Metoda indexOf() zwraca index elementu w tablicy");
console.log("Wyrzuca którym elementem jest w tablicy");
let names = [ 'Marcin', 'Ania', 'Agnieszka' ];  
console.log(names.indexOf("Ania"));
//wyloguje 1 czyli drugi element Tablicy licząc od zera



console.log("Metoda filter()");
let numbers = [1,2,3,4];
 
let even = numbers.filter(function(elem){
    return elem%2 === 0;
});
console.log(even); // wyloguje [2,4]
// wywołana na tablicy, jako parametr przyjmuje funkcję zwrotną, w której przekazujemy koleje elementy tablicy. Funkcja zwraca nową tablicę z elementami spełniającymi zadany warunek


// Destrukturyzacja tablicy polega na przypisaniu poszczególnych wartości do kolejnych zmiennych:
let namess = [ 'Krystian', 'Ania', 'Adam' ];
let [name1, name2, name3] = namess;
console.log( name3 ); // wyloguje Adam
console.log( name2 + " i " + name3)
names.push("Michał"); //Dodaje "Michał" na koniec Tablicy
console.log(names);
names[4] = "Barbara";
console.log(names);//["Marcin","Ania","Agnieszka","Michał","Barbara"]
console.log(names[1]);// Wyrzuca Ania liczy names od zera
console.log(name1);//Wyrzuca Krystian bierze z tablicy namess element pierwszy name1