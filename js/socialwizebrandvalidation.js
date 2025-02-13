const scanButton = document.getElementById("scan-site");
const websiteUrlInput = document.getElementById("website-url");

scanButton.addEventListener("click", function (event) {
  const websiteUrl = websiteUrlInput.value.trim();

  // Regular expression to check if the URL starts with http:// or https://
  const urlPattern = /^(https?:\/\/)/;

  if (!urlPattern.test(websiteUrl)) {
    event.preventDefault(); // Prevent further actions if the URL is invalid
    alert(
      "Please enter a valid website URL that starts with http:// or https://"
    );
  }
});

// Step 3 button
const step3Button = document.getElementById("step3");

// Track if uploads are completed
let uploadCompleted = { color: false, black: false, white: false };

// Function to enable the Step 3 button if any upload is completed

function checkUploads() {
  // If any of the uploads are true, enable the button, show it, and remove .disabled class
  if (uploadCompleted.color || uploadCompleted.black || uploadCompleted.white) {
    step3Button.disabled = false;
    step3Button.style.display = "block"; // Show the button
    step3Button.classList.remove("disabled"); // Remove .disabled class when button is enabled
  } else {
    step3Button.disabled = true;
    step3Button.style.display = "none"; // Hide the button when disabled
    step3Button.classList.add("disabled"); // Add .disabled class when button is disabled
  }
}

// Function to handle image upload and set thumbnail
function setupUploadcare(inputId, imageId, uploadKey) {
  uploadcare.Widget(inputId).onUploadComplete(function (info) {
    // Set the image thumbnail src to the uploaded image URL
    document.getElementById(imageId).src = info.cdnUrl + "-/resize/150x/";
    // Mark this upload as complete
    uploadCompleted[uploadKey] = true;
    // Check if any upload is complete and enable the button if so
    checkUploads();
  });
}

// Setup for each upload field
setupUploadcare("#upload-color", "image-thumbnail", "color"); // First logo (Color logo)
setupUploadcare("#upload-color-3", "image-thumbnail2", "black"); // Second logo (Black logo)
setupUploadcare("#upload-color-2", "image-thumbnail3", "white"); // Third logo (White logo)

// Step 4 button
const step4Button = document.getElementById("step4");

// Input fields to check
const inputFields = [
  document.getElementById("company_usp"),
  document.getElementById("target_audience"),
  document.getElementById("customer_age"),
  document.getElementById("customer_gender"),
];

// Function to check if all input fields are filled
function checkAllInputsFilled() {
  return inputFields.every((input) => input.value.trim() !== "");
}

// Function to update the Step 4 button state
function updateButtonState() {
  if (checkAllInputsFilled()) {
    step4Button.disabled = false;
    step4Button.style.display = "block"; // Show the button
    step4Button.classList.remove("disabled"); // Remove .disabled class when button is enabled
  } else {
    step4Button.disabled = true;
    step4Button.style.display = "none"; // Hide the button when disabled
    step4Button.classList.add("disabled"); // Add .disabled class when button is disabled
  }
}

// Add event listeners to all input fields
inputFields.forEach((input) => {
  input.addEventListener("input", updateButtonState);
});

// Consolidated window.onload logic to disable both Step 3 and Step 4 buttons initially
window.onload = function () {
  /*  // Initialize Step 3 button as disabled and hidden
  step3Button.disabled = true; // Initially disable the button
  step3Button.style.display = "none"; // Initially hide the button
  step3Button.classList.add("disabled"); // Add the .disabled class
*/
  // Initialize Step 4 button as disabled and hidden
  step4Button.disabled = true; // Initially disable the button
  step4Button.style.display = "none"; // Initially hide the button
  step4Button.classList.add("disabled"); // Add the .disabled class
};

// Get all radio buttons in the form
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="angle"]'
);

radioButtons.forEach((radio) => {
  // Listen for change event on each radio button
  radio.addEventListener("change", function () {
    // When a radio button is selected, remove 'angle-black' from all .angle-item-single elements
    document.querySelectorAll(".angle-item-single").forEach((item) => {
      item.classList.remove("angle-black");
    });

    // Add 'angle-black' to the corresponding .angle-item-single when this radio is checked
    if (radio.checked) {
      const parentDiv = radio.closest(".angle-item"); // Find the closest .angle-item parent
      const angleItemSingle = parentDiv.querySelector(".angle-item-single"); // Get the .angle-item-single inside it
      angleItemSingle.classList.add("angle-black"); // Add the angle-black class
    }
  });
});

/*
document.addEventListener("DOMContentLoaded", function () {
  const fontSelect = document.getElementById("select_font");
  const fontItems = document.querySelectorAll(".font-item");

  fontSelect.addEventListener("change", function () {
    const selectedFont = fontSelect.value;

    fontItems.forEach((item) => {
      const fontName = item.querySelector(".font-name").textContent;

      // Check if the selected font matches the font item
      if (fontName === selectedFont) {
        item.style.display = "block"; // Show the selected font item
      } else {
        item.style.display = "none"; // Hide the others
      }
    });
  });

  // Trigger change event on page load to set the initial state
  fontSelect.dispatchEvent(new Event("change"));
});
*/
