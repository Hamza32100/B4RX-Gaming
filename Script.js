
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Your Website Title</title>
  <link rel="index.html" href="index.html" />
 
  <script src="script.js"></script>
<script>  
  // Play Now button alert
document.getElementById('play-btn').addEventListener('click', () => {
  alert('Starting the game... Get ready!');
});

// Simple contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const status = document.getElementById('form-status');

  if(name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailPattern.test(email)) {
    status.textContent = 'Please enter a valid email.';
    status.style.color = 'red';
    return;
  }

  // Mimic sending message
  status.textContent = 'Sending message...';
  status.style.color = '#ff3c00';

  setTimeout(() => {
    status.textContent = `Thanks for contacting us, ${name}! We'll get back to you soon.`;
    status.style.color = 'lightgreen';
    this.reset();
  }, 1500);
});
</script>

<script>
  const searchInput = document.getElementById('gameSearch');
  const games = document.querySelectorAll('.game-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    games.forEach((game) => {
      const title = game.querySelector('h4').textContent.toLowerCase();
      if (title.includes(query)) {
        game.style.display = 'block';
      } else {
        game.style.display = 'none';
      }
    });
  });

  <!-- Start of Tawk.to Script -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!-- End of Tawk.to Script -->
</script>

<!-- Your other code -->

<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>