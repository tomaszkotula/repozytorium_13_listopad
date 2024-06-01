let listaPracownikow = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]

}

console.log(listaPracownikow);
// console.log(element,index);
listaPracownikow.pracownicy.forEach((element, index) => {

    console.log(`osoba: ${element.firstName} ${element.lastName} ma index ${index}`);
});