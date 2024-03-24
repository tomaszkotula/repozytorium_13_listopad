// console.log("komentarze w JavaScript")
// Komentarz liniowy
//   ctr+/

/* Komentarz
Blokowy
Shift+Alt+A */
console.log("Metody na Tablicach");
let names = ["Monika","Tomasz","Marek"];
let menNames = ["Krzysztof","Zbyszek","Franek"];
// Tworzy nową tablicę innym sposobem
let womenNames = new Array("Klaudia","Daria");

names[3] = "Piotrek";
// odaje element Michał na końcu listy
names.push("Michał");
// Edytuje element drugi oraz "i" oraz element piąty
console.log(names[1], "i", names[4]);
// Podaje trzeci w kolejności element
console.log(names[2]);
console.log( names.join() );  
// Wstawia znak plusa 
console.log( names.join( ' + ' ) ); 
// Odwraca kolejność
names.reverse(); 
console.log(names);
// Odwraca kolejność po raz kolejny
let reverseArray = names.reverse()
console.log(reverseArray);
// Sortuje alfabetycznie elementy tablicy
sortedArray = names.sort();
console.log(names);
// let arrayLength = names.length();
// console.log(arrayLength);
// łączy trzy tablice ze sobą torząc nową o nazwie concatArray
let concatArray = names.concat(menNames,womenNames);
// Szuka elementu Zbyszek w tabeli
let indexOfArray = concatArray.indexOf("Zbyszek");
// Wyświetla całą połaczoną tabelę 
console.log(concatArray);
// Wyświetla pozycję , którą zajmuje element Zbyszek licząc od zera czyli 6
console.log(indexOfArray);

let mappedArray = names.map(function(element,index){ let newElement = element.toUpperCase() +"-"+ index;
return newElement;
})
// Zamienieniono wszystkie litery elementów tablicy na drukowane tablica była iprzednio sortowana.Został też dodany index oddzielony "-"
console.log (mappedArray);

// Filtruje elementy tablicy wyrzuca te których pierwsza litera jest duże "P" wyrzucił Piotrek
let filteredArray = names.filter( element => element.startsWith("P")); 

console.log(filteredArray);
