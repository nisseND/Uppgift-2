
let vip = document.getElementById("checkBoxInput").checked
let age = document.getElementById("AGE").valueAsNumber

const button = document.getElementById("enterBtn")
enterBtn.addEventListener("click", function() {
    if (vip==true) {
        alert("Welcome in my best VIP customer:)")
        
    } 
    else if (age>=18) {
        alert("Acces granted");
    
}
    
    else {
        alert("Access denied");
    }
})


