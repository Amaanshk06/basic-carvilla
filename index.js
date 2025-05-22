document.addEventListener('DOMContentLoaded', function () {
  // Scroll to Top Button
  const scrollBtns = document.querySelectorAll('.floating-btn');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  // scroll to bottom 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Popup Elements
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupBtn = document.getElementById('close-popup');
  const contactLinks = [
    document.getElementById('contact-link'),
    document.getElementById('contact-link-banner')
  ];

  // Open popup
  contactLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        popupOverlay.style.display = 'flex';
      });
    }
  });

  // Close popup
  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });
  }

  // Mobile Navigation Toggle #1
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Mobile Navigation Toggle #2 (if you have two navs)
  const toggle1 = document.getElementById('menu-toggle1');
  const nav1 = document.getElementById('nav1-links');
  if (toggle1 && nav1) {
    toggle1.addEventListener('click', () => {
      nav1.classList.toggle('active');
    });
  }
});
