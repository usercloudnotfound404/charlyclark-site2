document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".menu-close");
  
    if (!toggle || !mobileNav) return;
  
    // OPEN / CLOSE via hamburger
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  
    // CLOSE via X button
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    }
  
    // CLOSE by clicking outside menu
    document.addEventListener("click", (e) => {
      if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        mobileNav.classList.remove("open");
      }
    });
  });
  
  const backdrop = document.querySelector(".menu-backdrop");

  