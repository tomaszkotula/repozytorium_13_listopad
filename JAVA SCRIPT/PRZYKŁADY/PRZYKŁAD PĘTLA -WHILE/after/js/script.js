console.log("Pętla - while");

/* 

while (warunek) {
    ...instrukcje JavaScript
}

*/

let pass = null;

while (pass !== "secret") {
    pass = prompt("Podaj hasło");
}

alert("Zalogowano :) zaraz zobaczysz treść strony");