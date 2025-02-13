// Function to handle color change for any element
function setColorPicker(inputId, elementId, property = "backgroundColor") {
  const colorInput = document.getElementById(inputId);
  const element = document.getElementById(elementId);

  // Set default color
  element.style[property] = colorInput.value;

  // Update the color on change
  colorInput.addEventListener("input", function () {
    element.style[property] = colorInput.value;
  });
}

// Setup color picker for each section
setColorPicker("primary", "primary-color"); // Primary color (background)
setColorPicker("secondary", "secondary-color"); // Secondary color (background)
setColorPicker("textcolor", "text-color", "color"); // Text color (text color)

//Types strings multiple times
var typed = new Typed(".typedjs-multiple", {
  strings: [
    "Gathering your brands unique identity…",
    "Pulling it all together—almost there!",
    "Aligning all brand elements—hang tight!",
    "Optimizing for a smooth experience…",
    "Your brand is in good hands—almost done!",
    "Your brand is almost ready to go!",
    "Fine-tuning the details that matter…",
    "Saving your brand identity for easy access…",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});

//Types strings multiple times
var typed5 = new Typed(".typedjs-multipleeditbrand", {
  strings: [
    "Gathering your brands unique identity…",
    "Pulling it all together—almost there!",
    "Aligning all brand elements—hang tight!",
    "Optimizing for a smooth experience…",
    "Your brand is in good hands—almost done!",
    "Building the foundation for your projects…",
    "Your brand is almost ready to go!",
    "Fine-tuning the details that matter…",
    "Saving your brand identity for easy access…",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});
