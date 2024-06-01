let cars = [
    {
      color: ["gray", "blue", "red", "green"],
      brand: "bmw",
      registration: new Date("2017-01-03"),
      model: 'i8',
    },
    {
      color: ["blue", "red", "green"],
      brand: "ford",
      registration: new Date("2018-03-03"),
      model: 'mustang',
    },
    {
      color: ["galaxy-blue", "blue", "red", "green"],
      brand: "audi",
      registration: new Date("2017-01-03"),
      model: 'a7',
    },
    {
      color: ["blue", "red", "green"],
      brand: "dodge",
      registration: new Date("2017-01-03"),
      model: 'charger',
    },
  ]
  
  let array = [
  
    {
        imie: "Ula",
        nazwisko: "Jeziorna",
        plec: "kobieta",
        hobby: ["bieganie", "taniec", "malowanie"],
        ulubioneJedzenie: {owoce: [{kwasne: ['wiśnie', 'cytryna', 'kiwi'], slodkie: ['melon', 'arbuz', 'truskawki']}], warzywa: ['sałata', 'pomidory', 'marchewka'], slodycze: ['ciasta', 'czekolada']}
    },
    {
        imie: "Krystian",
        nazwisko: "Dziopa",
        plec: "mężczyzna",
        hobby: ["programowanie", "medytacja"]
    },
    {
        imie: "Łukasz",
        nazwisko: "Badocha",
        plec: "mężczyzna",
        hobby: ["rower", "góry", "bieganie"]
    },
    {
        imie: "Marian",
        nazwisko: "Drągalski",
        plec: "mężczyzna",
        hobby: ["wspinanie", "rower", "karate", "gotowanie"]
    },
  ];
  console.log(array[3].imie)
  console.log(array[1].hobby[1])
  console.log(array[2].hobby)
  console.log(array[0].ulubioneJedzenie.owoce[0].slodkie[1])
  console.log(array[0].ulubioneJedzenie.slodycze[1])
  console.log(array[0].ulubioneJedzenie.owoce[0].kwasne[1])


