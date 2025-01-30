const form = document.querySelector("form");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const experience = document.getElementById("experience");
const reason = document.getElementById("reason");
const learningMode = document.getElementById("learningMode");
const laptop = document.querySelector("input[name='laptop']:checked");
const sources = document.querySelectorAll("input[name='source']:checked");
const questions = document.getElementById("questions");
// const subject = document.getElementById("subject"); // Added subject field
// const mess = document.getElementById("message"); // Added message field

function sendEmail() {
    // Get the form name dynamically from the page title
    const formName = document.title;

    // Get selected sources (Twitter, WhatsApp, etc.)
    let selectedSources = [];
    sources.forEach(source => selectedSources.push(source.value));

    // Construct the email body
    const bodyMessage = `
        <strong>Form Name:</strong> ${formName}<br>
        <strong>Full Name:</strong> ${fullName.value}<br>
        <strong>Email:</strong> ${email.value}<br>
        <strong>Phone Number:</strong> ${phone.value}<br>
        <strong>Experience Level:</strong> ${experience.value}<br>
        <strong>Reason for Learning Python:</strong> ${reason.value}<br>
        <strong>Preferred Learning Mode:</strong> ${learningMode.value}<br>
        <strong>Has Laptop:</strong> ${laptop ? laptop.value : "Not selected"}<br>
        <strong>How They Heard About the Course:</strong> ${selectedSources.join(", ")}<br>
        <strong>Questions or Expectations:</strong> ${questions.value}<br>
    `;

    // Send email using Elastic Email SMTP
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "chibuzor.john.2018@gmail.com",
        Password: "14371953AE172D54D0299E733D91FE657326",
        To: "chibuzor.john.2018@gmail.com",
        From: "chibuzor.john.2018@gmail.com",
        Subject: formName, // Using the subject field
        Body: bodyMessage
    }).then(message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    // form.reset();
    // return false;

    // Redirect to another page (e.g., "success.html")
    window.location.href = "success.html";
});