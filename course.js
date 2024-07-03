document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const courseRegistrationForm = document.getElementById('courseRegistrationForm');

    // Function to show available courses after successful login
    function showAvailableCourses() {
        // Example: Fetch courses from server and update UI
        fetch('get_courses.php') // Assuming this endpoint returns JSON list of courses
        .then(response => response.json())
        .then(courses => {
            console.log('Available courses:', courses);
            // Example: Update UI to display courses dynamically
            const coursesContainer = document.getElementById('courses');
            coursesContainer.innerHTML = ''; // Clear existing content
            const coursesList = document.createElement('ul');
            courses.forEach(course => {
                const courseItem = document.createElement('li');
                courseItem.textContent = course.name;
                coursesList.appendChild(courseItem);
            });
            coursesContainer.appendChild(coursesList);
        })
        .catch(error => {
            console.error('Error fetching courses:', error);
            // Handle errors, show user-friendly message
        });
    }
    if (signupForm) {
        // Signup Form Submission
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Fetch form data
            const formData = new FormData(signupForm);
            const signupData = {
                name: formData.get('signupName'),
                email: formData.get('signupEmail'),
                password: formData.get('signupPassword')
            };

            // Simulate API request (replace with actual API call in production)
            console.log('Signing up...', signupData);
            // Example of using fetch to send signup data to server
            fetch('signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Signup successful!', data);
                // Optionally, redirect or show success message
            })
            .catch(error => {
                console.error('Error signing up:', error);
                // Handle errors, show user-friendly message
            });
        });
    }

    if (loginForm) {
        // Login Form Submission
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Fetch form data
            const formData = new FormData(loginForm);
            const loginData = {
                email: formData.get('loginEmail'),
                password: formData.get('loginPassword')
            };

            // Simulate API request (replace with actual API call in production)
            console.log('Logging in...', loginData);
            // Example of using fetch to send login data to server
            fetch('login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Login successful!', data);
                // Optionally, redirect or update UI based on login status
                // For example, show available courses after successful login
                if (data.loggedIn) {
                    showAvailableCourses(); // Function to show courses (defined below)
                } else {
                    console.error('Login failed:', data.message);
                    // Handle login failure, show error message
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
                // Handle errors, show user-friendly message
            });
        });
    }

    if (courseRegistrationForm) {
        // Course Registration Form Submission
        courseRegistrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Fetch form data
            const formData = new FormData(courseRegistrationForm);
            const courseData = {
                course: formData.get('courseSelect')
            };

            // Simulate API request (replace with actual API call in production)
            console.log('Registering for course...', courseData);
            // Example of using fetch to send course registration data to server
            fetch('register_course.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Course registration successful!', data);
                // Optionally, redirect or show success message
            })
            .catch(error => {
                console.error('Error registering for course:', error);
                // Handle errors, show user-friendly message
            });
        });
    }

});
