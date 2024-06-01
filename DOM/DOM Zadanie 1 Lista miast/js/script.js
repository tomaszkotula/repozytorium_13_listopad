let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let ilosc = cities.length;
for (let i = 0; i < ilosc; i = i + 1) {
    const miasto = cities[i];

let lielement = document.createElement("li");
lielement.setAttribute("class","list");
console.log(lielement);
document.querySelector("ul").appendChild(lielement)

}
    
   