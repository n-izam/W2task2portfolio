
// function validate(){
    var name1=document.getElementById("name");
    var email=document.getElementById("email");
    var subject=document.getElementById("subject");
    var message=document.getElementById("message");
    var form1=document.getElementById('form1');


    var name_error=document.getElementById('name_error');
    var email_error=document.getElementById('email_error');
    var subject_error=document.getElementById('subject_error');
    var message_error=document.getElementById('message_error');


    form1.addEventListener("submit",(e)=>{

        var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name1.value===""||name1.value==null){
            e.preventDefault();
            // alert("enter your name");
            name_error.innerHTML = "name is required";
         }else{
            name_error.innerHTML = "";
         }
         
         if(!email.value.match(email_check)){
            e.preventDefault();
            email_error.innerHTML = "keep email standard";
            
         }else{
            email_error.innerHTML = "";
            
            
         }


         if(subject.value==""){
            // alert("enter the subject");
            e.preventDefault();
            subject_error.innerHTML = "mention the subject";
         }else{
            subject_error.innerHTML = "";
         }

         if(message.value==""){
            // alert("enter a text ");
            e.preventDefault();
            message_error.innerHTML = "drop any enquiry";

         }else{
            message_error.innerHTML = "";
         }

    })

