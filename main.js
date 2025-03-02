var kg = parseFloat(prompt("What quantity do you want to buy??"))
var total = kg + 500

console.log("Dear Sir/Mam You have to pay:", total);
document.getElementById("showcontent").textContent = total;