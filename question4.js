// Summan av siffror (3p)
// Skriv klart funktionen som tar en array av siffror som input
// och returnerar summan av alla siffror.

function sum(numbers) {
let total = 0;
numbers.forEach((num) => {
  total += num;
});
return total;
  // return total += numbers;
} 
console.log(sum([1, 2, 3])); // ska logga 6
