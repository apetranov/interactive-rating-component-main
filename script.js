// document.addEventListener("DOMContentLoaded", () => {
//   const one = document.querySelector(".one");
//   const two = document.querySelector(".two");
//   const three = document.querySelector(".three");
//   const four = document.querySelector(".four");
//   const five = document.querySelector(".five");

//   const buttons = [one, two, three, four, five];

//   // helper function to reset all buttons to default style
//   function resetButtons() {
//     buttons.forEach((btn) => {
//       btn.style.backgroundColor = "hsl(216, 12%, 8%)";
//       btn.style.color = "hsl(217, 12%, 63%)";
//     });
//   }

//   one.addEventListener("click", () => {
//     console.log("One clicked");
//     resetButtons();
//     one.style.backgroundColor = "white";
//     one.style.color = "black";
//   });

//   two.addEventListener("click", () => {
//     console.log("Two clicked");
//     resetButtons();
//     two.style.backgroundColor = "white";
//     two.style.color = "black";
//   });

//   three.addEventListener("click", () => {
//     console.log("Three clicked");
//     resetButtons();
//     three.style.backgroundColor = "white";
//     three.style.color = "black";
//   });

//   four.addEventListener("click", () => {
//     console.log("Four clicked");
//     resetButtons();
//     four.style.backgroundColor = "white";
//     four.style.color = "black";
//   });

//   five.addEventListener("click", () => {
//     console.log("Five clicked");
//     resetButtons();
//     five.style.backgroundColor = "white";
//     five.style.color = "black";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("span");
  const submitButton = document.querySelector("button");
  const mainDiv = document.querySelector(".main-div");

  // Disable submit initially
  submitButton.disabled = true;

  // Click on a number span
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove 'active' from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Add 'active' to clicked button
      btn.classList.add("active");

      // Enable submit
      submitButton.disabled = false;

      // Stop event from bubbling to document click
      e.stopPropagation();
    });
  });

  // Click on submit button
  submitButton.addEventListener("click", (e) => {
    mainDiv.style.display = "none";
    e.stopPropagation(); // Prevent resetting active on submit click
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
    }
  });
});
