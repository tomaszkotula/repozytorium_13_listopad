class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.poletytul = tytul;
        this.poleautor = autor;
        this.poleprzeczytana = przeczytana;

    }
}
let ksiazka1 = new Ksiazka("PanTadeusz", "Mickiewicz", false);
// console.log(ksiazka1);
let ksiazka2 = new Ksiazka("Złoto Nazistów", "Wołoszański", true);
let ksiazka3 = new Ksiazka("Wspomnienia z przyszlosci", "Daniken", false);
let ksiazka4 = new Ksiazka("Gniazda UFO", "Trela", true);
let tablicaKsiazek = [ksiazka1, ksiazka2, ksiazka3, ksiazka4];
// console.log(tablicaKsiazek);
// console.log(tablicaKsiazek[1]);
// console.log(tablicaKsiazek[0].poleautor);
// console.log(tablicaKsiazek[0].poleprzeczytana);
// let ilosc = tablicaKsiazek.length;
// console.log(ilosc);
// Podaje nazwę  wszystkich  książek z tablicy
function sumaPrzeczytanych(tablicaKsiazek) {
    console.log("Pierwsze podaje tytuły wszystkich książek z tablicy:");
    let suma = 0;
    ilosc = tablicaKsiazek.length;
    for (let i = 0; i < ilosc; i = i + 1) {
        const tytulKsiazki = tablicaKsiazek[i].poletytul;
        console.log("Tytuł książki=", tytulKsiazki);
        if (tablicaKsiazek[i].poleprzeczytana === true) {
            suma = suma + 1;
            tytulPrzeczytanej=tytulKsiazki;
            console.log("Tytuł przeczytanej książki=",tytulKsiazki)
        }
       console.log("Autor=",tablicaKsiazek[i].poleautor);

    }
    
    return suma;

}

console.log("Suma przeczytanych książek=", sumaPrzeczytanych(tablicaKsiazek));
console.log(tablicaKsiazek);