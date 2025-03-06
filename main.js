var kg = parseFloat(prompt("What quantity do you want to buy??"))
var total = 0;

if (document.body.id === "meatPrice") {
    total = kg *500;
} 
else if (document.body.id === "muttonPrice") {
    total = kg *700;
}
else{
    total = kg * 800;
}

console.log("Dear Sir/Mam You have to pay:", total);
document.getElementById("priceM").innerText = total; 