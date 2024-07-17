function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_hloylei", "template_xk5ozza", params).then((res) => {
        console.log(res);
        alert("Your message was sent successfully")
    })
    .catch(err => console.log("error"))
}
