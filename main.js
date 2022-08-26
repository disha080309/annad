function select_NGO(){
    ngo=document.getElementById("ngo").value;
    console.log(ngo);
}
function submit_form(){
    address=document.getElementById("add").value;
    name=document.getElementById("name").value;
    food_detail=document.getElementById("fd").value;

    if((ngo!="" && address!="")&&(name!="" && food_detail!="")){
        sendEmail();
    }
    else{
       window.alert("Pls Fill Up All The Values");
    }
}
function sendEmail(params) {
    var tempparam={
        from_name:name,
        to_name:document.getElementById("ngo").innerHTML,
        message:name+" "+address+" "+food_detail,
        reply_to:ngo
    };
    emailjs.send('service_6jb2hwt','template_5k6519o',tempparam).then(function(res){
        console.log("success",res.status);
    })
  }