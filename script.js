document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle the nav links on button click
    menuButton.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    // Optional: Close menu when clicking outside (for better UX)
    document.addEventListener('click', function (event) {
      if (!menuButton.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
      }
    });
  });