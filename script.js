function toggleForms(){

var userType = document.getElementById("userType").value;

var studentForm = document.getElementById("studentForm");
var companyForm = document.getElementById("companyForm");

studentForm.style.display = "none";
companyForm.style.display = "none";

if(userType === "student"){
studentForm.style.display = "block";
}

if(userType === "company"){
companyForm.style.display = "block";
}

}

// NAVBAR TOGGLE

function toggleMenu(){
const nav = document.getElementById("navMenu");
nav.classList.toggle("active");
}

// CLOSE MENU AFTER CLICK (MOBILE)

function closeMenu(){
const nav = document.getElementById("navMenu");
nav.classList.remove("active");
}
