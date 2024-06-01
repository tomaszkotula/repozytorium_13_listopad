console.log("Klasy - Dziedziczenie");

// Napisane w formacie ES6
class Line { //Tworzymy klasę o nazwie Line
    constructor(length = 0) { // konstruktor przyjmuje jeden parametr domyślnie length = 0
        this.length = length; //Właściwość parametr przekazany do konstruktora
    }

    setLength(length = 0) { // metoda zmieniająca długość linii
        this.length = length;
    }
}

let linia = new Line(108);// Tworzymy nowy obiekt linii
linia.setLength(110);// Wprowadzamy długość linii
console.log(linia);

class Rectangle extends Line { //Nowa klasa prostokąt /extend linie tz że dziedziczy parametr line z klasy Line, właściwość length dziedziczy po klasie Line
    constructor(width = 0, length = 0) {
        super(length);// metoda super wywołujemy constructor klasy dziedziczonej czyli dziedziczymy length metodę
        this.width = width;//Właściwość parametr przekazany do konstruktora
    }

    setWidth(width = 0) { //wprowadzamy nową metodę wcześniej nie zdefiniowaną
        this.width = width;
    }
}

let prostokat = new Rectangle(10, 20);// Ustawiamy parametry prostokąta
prostokat.setWidth(100);// zmieniamy szerokość
prostokat.setLength(200);// zmieniamy długość
console.log(prostokat);// Edytujemy wymiary w konsoli

class Cuboid extends Rectangle {
    constructor(height = 0, width = 0, length = 0) {
        super(width, length);
        this.height = height
    }

    setHeight(height = 0) {
        this.height = height;
    }
}

let prostopadloscian = new Cuboid(40, 50, 60);
prostopadloscian.setHeight(400);
prostopadloscian.setWidth(500);
prostopadloscian.setLength(600);
console.log(prostopadloscian);



// ES5 Stara wersja kodu
// function Line(length = 0) {
//     this.length = length
// }
// Line.prototype.setLength = function(length = 0) {
//     this.length = length;
// }

// var linia = new Line(10);
// linia.setLength(100);
// console.log(linia);

// function Rectangle(width = 0, length = 0) {
//     Line.call(this, length);
//     this.width = width;
// }

// Rectangle.prototype = Object.create(Line.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Rectangle.prototype.setWidth = function(width = 0) {
//     this.width = width;
// }

// let prostokat = new Rectangle(10, 20);
// prostokat.setWidth(100);
// prostokat.setLength(200);
// console.log(prostokat);

// function Cuboid(height = 0, width = 0, length = 0) {
//     Rectangle.call(this, width, length);
//     this.height = height;
// }

// Cuboid.prototype = Object.create(Rectangle.prototype);
// Cuboid.prototype.constructor = Cuboid;

// Cuboid.prototype.setHeight = function(height = 0) {
//     this.height = height;
// }

// var prostopadloscian = new Cuboid(10, 20, 30);
// prostopadloscian.setHeight(100);
// prostopadloscian.setWidth(200);
// prostopadloscian.setLength(300);
// console.log(prostopadloscian);