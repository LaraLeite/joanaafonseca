
    // Navbar scroll shadow
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Mobile menu
    const burgerBtn   = document.getElementById('burgerBtn');
    const mobileMenu  = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    burgerBtn.addEventListener('click',   () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('.navbar__link').forEach(l =>
      l.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );

    // Fade-up on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 0.1}s`;
      observer.observe(el);
    });

