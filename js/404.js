// Add an event listener for the 'error' event on the window object
window.addEventListener('error', function (event) {
  // Check if the error is a 404 error
  if (event && event.error && event.error.status === 404) {
    // Redirect to index.html
    window.location.href = 'index.html';
  }
});
