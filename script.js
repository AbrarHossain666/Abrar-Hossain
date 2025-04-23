let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-items');

// Handle menu icon toggle (hamburger menu)
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'x' icon for the menu
    navbar.classList.toggle('active'); // Toggle the navbar active class for mobile view
};

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');

// Toggle dark mode on body element
darkMode.addEventListener('click', function() {
    darkMode.classList.toggle('active'); // Optional: Toggle 'active' class for styling the button (if needed)
    content.classList.toggle('night');  // Toggle the 'night' class on the body for dark mode
});
