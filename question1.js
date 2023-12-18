// 1.1 Gradering av frukter (3p)
// Skriv en funktion gradeFruit som tar en frukt (som en sträng)
// och returnerar dess kvalitetsbetyg enligt följande kriterier:

// "Utmärkt" om frukten är "Mango" eller "Jordgubbe"
// "Bra" om frukten är "Äpple" eller "Apelsin"
// "Acceptabel" om frukten är "Kiwi" eller "Ananas"
// "Dålig" om frukten är "Citron" eller "Lime"
// "Okänd" för alla andra frukter

function gradeFruit(fruit) {
  if (fruit === "Mango" || fruit === "Jordgubbe"){
    return "Utmärkt";
  } else if (fruit === "Äpple" || fruit === "Apelsin"){
    return "Bra";
  }else if (fruit === "Kiwi" || fruit === "Annanas"){
    return "Acceptabel";
  } else if (fruit === "Citron" || fruit === "Lime"){
    return "Dålig";
  } else {
    return "Okänd";
  }
};

console.log(gradeFruit("Äpple"));
console.log(gradeFruit("Mango"));
console.log(gradeFruit("Kiwi"));
console.log(gradeFruit("Lime"));
console.log(gradeFruit("Persika"));
