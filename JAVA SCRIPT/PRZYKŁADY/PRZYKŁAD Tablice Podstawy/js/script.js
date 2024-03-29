
console.log("Zmiana elementu tablicy");
const arr = [2,3,4];
console.log("Tablica=",arr);
arr[1] = 100;
console.log("Nowa tablica=",arr);
console.log("Ilość elementów tablicy=",arr.length);




console.log("Tablice - indeksowanie tablic");

let names = ['Hans', 'Ania', 'Adam'];
console.log("Tablica=",names);
names[1] = 'Basia';
names[2] = 'Marek';
names[6] = 'Klara';
console.log("Tablica poprawiona=",names)

let [imieProgramisty, imieSekretearki, imieGrafika] = names;

console.log("Imię Grafika ",imieGrafika);