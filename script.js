$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
			document
				.getElementById("contact-form")
				.addEventListener("submit", function (event) {
					event.preventDefault();
					emailjs.sendForm("service_umjc10x", "template_4p81ygf", this).then(
						function (response) {
							console.log("Email sent!", response.status, response.text);
							document.getElementById("name").value = "";
							document.getElementById("email").value = "";
							document.getElementById("message").value = "";

							alert("Email sent successfully!");
						},
						function (error) {
							console.error("Error sending email:", error);
							
						}
					);
				});
		</script>
