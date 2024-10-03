// Placeholder function to parse the URL content and extract the link from the Google Web App
function parseLink(content) {
  const urlPattern = /https?:\/\/[^\s]+/g;  // Simple pattern to find URLs
  const matches = content.match(urlPattern);
  return matches ? matches[0] : null;  // Return the first URL found
}

// Function to fetch the Google Web App content and get the link
function fetchLink() {
  return fetch('https://script.googleusercontent.com/macros/echo?user_content_key=6rrObAUfr2E47nDKhaf6ZaO5sfHV7WCGtODnz2hrLjdifYr4uZZ-crvjdTOyUrxDJe0lXaf7carayE0F4YRwRTAUv1VDRkUrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHAyc1cvVPExUGw0XEYzMUTZJDRlw55CCF67aoGy8-sdB240TOEXFu_vfmibmJsYmV6KDgTaI5P9itNrKQnnoBijiKe7BFLCdg&lib=MbRcklJePBgxn9Y0S3RPh0RVoWLggnVYC')
    .then(response => response.text())
    .then(text => parseLink(text));
}

// When the page loads, fetch the link from the Google Web App
let cdioLink = '';
window.onload = function () {
  fetchLink().then(link => {
    if (link) {
      cdioLink = link;
      console.log('CDIO Direction Link:', cdioLink);  // Log the link for debugging
    } else {
      console.error('No link found in the fetched content.');
    }
  });
};

// Get the link and show it in an alert
document.getElementById('getLinkButton').onclick = function () {
  if (cdioLink) {
    alert('Here is the CDIO Direction Link: ' + cdioLink);
  } else {
    alert('The link is still loading, please try again in a moment.');
  }
};

// Go directly to the CDIO Direction page
document.getElementById('goToPageButton').onclick = function () {
  if (cdioLink) {
    window.location.href = cdioLink;
  } else {
    alert('The link is still loading, please try again in a moment.');
  }
};

// Placeholder for WhatsApp functionality
document.getElementById('sendWhatsAppButton').onclick = function () {
  alert('WhatsApp functionality will be added later.');
};
