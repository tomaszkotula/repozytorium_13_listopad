console.log("Zadanie JS numer 1");
function reverseText(text) {
	const reversedText = text.split('').reverse().join('');
	console.log(reversedText.length);
	return reversedText;
}

console.log(reverseText('Akademia108'));
console.log(reverseText("Tomasz"));
// Bierze pod uwagę puste znaki - spacje
console.log(reverseText("Ala ma kota Kot ma Alę"))