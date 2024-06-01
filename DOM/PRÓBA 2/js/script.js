// console.log("Dostęp do elementów DOM");
// let articles =  document.getElementById('articles');
// console.log(articles);
let paragraph = document.querySelector('.content');
console.log(paragraph);
let paragraphs = document.getElementsByClassName('content');
console.log(paragraphs[3]);
let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

let paragraphContent = document.querySelectorAll('p.content');
console.log(paragraphContent);

