alert("welcome to chand rabih website");
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('your name has been submitted!');
  document.getElementById('message').classList.add('fade-in');
});