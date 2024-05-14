// ============================================================= \\
//                          Nav Menu mobile view
// ============================================================= \\

/* ===================================== *\
 *   Menu hide / unhide in mobile view 
\* ===================================== */
const menuButton = document.querySelector("#menuBut");
const menu = document.querySelector("#menu-hide");

function menuToggle() {
    menu.classList.toggle("hide"); // Toggles the "hide" class on the menu
}

menuButton.addEventListener("click", menuToggle);
menu.classList.add("hide");

/* ===================================== *\
 *   Makes sure that the menu displays 
 *      correctly for the screen size
\* ===================================== */
function handleResize() {
    if (window.innerWidth > 720) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
window.addEventListener("resize", handleResize)


// ============================================================= \\
//                          IMAGE VIEWER
// ============================================================= \\

/* ===================================== *\
 * Build the imgviewer
\* ===================================== */
function createViewerTemplate(img, altText) {
    return `<div class="imgViewer">
<span class="closeViewer">X</span>
<img src="${img}" alt="${altText}">
</div>`;
}

/* ===================================== *\
 *  select and remove the imgViewer
\* ===================================== */
function closeViewer() {
    const imgViewer = document.querySelector(".imgViewer");

    if (imgViewer) {
        imgViewer.remove();
    } else {
        console.warn("No image viewer found to close");
    }
}

/* ===================================== *\
 * gets the full sized image and passes it to the 
 *      template then deals with opening and closeing
 *      full img viewer
\* ===================================== */
const clickImages = document.getElementsByClassName("click-img");

// Add click listener to each image
for (let i = 0; i < clickImages.length; i++) {
    clickImages[i].addEventListener("click", viewHandler);
}

function viewHandler(event) {
    // Get the clicked image element
    const clickedImage = event.target;

    // Check if clicked element has an 'src' attribute (assuming it's an image)
    if (!clickedImage.src) return;

    // get the src attribute from that element and 'split' it on the "-"
    const imgParts = clickedImage.src.split("-");

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let imgFull = imgParts[0] + "-full.jpeg";

    // insert the viewerTemplate into the top of the body element
    // Generate viewer HTML
    const viewerHTML = createViewerTemplate(imgFull, "Full Image");

    // Insert viewer template (assuming you have a container element)
    const container = document.body;
    container.insertAdjacentHTML("afterbegin", viewerHTML);

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeX = document.querySelector(".closeViewer");
    closeX.addEventListener('click', closeViewer);
}
