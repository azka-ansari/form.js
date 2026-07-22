function submitForm(event) {

    event.preventDefault();

    var name = document.getElementById("name_label").value;
    var email = document.getElementById("email_label").value;
    var password = document.getElementById("password_label").value;

    if (name == "") {
        alert("Please enter your name");
    }

    else if (email == "") {
        alert("Please enter your email");
    }

    else if (password == "") {
        alert("Please enter your password");
    }

    else {
        alert("Form submit ho gaya");
    }
}