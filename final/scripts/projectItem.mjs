
/* ======================================================= *\
-------------------------------------------------------------
|| __Project Item JS__
|| 
|| This file builds the page projectItem page based off 
||      the data stored in projects.mjs and the id 
||      passed in the url.
-------------------------------------------------------------
\* ======================================================= */

import projects from './projects.mjs';

// get parm from url
const urlParams = new URLSearchParams(window.location.search);
const projectID = urlParams.get('id');
console.log(projectID);

/* ======================================================= *\
-------------------------------------------------------------
||      Build 3rd page based on item id
-------------------------------------------------------------
\* ======================================================= */

/* ==========================================================
 * Build page template
 ========================================================= */
function projectTemplate(projectObject) {
    let html = ""
        html += ` <h1>${projectObject.title}</h1>`
        + `\n <h2>Start Date: ${projectObject.startDate} - Last update: ${projectObject.lastUpdate}</h2>`
        + `\n <img id="hero-img" src="${projectObject.heroImage}" alt="${projectObject.altText}">`
        + `\n <div class="desc">`
        + `\n   <h2>Details:</h2>`
        + `\n   <p>${projectObject.longDesc}</p>`
        + `\n </div>`
        + `\n <br>`

    if (projectObject.youtubeUrl != null) {
        html += `\n <a href="${projectObject.youtubeUrl}">Youtube Demo</a>`
            + `\n <span> | </span>`
    }
    html += `\n <a href="${projectObject.gitUrl}">Link to GitHub Repo:</a>`

    return html
}

/* ==========================================================
 * Render function
 ========================================================= */
function renderProjects(item) {
    // get the element we will output the project details into
    const outputElement = document.getElementById("project-div")
    const html = projectTemplate(item)
    console.log(html)
    console.log(outputElement)

	// Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = html
}

/* ==========================================================
 * init function
 ========================================================= */
function init() {
    // render the projects
    renderProjects(projects[projectID])
}
init()


