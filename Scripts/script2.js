function myfunction(e){
    e.preventDefault();
    var x = document.getElementById("myform");
    var text ="";
    for(var i = 0; i<x.length-1;i++)
    {
        text += x.element[i].name + "-"+ x.element[i].value + "</br>"

    }
    document.getElementById("test").innerHTML = text;
}