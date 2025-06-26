
//This will smoothly move when you click on a link that has an anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', 
      function(e) {
        e.preventDefault();

      document.querySelector(this.getAttributte('href')).scrollIntoView({ behavior: 'smooth'});
      });
});

//Animated Skill Progress Bar 
//<div class="progress-bar" data-percent="80"></div>
window.addEventListener('scroll', () =>{
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight){
            bar.style.width = bar.dataset.percent + '%';
        }
    });
});

//Dark Mode
const toggleButton = document.getElementById("theme-toggle");

  // Apply saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  });

  // Toggle theme and save preference
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save to localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });


//animate thumnails
document.querySelectorAll('.project-thumbnail').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
});