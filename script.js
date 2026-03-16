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