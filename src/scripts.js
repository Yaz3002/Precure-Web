document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Change hamburger to X
      const spans = mobileMenuBtn.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Navbar background change on scroll
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Parallax effect for hero section
  const heroBackground = document.querySelector(".hero-background");
  const heroContent = document.querySelector(".hero-content");
  const characterLeft = document.querySelector(".character-left");
  const characterCenter = document.querySelector(".character-center");
  const characterRight = document.querySelector(".character-right");

  if (heroBackground && window.innerWidth > 768) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.3;
      const scale = 1 + scrollPosition * 0.0005;
      const opacity = 1 - scrollPosition * 0.002;

      heroBackground.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heroBackground.style.opacity = opacity > 0 ? opacity : 0;

      if (heroContent) {
        heroContent.style.opacity = opacity > 0 ? opacity : 0;
      }

      if (characterLeft) {
        characterLeft.style.transform = `translateY(${scrollPosition * 0.1}px) translateX(${-scrollPosition * 0.05}px)`;
      }

      if (characterCenter) {
        characterCenter.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }

      if (characterRight) {
        characterRight.style.transform = `translateY(${scrollPosition * 0.1}px) translateX(${scrollPosition * 0.05}px)`;
      }
    });
  }

  // Image hover effects
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".gallery-overlay").style.opacity = "1";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".gallery-overlay").style.opacity = "0";
    });
  });

  // Animate elements on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animated");
      }
    });
  };

  // Add animate-on-scroll class to elements
  const addAnimationClasses = function () {
    const sections = document.querySelectorAll("section:not(.hero)");
    sections.forEach((section) => section.classList.add("animate-on-scroll"));

    const sectionHeaders = document.querySelectorAll(".section-header");
    sectionHeaders.forEach((header) =>
      header.classList.add("animate-on-scroll"),
    );

    const seasonCards = document.querySelectorAll(".season-card");
    seasonCards.forEach((card, index) => {
      card.classList.add("animate-on-scroll");
      card.style.transitionDelay = `${index * 0.1}s`;
    });

    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
      item.classList.add("animate-on-scroll");
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  };

  addAnimationClasses();
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Initial check
});
