document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        document.getElementById('message').style.display = 'block';
        document.getElementById('subscribeForm').style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('menuToggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    var expanded = nav.getAttribute('aria-expanded') === 'true' || false;
    nav.setAttribute('aria-expanded', !expanded);
});
