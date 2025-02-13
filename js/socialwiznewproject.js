// Get all radio buttons in the form
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="angle"]'
);

radioButtons.forEach((radio) => {
  // Listen for change event on each radio button
  radio.addEventListener("change", function () {
    // When a radio button is selected, remove 'angle-black' from all .angle-item-single elements
    document.querySelectorAll(".angle-item-single").forEach((item) => {
      item.classList.remove("active-angle");
    });

    // Add 'angle-black' to the corresponding .angle-item-single when this radio is checked
    if (radio.checked) {
      const parentDiv = radio.closest(".angle-item"); // Find the closest .angle-item parent
      const angleItemSingle = parentDiv.querySelector(".angle-item-single"); // Get the .angle-item-single inside it
      angleItemSingle.classList.add("active-angle"); // Add the angle-black class
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const platforms = document.querySelectorAll(".platform-radio-button");
  const wraps = {
    facebook: document.getElementById("facebook-wrap"),
    linkedln: document.getElementById("linkedln-wrap"),
    twitter: document.getElementById("twitter-wrap"),
    instagram: document.getElementById("instagram-wrap"),
  };
  const platformIcons = document.querySelectorAll(".platform-icon_wrap");

  // Function to set visibility and selected class
  function updateSelection(selectedPlatform) {
    // Hide all wraps and remove selected class
    for (const key in wraps) {
      wraps[key].style.display = "none"; // Hide all wraps
      platformIcons.forEach((icon) =>
        icon.classList.remove("platform-selected")
      ); // Remove selected class
    }

    // Show selected wrap and add selected class
    wraps[selectedPlatform].style.display = "block";
    document
      .querySelector(`input[value="${selectedPlatform}"]`)
      .closest(".platform-icon_wrap")
      .classList.add("platform-selected");
  }

  // Initial setup
  updateSelection("facebook"); // Set default selected platform

  // Event listener for radio buttons
  platforms.forEach((platform) => {
    platform.addEventListener("change", function () {
      updateSelection(this.value); // Update selection based on the selected radio button
    });
  });
});

//Types strings multiple times
var typed = new Typed(".typedjs-multiple", {
  strings: [
    "Crafting the perfect ad...",
    "Shaping your creative vision...",
    "Designing the ideal layout...",
    "Fine-tuning the details...",
    "Optimizing for maximum impact...",
    "Bringing your concept to life...",
    "Generating stunning visuals...",
    "Bringing your brand to life...",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});

//Types strings multiple times
var typed2 = new Typed(".typedjs-multiple2", {
  strings: [
    "Crafting the perfect ad...",
    "Shaping your creative vision...",
    "Designing the ideal layout...",
    "Fine-tuning the details...",
    "Optimizing for maximum impact...",
    "Bringing your concept to life...",
    "Generating stunning visuals...",
    "Applying your style and vibe...",
    "Visualizing your success...",
    "Creating an ad that stands out...",
    "Bringing your brand to life...",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});

//Types strings multiple times
var typed3 = new Typed(".typedjs-multiple3", {
  strings: [
    "Crafting the perfect ad...",
    "Shaping your creative vision...",
    "Designing the ideal layout...",
    "Fine-tuning the details...",
    "Optimizing for maximum impact...",
    "Bringing your concept to life...",
    "Visualizing your success...",
    "Creating an ad that stands out...",
    "Bringing your brand to life...",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});

//Types strings multiple times
var typed4 = new Typed(".typedjs-multipleproject", {
  strings: [
    "Crafting the perfect ad...",
    "Shaping your creative vision...",
    "Designing the ideal layout...",
    "Fine-tuning the details...",
    "Optimizing for maximum impact...",
    "Bringing your concept to life...",
    "Generating stunning visuals...",
    "Applying your style and vibe...",
    "Visualizing your success...",
    "Creating an ad that stands out...",
    "Bringing your brand to life...",
  ],
  typeSpeed: 50, // typing speed
  backSpeed: 10, // erasing speed
  loop: true, // start back after ending typing
});

document.addEventListener("DOMContentLoaded", function () {
  const platformSelect = document.getElementById("platform");
  const ratioItems = document.querySelectorAll(".ratio-preview-item");

  platformSelect.addEventListener("change", function () {
    const selectedValue = platformSelect.value; // Get the selected value

    ratioItems.forEach((item) => {
      const itemText = item.querySelector(
        ".dropdown-same-name-hidden"
      ).textContent; // Get the slug from the item

      // Show the item if its slug matches the selected value, hide otherwise
      if (itemText === selectedValue) {
        item.style.display = "block"; // Show matching item
      } else {
        item.style.display = "none"; // Hide non-matching item
      }
    });
  });

  // Trigger change event on page load to set the initial state
  platformSelect.dispatchEvent(new Event("change"));
});

// Select all radio buttons within platform items
const platformItems = document.querySelectorAll(".platform-item");

platformItems.forEach((item) => {
  // Select the radio button within each platform item
  const radioButton = item.querySelector('input[type="radio"]');

  // Add click event listener to the radio button
  radioButton.addEventListener("click", () => {
    // Remove 'active-platform' class from all items
    platformItems.forEach((item) => item.classList.remove("active-platform"));

    // Add 'active-platform' class to the clicked item
    item.classList.add("active-platform");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const typeDropdown = document.getElementById("type");
  const styleDropdown = document.getElementById("select-style");

  // Store the original options of both dropdowns
  const allTypeOptions = Array.from(typeDropdown.options);
  const allStyleOptions = Array.from(styleDropdown.options);

  // Function to filter and update style dropdown options based on selected type
  const updateStyleDropdown = () => {
    const selectedType = typeDropdown.value;

    // Clear current style dropdown options
    styleDropdown.innerHTML = "";

    // Add "Select style" default option
    const defaultStyleOption = document.createElement("option");
    defaultStyleOption.textContent = "Select style";
    defaultStyleOption.value = "";
    styleDropdown.appendChild(defaultStyleOption);

    // Filter and append options that match the selected type
    allStyleOptions.forEach((option) => {
      const relatedType = option.getAttribute("related_type");

      if (relatedType === selectedType || !relatedType) {
        styleDropdown.appendChild(option.cloneNode(true));
      }
    });
  };

  // Event listener for type dropdown
  typeDropdown.addEventListener("change", updateStyleDropdown);

  // Event listener for style dropdown
  styleDropdown.addEventListener("change", () => {
    const selectedStyle = styleDropdown.value;

    // Find the related type for the selected style
    const relatedType = allStyleOptions
      .find((option) => option.value === selectedStyle)
      ?.getAttribute("related_type");

    if (relatedType) {
      // Set the type dropdown to the matching related type
      typeDropdown.value = relatedType;
    } else {
      // Reset type dropdown if no matching type
      typeDropdown.value = "";
    }
  });

  // Initial call to filter the style dropdown based on the initial type selection
  updateStyleDropdown();
});

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    'input[name="selected_image"]'
  );
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Get the associated image URL
      const imageURL = this.value;

      // Update the view or perform your desired action
      const imageViewWrap = document.querySelector(".image-view_wrap");
      const tempImage = imageViewWrap.querySelector(".temp-image img");

      if (tempImage) {
        tempImage.src = imageURL;
        imageViewWrap.style.display = "block"; // Show the image view
      }
    });
  });

  // Close button logic
  const closeButton = document.querySelector(".close-box");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const imageViewWrap = document.querySelector(".image-view_wrap");
      imageViewWrap.style.display = "none"; // Hide the image view
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  function updateActiveState() {
    document.querySelectorAll(".cms-template-item").forEach((item) => {
      const radioDiv = item.querySelector(".w-form-formradioinput");
      const slideWrap = item.querySelector(".slide_wrap");
      const radioInput = item.querySelector("input[type='radio']");

      if (radioInput && radioInput.checked) {
        radioDiv.classList.add("w--redirected-checked");
        slideWrap.classList.add("active-slide");
      } else {
        radioDiv.classList.remove("w--redirected-checked");
        slideWrap.classList.remove("active-slide");
      }
    });
  }

  function setupRadioListeners() {
    document.querySelectorAll(".cms-template-item input[type='radio']").forEach((radioInput) => {
      radioInput.addEventListener("change", () => {
        updateActiveState(); // Apply active styles when selection changes
      });
    });
  }

  function onPaginationChange() {
    setTimeout(() => {
      updateActiveState(); // Reapply active-slide class after new items load
      setupRadioListeners(); // Reattach event listeners to new items
    }, 500); // Small delay to ensure all elements are fully rendered
  }

  // Detect pagination updates using Finsweet CMS Load
  const cmsList = document.querySelector("[fs-cmsload-element='list']");
  if (cmsList) {
    const paginationObserver = new MutationObserver(onPaginationChange);
    paginationObserver.observe(cmsList, { childList: true, subtree: true });
  }

  // Initial setup
  updateActiveState();
  setupRadioListeners();
});




document.addEventListener("DOMContentLoaded", () => {
  // Function to update the active-image class
  function updateActiveImage(item, radioButton) {
    if (radioButton.classList.contains("w--redirected-checked")) {
      item.classList.add("active-image");
    } else {
      item.classList.remove("active-image");
    }
  }

  // Set up a MutationObserver for each radio button's parent container
  const imageItems = document.querySelectorAll(".gen-image-single");

  imageItems.forEach((item) => {
    const radioButton = item.querySelector(".w-form-formradioinput");

    if (!radioButton) {
      return;
    }

    // Observer to track changes in the radio button's class attribute
    const observer = new MutationObserver(() => {
      updateActiveImage(item, radioButton);
    });

    observer.observe(radioButton, {
      attributes: true, // Listen for attribute changes
      attributeFilter: ["class"], // Only watch for class changes
    });

    // Initial state check
    updateActiveImage(item, radioButton);
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

document.addEventListener("DOMContentLoaded", function () {
  // Select all radio input elements
  const radioInputs = document.querySelectorAll(
    '.select-template input[type="radio"]'
  );

  // Function to update the preview image and colors
  function updatePreview() {
    // Find the currently checked radio button
    const checkedRadio = document.querySelector(
      '.select-template input[type="radio"]:checked'
    );
    if (checkedRadio) {
      // Find the parent list item of the checked radio
      const parentItem = checkedRadio.closest(".cms-template-item");
      if (parentItem) {
        // Update the image preview
        const selectedImage = parentItem.querySelector(".slide-image-back");
        if (selectedImage) {
          const imageSrc = selectedImage.getAttribute("src");
          const previewImage = document.querySelector(
            ".selected_template-preview img.selected-temp-image"
          );
          if (previewImage) {
            previewImage.setAttribute("src", imageSrc);
          }
        }

        // Update the colors
        const colorBlocks = parentItem.querySelectorAll(
          ".colors_wrap .color_box_2"
        );
        colorBlocks.forEach((colorBlock) => {
          const colorName = colorBlock.getAttribute("colorname");
          const backgroundColor = colorBlock.style.backgroundColor;

          // Map colorName to the corresponding preview color box
          if (colorName) {
            const previewColorBox = document.querySelector(
              `.colors_wrap._2 .color-${colorName}`
            );
            if (previewColorBox) {
              previewColorBox.style.backgroundColor = backgroundColor;
            }
          }
        });
      }
    }
  }

  // Add event listeners to radio inputs
  radioInputs.forEach((input) => {
    input.addEventListener("change", function () {
      // When the selection changes, update the preview image and colors
      updatePreview();
    });
  });

  // Initialize the preview with the default checked radio
  updatePreview();
});

document.addEventListener("DOMContentLoaded", function () {
  // Extract all filter ratios from the bottom list
  const bottomFilterRatios = Array.from(
    document.querySelectorAll(".hidden-case .w-dyn-item .filter-ratio")
  ).map((el) => el.textContent.trim());

  // Select all items in the top list
  const topItems = document.querySelectorAll(".platform-item");

  // Iterate through each top item
  topItems.forEach((item) => {
    // Get the filter ratio for the current item
    const filterRatio = item.querySelector(".filter-ratio")?.textContent.trim();
    const radioButton = item.querySelector("input[type='radio']");

    if (filterRatio && bottomFilterRatios.includes(filterRatio)) {
      // Filter ratio exists in the bottom list; enable the radio button
      radioButton.disabled = false;

      // Remove red styles if previously applied
      item.style.backgroundColor = "";
      item.style.borderColor = "";
    } else {
      // Filter ratio does not exist in the bottom list; disable the radio button
      radioButton.disabled = true;

      // Set the red background and border
      item.style.backgroundColor = "#535353";
      item.style.borderColor = "#535353";

      // Add a click event listener to the item to show an alert
      item.addEventListener("click", function (e) {
        if (radioButton.disabled) {
          alert("This option is coming soon!");
          e.preventDefault(); // Prevent the default behavior
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("design_style-3");

  if (selectElement) {
    // Disable the first option
    const firstOption = selectElement.options[0];
    firstOption.disabled = true;
  }
});
