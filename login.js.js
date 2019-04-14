function show(e){
    e.preventDefault();
   console.log(e)
var x = document.getElementById("form1");
var text=""
for(var i=0;i<x.length-1;i++){
console.log(x.elements[i].name)
text += x.elements[i].name + '-' + x.elements[i].value +'</br>'
}
document.getElementById("test").innerHTML = text;
}  