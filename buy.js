const element = document.getElementById("order");  //orderbutton
const myname = document.getElementById("myname");   //name input
const add = document.getElementById("add");         //address input
element.addEventListener("click", myFunction); 
function myFunction() { 
    if (myname.value == "" || add.value == "") { 
        alert("Form is empty"); 
    } 
    else { 
        window.location.assign("index.html"); 
    } 
} 