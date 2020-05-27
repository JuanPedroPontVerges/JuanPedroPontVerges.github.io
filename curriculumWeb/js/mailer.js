function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "jppontverges@gmail.com",
        Password: "Juanpedro+2",
        To: 'jppontverges@gmail.com',
        From: "sender’s email address",
        Subject: "email subject",
        Body: "email body",
    }).then(
        message => alert("mail sent successfully")
    );
}