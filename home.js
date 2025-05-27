AOS.init({
  duration: 800,
  easing: "ease-in-out",
  offset: 100,
  once: false,
  mirror: true
});


// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  const sections = document.querySelectorAll("section");
  const navLinks1 = document.querySelectorAll("#navbar a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks1.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Typewriter Effect
  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  let i = 0;
  let j = 0;
  let current = "";
  let isDeleting = false;
  let speed = 100;
  const typeSpan = document.querySelector(".typed-text");

  function typeEffect() {
    if (i < roles.length) {
      if (!isDeleting && j <= roles[i].length) {
        current = roles[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        current = roles[i].substring(0, j--);
      }

      typeSpan.textContent = current;

      if (j === roles[i].length) {
        isDeleting = true;
        speed = 60;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
        speed = 150;
      }
    }
    setTimeout(typeEffect, speed);
  }

  typeEffect();
});

window.addEventListener("load", () => {
  document.querySelectorAll(".bar").forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent;
  });
});

// Project details object
const projectDetails = {
  1: {
    title: "Project 1",
    img: "project1.jpg",
    description: "About Me... (your long description here)",
  },
  2: {
    title: "Project 2",
    img: "project2.jpg",
    description: "Detailed info about Project 2 goes here.",
  },
  3: {
    title: "Project 3",
    img: "project3.jpg",
    description: "Detailed info about Project 3 goes here.",
  },
  4: {
    title: "Project 4",
    img: "project4.jpg",
    description: "Detailed info about Project 4 goes here.",
  },
  5: {
    title: "Project 5",
    img: "project5.jpg",
    description: "Detailed info about Project 5 goes here.",
  },
  6: {
    title: "Project 6",
    img: "project6.jpg",
    description: "Detailed info about Project 6 goes here.",
  },
};

// Modal utility functions
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// Project modal references
const projectModal = document.getElementById("projectDetailModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

// Project View Details Logic
document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", () => {
    const projectCard = button.closest(".project-card");
    const projectId = projectCard?.getAttribute("data-project");
    const data = projectDetails[projectId];
    if (data) {
      modalTitle.textContent = data.title;
      modalImage.src = data.img;
      modalImage.alt = data.title;
      modalDescription.textContent = data.description;
      openModal("projectDetailModal");
    }
  });
});

// Generic "Learn More" buttons for services section
document.querySelectorAll(".learn-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.closest(".service-card")?.dataset.modal;
    if (modalId) openModal(modalId);
  });
});

// General .view-more buttons (if any) using data-target attribute
document.querySelectorAll(".view-more").forEach((btn) => {
  const modalId = btn.getAttribute("data-target");
  if (modalId) {
    btn.addEventListener("click", () => openModal(modalId));
  }
});

// Close buttons inside modals (project or service)
document
  .querySelectorAll(".modal .close-btn, .modal .modal-close-btn")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
