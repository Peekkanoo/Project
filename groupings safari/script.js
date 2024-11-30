// Animal Data
const animals = {
  tiger: {
    name: "Tiger",
    info: "Tigers are large cats with a distinctive orange coat and black stripes.",
    image: "images/cute-tiger 1.jpg",
  },
  zebra: {
    name: "Zebra",
    info: "Zebras are known for their unique black and white striped coats.",
    image: "images/zebra.jpg",
  },
  crocodile: {
    name: "Crocodile",
    info: "Crocodiles have powerful jaws and short legs with clawed toes.",
    image: "images/croco.jpg",
  },
  lion: {
    name: "Lion",
    info: "Lions are often called the king of the jungle for their majestic appearance.",
    image: "images/lion.jpg",
  },
};

// Default image in case the animal image is missing
const defaultImage = "images/default.jpg";

// Modal elements
const infoCard = document.getElementById("info-card");
const closeButton = document.getElementById("close-button");

// Helper function to show modal
function showModal(animal) {
  if (!animal) return;

  // Populate modal content
  const nameElem = document.getElementById("animal-name");
  const infoElem = document.getElementById("animal-info");
  const imageElem = document.getElementById("animal-image");

  nameElem.textContent = animal.name || "Unknown Animal";
  infoElem.textContent = animal.info || "No information available.";
  imageElem.src = animal.image || defaultImage;

  // Display modal with animation
  infoCard.style.display = "block";
  setTimeout(() => infoCard.classList.add("active"), 10);
}

// Helper function to hide modal
function hideModal() {
  infoCard.classList.remove("active");
  setTimeout(() => (infoCard.style.display = "none"), 300); // Match CSS transition duration
}

// Attach event listeners to landmarks
document.querySelectorAll(".landmark").forEach((landmark) => {
  landmark.addEventListener("click", () => {
    const animalKey = landmark.dataset.animal; // Get the animal data key
    const animal = animals[animalKey]; // Retrieve corresponding animal data

    if (!animal) {
      console.error(`Animal data not found for key: "${animalKey}"`);
      return;
    }

    showModal(animal); // Show modal with animal details
  });
});

// Attach event listener to close button
if (closeButton) {
  closeButton.addEventListener("click", hideModal);
} else {
  console.error("Close button element not found.");
}

// Optional: Close modal on clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === infoCard) hideModal();
});