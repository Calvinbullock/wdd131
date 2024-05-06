console.log("yeet")

const imageInput = document.getElementById('imageInput');
const imageButton = document.getElementById('imageButton');
const testImg = document.getElementById('testImg');

imageButton.addEventListener('click', function() {
  const file = imageInput.files[0]; // Get the first selected file

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      testImg.src = event.target.result; // Set image source to the loaded image data
    };

    reader.readAsDataURL(file); // Read the image file as data URL
  } else {
    // Handle case where no file is selected (optional)
    console.error("No file selected!");
  }
});
