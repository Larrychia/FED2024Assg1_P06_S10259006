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

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email === '' || re.test(email);
    }

    // Validate form on submission
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Clear previous error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.textContent = '');

        // Date validation (required and not in the future)
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        if (!dateInput.value) {
            document.getElementById('dateError').textContent = 'Date is required';
            isValid = false;
        } else if (dateInput.value > today) {
            document.getElementById('dateError').textContent = 'Date cannot be in the future';
            isValid = false;
        }

        // Email validation (if provided)
        const emailInput = document.getElementById('email');
        if (!validateEmail(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Experience dropdown validation
        const experienceInput = document.getElementById('experience');
        if (!experienceInput.value) {
            document.getElementById('experienceError').textContent = 'Please select an experience rating';
            isValid = false;
        }

        // Likes textarea validation
        const likesInput = document.getElementById('likes');
        if (likesInput.value.trim().length < 10) {
            document.getElementById('likesError').textContent = 'Please provide more detailed feedback (minimum 10 characters)';
            isValid = false;
        }

        // Improvement textarea validation
        const improvementInput = document.getElementById('improvement');
        if (improvementInput.value.trim().length < 10) {
            document.getElementById('improvementError').textContent = 'Please provide more detailed suggestions (minimum 10 characters)';
            isValid = false;
        }

        // Recommend dropdown validation
        const recommendInput = document.getElementById('recommend');
        if (!recommendInput.value) {
            document.getElementById('recommendError').textContent = 'Please select a recommendation rating';
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Real-time validation for textareas
    ['likes', 'improvement'].forEach(id => {
        const textarea = document.getElementById(id);
        textarea.addEventListener('input', function() {
            const errorElement = document.getElementById(id + 'Error');
            if (this.value.trim().length < 10) {
                errorElement.textContent = 'Please provide more detailed feedback (minimum 10 characters)';
            } else {
                errorElement.textContent = '';
            }
        });
    });

    // Real-time email validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        const errorElement = document.getElementById('emailError');
        if (this.value && !validateEmail(this.value)) {
            errorElement.textContent = 'Please enter a valid email address';
        } else {
            errorElement.textContent = '';
        }
    });
});