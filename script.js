document.documentElement.classList.add('js-loading');

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const cursorGlow = document.getElementById('cursorGlow');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const portraitImg = document.getElementById('portraitImg');

  if (portraitImg) {
    const markLoaded = () => {
      portraitImg.classList.add('portrait-loaded');
      document.documentElement.classList.remove('js-loading');
    };
    if (portraitImg.complete && portraitImg.naturalWidth > 0) {
      markLoaded();
    } else {
      portraitImg.addEventListener('load', markLoaded, { once: true });
      portraitImg.addEventListener('error', () => {
        if (window.__PROFILE_FALLBACK__ && portraitImg.src !== window.__PROFILE_FALLBACK__) {
          portraitImg.src = window.__PROFILE_FALLBACK__;
          portraitImg.addEventListener('load', markLoaded, { once: true });
        } else {
          markLoaded();
        }
      }, { once: true });
      setTimeout(markLoaded, 4000);
    }
  } else {
    document.documentElement.classList.remove('js-loading');
  }

  yearEl.textContent = new Date().getFullYear();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    if (cursorGlow) {
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
    }
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll(
    '.section-head, .about-text, .about-info, .timeline-item, .skill-card, .project-card, .contact-wrap, .footer-inner'
  ).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.05}s`;
  });

  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.className = 'form-status';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.className = 'form-status';
      return;
    }

    formStatus.textContent = `Thank you, ${name}. Your message is on its way.`;
    formStatus.className = 'form-status success';
    form.reset();
  });

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.querySelectorAll('.line').forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(40px)';
      setTimeout(() => {
        line.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 100 + (i * 150));
    });
  }
});
