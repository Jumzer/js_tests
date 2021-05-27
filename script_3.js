const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70") ;
let filteredEnt = entrepreneurs.filter(function (currentelement) {
return currentelement.year > 1970 && currentelement.year < 1980 ;
});

console.log (filteredEnt)


/*  À CHECKER
let a = entrepreneurs.map(e=>{
  return e.first, e.last
})

console.log(a)
*/


console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
let getFullName = entrepreneurs.map((item) => {
  let container = {};
  container = [item.first, item.last].join(" ");
  return container;
});

console.log(getFullName);


console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
let calcAge = entrepreneurs.map((item) => {
  entrepreneursAge = `${item.first} ${item.last} is ${
    2021 - item.year
  } years old`;
  return entrepreneursAge;
});

console.log(calcAge);


console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille")
let sortedByFamilyNames = entrepreneurs.sort((a, b) => {
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
});

console.log(sortedByFamilyNames);