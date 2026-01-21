// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after clicking
    if (document.querySelector('.mobile-menu').classList.contains('active')) {
      document.querySelector('.mobile-menu').classList.remove('active');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

/* Project section starts here*/ 

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.dataset.filter;

    projects.forEach(project => {
      const category = project.dataset.category;

      if (filter === 'all' || category === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Project sections ends here



// Certificate starts here

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  modalImage.src="../images/app.jpeg";
  document.body.style.overflow = "";
}

// Certificate ends here

// comingSoon Alert

// ===============================
// Portfolio Project Button Logic
// ===============================

// ===============================
// Portfolio Project Modal Logic
// ===============================

// Project links (only add links here)
const projectLinks = {
  "Project One": "https://example.com/project-one",
  "Project Two": "https://example.com/project-two"
};

// Modal elements
const modalOverlay = document.getElementById("modalOverlay");
const modalMessage = document.getElementById("modalMessage");
const modalOkBtn = document.getElementById("modalOkBtn");

// Buttons
const visitButtons = document.querySelectorAll(".projectBtn");

// Default message
const fallbackMessage = "This project is currently under maintenance. Please try again later.";

// Show modal function
function showModal(message) {
  modalMessage.textContent = message;
  modalOverlay.style.display = "flex";
}

// Hide modal function
function hideModal() {
  modalOverlay.style.display = "none";
}

// Attach click logic
visitButtons.forEach(button => {
  button.addEventListener("click", () => {
    const projectName = button.dataset.project;
    const projectLink = projectLinks[projectName];

    if (projectLink) {
      window.open(projectLink, "_blank");
    } else {
      showModal(fallbackMessage);
    }
  });
});

// OK button closes modal
modalOkBtn.addEventListener("click", hideModal);

// Optional: click outside modal closes it
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) hideModal();
});
// ComingSoon ends here ........