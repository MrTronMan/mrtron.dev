//Title Animation
const titleTag = document.getElementById("titleTag");
setTimeout(() => {
    titleTag.classList.add('color-change'); 
    titleTag.classList.remove('fadeIn'); 
}, 2000);
//Triggers
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('about-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.about-header'));
