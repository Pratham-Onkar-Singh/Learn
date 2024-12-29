const dropdownButton = document.querySelector(".dropdown-Btn");
const angledownIcon = document.querySelector(".fa-angle-down");
const angleupIcon = document.querySelector(".fa-angle-up");
angleupIcon.style.display = "none";

console.log(dropdownButton)
const dropdown = document.querySelector(".dropdown");

dropdownButton.addEventListener("click" , function(){
    console.log(dropdownButton)
   if(dropdown.style.display === "flex"){
    dropdown.style.display = "none";
    angledownIcon.style.display = "flex";
    angleupIcon.style.display = "none";
   }else{
    dropdown.style.display = "flex";
    angledownIcon.style.display = "none";
    angleupIcon.style.display = "flex";
   
   
   }

    
})
window.addEventListener("click" , function(e){
    if(e.target !== dropdownButton && e.target !== dropdown && e.target !== angledownIcon && e.target !== angleupIcon){
        dropdown.style.display = "none";
        angledownIcon.style.display = "flex";
        angleupIcon.style.display = "none";
    }

 
})
