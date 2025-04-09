document.addEventListener("DOMContentLoaded", function () {
    // Booking form handler
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
      bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const count = parseInt(document.getElementById("panditCount").value);
        if (count > 50 || count < 1) {
          alert("Please enter a valid number of pandits (1–50).");
          return;
        }
  
        // Redirect to success page
        window.location.href = "success.html";
      });
    }
  
    // Contact form handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("contactName").value;
        alert(`Thanks ${name}, we’ll get back to you soon!`);
        contactForm.reset();
      });
    }
  });
  