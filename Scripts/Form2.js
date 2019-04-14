function show(e){
    e.preventDefault();
   console.log(e)
var x = document.getElementById("form1");
var text=""
for(var i=0;i<1;i++){
console.log(x.elements[0].name)
text += x.elements[0].value +'</br>'
}
document.getElementById("test").innerHTML =  text + "</br>" + "congratulation you have register succesfully";
}  