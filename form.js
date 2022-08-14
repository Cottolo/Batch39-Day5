function submitData(){

    let name = document.getElementById("in-nama").value
    let email = document.getElementById("in-email").value
    let phone = document.getElementById("in-phone").value
    let subject = document.getElementById("in-subject").value
    let message = document.getElementById("text-message").value

    if(email == ""){
        return alert("name wajib diisi")
     } else if(email == ""){
        return alert("email wajib diisi")
     } else if(phone == ""){
        return alert("phone wajib diisi")
     } else if(subject == ""){
        return alert("subject wajib diisi")
     } else if(message == ""){
        return alert("your message wajib diisi")
     }

   //   console.log(name);
   //   console.log(email);
   //   console.log(phone);
   //   console.log(subject);
   //   console.log(message);

     let emailReceiver = "Rahmat9654@gmail.com"

     let a = document.createElement('a')
     a.href=`mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${message}, Let's talk with me asap, my phone number ${phone}`
    a.click()
}
