(function () {
    emailjs.init("dKnidPp3Y-VIZBfoI"); // Replace "YOUR_USER_ID" with your EmailJS user ID
  })();

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm("service_1i6quwx", "template_prrhwnd", event.target)
      .then(
        function (response) {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message. Please try again later.");
        }
      );
  }