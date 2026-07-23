function submitForm(event) {

    // event.preventDefault();

    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const emotion = document.querySelector('input[name="emotion"]:checked');

    if (name == "" && email == "" && password == "" && emotion == null) {

        alert("Please complete this form");

    }

    else if (name == "") {

        alert("Please enter your name");

    }

    else if (email == "") {

        alert("Please enter your email");

    }

    else if (password == "") {

        alert("Please enter your password");

    }

    else if (emotion == null) {

        alert("Please select your emotion");

    }

    else {

        alert("Form submit ho gaya");

    }

}
