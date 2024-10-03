// script.js

// Example placeholder link for CDIO Direction
const cdioDirectionLink = "https://drive.google.com/file/d/EXAMPLE_FILE_ID/view";

// Function to display the link
function getLink() {
  const linkContainer = document.getElementById('link-container');
  linkContainer.innerHTML = `<a href="${cdioDirectionLink}" target="_blank">${cdioDirectionLink}</a>`;
}

// Function to navigate directly to the CDIO Direction page
function goToPage() {
  window.location.href = cdioDirectionLink;
}

// Placeholder for sending the link via WhatsApp
function sendWhatsApp() {
  alert("WhatsApp integration coming soon!");
}
