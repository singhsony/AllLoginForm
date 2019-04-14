function validation(){
    var Nmae= document.getElementById("username");
    var email= document.getElementById("useremail");
    var pass= document.getElementById("pass1");
    var confirmpass= document.getElementById("pass2");
    var phome = document.getElementById("phoneno");
    var valid = true;
    var msg="";
    if(username.value.length ==0){
    // alert(" blank field not allowed");
    msg=msg+" Username blank value not allowed \n";
    valid=false;
    }
    if(email.value.length ==0){
    // alert(" email should not be blank");
    msg=msg+" Email should not be blank  \n";
    valid=false;
    }
    if(pass.value.length<8){
    // alert(" should not less then 8")
    msg=msg+" Password should not less then 8  \n";
    valid=false;
    }
    if(pass.value!=confirmpass.value){
    // alert(" password are not matching");
    msg=msg+" Password are not matching  \n";
    valid=false;
    }
    if(phome.value.length<10){
    // alert(" should not less then 10");
    msg=msg+" Phone Number should not less then 10  \n";
    valid=false;
    }
    if(valid===false){
    alert(msg);
    return false;
    }
    else{
    return true;
    }
    }
    
    
    
    