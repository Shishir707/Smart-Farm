function checkAmount(){
    let kg = parseFloat((document.getElementById("kg")).value);
    
    if (document.body.id === "meatPrice") {
        total = kg *500;
    } 
    else if (document.body.id === "muttonPrice") {
        total = kg *700;
    }
    else{
        total = kg * 800;
    }
    
    var message;
    message = `Dear Sir/Mam you have to pay Tk. BDT: ${total}`;

    
    document.getElementById("price").innerText = message;
}