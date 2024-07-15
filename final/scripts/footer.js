
/* ==========================================================
 * Footer Template
 ========================================================= */
function footerTemplate() {
    return `
            <hr id="footer-hr">
            <div id="footer-flex">
                <div class="socal-links">
                    <a href="https://www.linkedin.com/in/calvin-bullock/" target="_blank"><img class="social-logo" src="images/LinkIn-logo.jpg" alt="in logo"></a>
                    <a href="https://github.com/Calvinbullock" target="_blank"><img class="social-logo" src="images/git-hub-logo.jpg" alt="github logo"></a>
                </div>
                <div>
                    <p>@Calvin</p>
                </div>
            </div>`
}

/* ==========================================================
 * Render function
 ========================================================= */
function renderFooter() {
    console.log("pop")
    const outputElement = document.querySelector("footer")

    outputElement.innerHTML = footerTemplate() 
}

/* ==========================================================
 * init function
 ========================================================= */
function init() {
    renderFooter()
}
init()
