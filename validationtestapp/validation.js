
var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;

var rePassword = /^[A-Za-z\d]{6,8}$/;

document.getElementById("mobile").onkeypress = function (evt) {

if (evt.which < 48 || evt.which > 57)
{
evt.preventDefault();
}
}

var el = document.getElementById('cboxa');
el.onchange = function(e){
if (el.checked){

document.getElementById("city").disabled=true;

var c1 = document.createElement("input");
c1.setAttribute("type","text");
c1.setAttribute("id","other");
c1.setAttribute("style","width:250px");
c1.setAttribute("style","margin-Left:150px");
c1.setAttribute("maxlength","10");
var d = document.getElementById('div1');
d.appendChild(c1);
}else{
document.getElementById("city").disabled=false;
var parent = document.getElementById("div1");
var child = document.getElementById("other");
parent.removeChild(child);
}
}
function validate(){
var email = f1.user_email.value;

var password = f1.user_password.value;
var errors = [];

if (!reEmail.test(email)) {
errors[errors.length] = "You must enter a valid email address.";
alert(errors.length);
}
if (!rePassword.test(password)) {
errors[errors.length] = "You must enter a valid password.";
alert(errors.length);
}
if(!f1.terms.checked) {
alert("Please indicate that you accept the Terms and Conditions");
f1.terms.focus();
}
if (errors.length > 0) {
reportErrors(errors);
return false;
}
return true;
}
function reportErrors(errors){
var msg = "There were some problems...\n";
for(var i = 0; i<errors.length; i++) {
    var numError = i + 1;
     msg= msg + "\n" + numError + ". " + errors[i];
}
alert(msg);
}