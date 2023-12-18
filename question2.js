// 2 Räkna ord (3p)
// Skriv en funktion word count som tar en mening
// och returnerar antal ord som en siffra.
// Ledtråd: Använd sträng-funktionen split.

function wordCount(sentence) {
let partSentence = sentence.split(" ").length; 
return partSentence;
}

console.log(wordCount("hur mår du?")); //ska logga 3
