console.log("Zadanie JS numer 2");
function sortText(text) {
    const sortedText = text.split('').sort().join('');
    // Podaje długość tekstu
    console.log(sortedText.length);
    return sortedText;
}

console.log("Akademia108");

console.log(sortText("Akademia108"));

console.log(sortText("987653108"));
