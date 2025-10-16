document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".numbers span");
  const submitButton = document.querySelector("button");
  const mainDiv = document.querySelector(".main-div");
  const resultDiv = document.querySelector(".result");
  const resultText = resultDiv.querySelector("p"); // the "You selected out of 5" text

  let selectedRating = null;

  // Disable submit initially
  submitButton.disabled = true;

  // Click on a number span
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove 'active' from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Add 'active' to clicked button
      btn.classList.add("active");

      // Store selected rating
      selectedRating = btn.textContent;

      // Enable submit
      submitButton.disabled = false;

      e.stopPropagation();
    });
  });

  // Click on submit button
  submitButton.addEventListener("click", (e) => {
    if (!selectedRating) return; // safety check

    // Hide rating state
    mainDiv.style.display = "none";

    // Update the result message
    resultText.textContent = `You selected ${selectedRating} out of 5`;

    // Show thank-you state
    resultDiv.style.display = "flex";
    resultDiv.style.flexDirection = "column";
    resultDiv.style.alignItems = "center";
    resultDiv.style.justifyContent = "center";
    resultDiv.style.gap = "1rem";

    e.stopPropagation();
  });

  // Click anywhere else on the document
  document.addEventListener("click", (e) => {
    const clickedOutside =
      !e.target.closest("span") && !e.target.closest("button");

    if (clickedOutside) {
      // Reset all number spans
      buttons.forEach((b) => b.classList.remove("active"));
      // Disable submit again
      submitButton.disabled = true;
      selectedRating = null;
    }
  });
});
