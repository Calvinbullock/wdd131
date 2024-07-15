
/* ======================================================= *\
-------------------------------------------------------------
|| __Gallery JS__
|| 
|| This file builds the gallery page based off the data stored 
||      in projects.mjs.
|| 
|| This file also handles search and filtering of the project
||      data when displaying in the gallery page.
-------------------------------------------------------------
\* ======================================================= */

import projects from './projects.mjs';

/* ======================================================= *\
-------------------------------------------------------------
||                    Item template
-------------------------------------------------------------
\* ======================================================= */

/* ==========================================================
 * Create and return a tags template
 ========================================================= */
function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    let tagsHTML = ``
    for (let i = 0; i < tags.length; i++) {
        tagsHTML += `<li class="tag">${tags[i]}</li>`
    }

	return tagsHTML;
}

/* ==========================================================
 * Gallery Item Create a Template
 ========================================================= */
function projectTemplate(item) {
    return `
        <div class="item-card">
            <div class="item-img-div">
                <a href="./projectItem.html?id=${item.id}"><img class="item-img" src="${item.heroImage}" alt="${item.altText}"></a>
            </div>
            <div class="item-details">
                <div class="item-tags">
                    ${tagsTemplate(item.tags)}
                </div>
                    <h2 class="item-name">${item.title}</h2>
                    <p class="desc">Start Date: ${item.startDate} - Last update: ${item.lastUpdate}</p>
                    <p class="desc">${item.desc}</p>
                </span>
                <a href="./projectItem.html?id=${item.id}">See Details</a>
            </div>
        </div>`
}

/* ==========================================================
 * Render function
 ========================================================= */
function renderProjects(projectList) {
    // get the element we will output the project details into
    const outputElement = document.getElementById("gallery-div")
    let galleryHTML = ""

	// use the projectTemplate function to transform our project objects into HTML strings
    for (const item of projectList) {
        const itemTemplate = projectTemplate(item)

        // Append the item HTML string to the accumulator
        galleryHTML += itemTemplate
    }

	// Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = galleryHTML 
}

/* ==========================================================
 * init function
 ========================================================= */
function init() {
    // render the projects
    renderProjects(projects)
}
init()


/* ======================================================= *\
-------------------------------------------------------------
||      Item filter / search
-------------------------------------------------------------
\* ======================================================= */

/* ==========================================================
 * search / filter func
 ========================================================= */
function searchItems() {
    let searchValue = searchBar.value.toLowerCase()

    const filteredItems = projects.filter(function(item) {
        let title = item.title.toLowerCase();
        let tags = item.tags.map(tag => tag.toLowerCase());

        // Check if searchValue is included in either name or any of the tags (case-insensitive)
        return title.includes(searchValue) || tags.some(tag => tag.includes(searchValue));
    });

    const sorted = filteredItems.sort(function(a, b) {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        if (titleA < titleB) {
            return -1
        }
        if (titleA > titleB) {
            return 1
        }
        return 0
    })

    renderProjects(sorted)
}

/* ==========================================================
 * search elements 
 ========================================================= */
const searchBar = document.getElementById("searchBar")

// Event listener for Enter key press on search bar
searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault() // Prevent default form submission
        searchItems()
    }
});

