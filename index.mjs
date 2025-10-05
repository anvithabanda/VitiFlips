document.addEventListener("scroll", () => {
  document.querySelectorAll(".timeline-item").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
});

// Get the buttons
// Only run product switcher if we're on the products page
const clothingBtn = document.getElementById("clothing-btn");
const jeweleryBtn = document.getElementById("jewelery-btn");
const clothingContent = document.getElementById("clothing-content");
const jeweleryContent = document.getElementById("jewelery-content");

// Only execute if all elements exist
if (clothingBtn && jeweleryBtn && clothingContent && jeweleryContent) {
  // Initially show clothing, hide jewelery
  clothingContent.style.display = "block";
  jeweleryContent.style.display = "none";

  // Button click events
  clothingBtn.addEventListener("click", () => {
    clothingContent.style.display = "block";
    jeweleryContent.style.display = "none";
  });

  jeweleryBtn.addEventListener("click", () => {
    clothingContent.style.display = "none";
    jeweleryContent.style.display = "block";
  });
}
