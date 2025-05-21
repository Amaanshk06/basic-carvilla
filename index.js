const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
   // Function to scroll to the top
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevents the default behavior (anchor link)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
}