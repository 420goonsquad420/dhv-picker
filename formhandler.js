document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const summary = `Name: ${name}<br>Email: ${email}<br>Message: ${message}`;

    document.getElementById('summary').innerHTML = `<h2>Summary</h2>${summary}`;
});
