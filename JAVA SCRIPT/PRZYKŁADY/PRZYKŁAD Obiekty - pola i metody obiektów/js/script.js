
console.log("Obiekty - pola i metody obiektów");

var person = {
    name: 'Hans',//pole
    height: 180,//pole
    print: function() { // metoda
        // Wyrzuca Mam na imie: Hans
        console.log("Mam na imie: " + this.name);

    },
    printThis: function() {
        // Przechodzi do metody print: i realizuje opis i samą metodę
        //Jestem metodą obiektu 'printThis' i zaraz uruchomię wewnętrzą metodę 'print
        //Mam na imie: Hans
        console.log("Jestem metodą obiektu 'printThis' i zaraz uruchomię wewnętrzą metodę 'print'");
        this.print();
    }
};
// Wyrzuca pole height =180
console.log(person['height']);// Wyrzucenie wartości pola height
console.log(person.name);//Wyrzucenie wartości pola name 
person['print'](); // Wyrzucenie metody print: tj Mam na imie: Hans
person.printThis();//Wyrzucenie metody printThis
person.height = 181;
person.weight = 75;

console.log("Parametry hight i weight po zmianie danych ",person);

// var woman = {
//     name: 'Monika',
//     height: 165
// }

// let {name, height} = woman;

// console.log(height)