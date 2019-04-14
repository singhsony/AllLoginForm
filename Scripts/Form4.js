function validate()
{
    var username = document.getElementById("uname") ;
    var password =document.getElementById("pss");
    if(username.value.trim() == ""|| password.value.trim() =="")
    {
        alert("no blank value allowed");
        return false;
    }
    
    else{
        true;
    }

}
