$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });

<script>
			document
				.getElementById("contact-form")
				.addEventListener("submit", function (event) {
					event.preventDefault();
					emailjs.sendForm("service_umjc10x", "template_4p81ygf", this).then(
						function (response) {
							console.log("Email sent!", response.status, response.text);
							document.getElementById("email_id").value = "";
							document.getElementById("animal").value = "";
							document.getElementById("size").value = "";
							document.getElementById("date").value = "";
							document.getElementById("package").value = "";
							document.getElementById("message").value = "";

							alert("Email sent successfully!");
						},
						function (error) {
							console.error("Error sending email:", error);
							
						}
					);
				});
		</script>
