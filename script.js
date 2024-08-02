document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;

    if (email1 !== email2) {
        alert("Email addresses do not match.");
        event.preventDefault();
    }
});
