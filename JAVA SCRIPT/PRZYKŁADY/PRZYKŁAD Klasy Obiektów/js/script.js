// ES6
console.log("Klasy Obiektów")
class Person { //Tworzymy klasę obiektu Person
    constructor(name, lastName) { //Tworzymy nowy obiekt o naszej klasy
        this.name = name; //Ustawiamy pole name obiektu klasy Person
        this.lastName = lastName; // Ustawiamy pole lastName obiektu klasy Person    
    }  
    
    printInfo() {//Ustawiamy metodę dla naszego obiektu
        console.log(`Imie: ${this.name}, Nazwisko: ${this.lastName}`);
    }
}

let person = new Person("Hans", "Kowalski");//Wprowadzamy dane nowego obiektu
person.printInfo();

let person2 = new Person("Monika", "Nowak");//Wprowadzamy nowy obiekt
person2.printInfo();

let person3 = new Person("Piotr", "Żmuda")//Wprowadzamy trzeci obiekt
person3.printInfo();

console.log(person);