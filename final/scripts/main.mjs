
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
    return  `
        <div class="item-card">
            <div class="item-img-div">
                <a href="./projectItem.html?id=${item.id}"><img class="item-img" src="${item.heroImage}" alt="${item.altText}"></a>
            </div>
                <div class="item-details">
                <div class="item-tags">
                    ${tagsTemplate(item.tags)}
                </div>
                    <h2 class="item-name">${item.title}</h2>
                    <p class="desc">
                        ${item.desc}
                    </p>
                </span>
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

// TODO  change this to work with the new json objects
// TODO  change this to work with the new json objects
// TODO  change this to work with the new json objects
// TODO  change this to work with the new json objects
// TODO  change this to work with the new json objects
// TODO  change this to work with the new json objects

/* ==========================================================
 * search / filter func
 ========================================================= */
function searchRecipes() {
    let searchValue = searchBar.value.toLowerCase()

    const filteredRecipes = recipes.filter(function(recipe) {
        let name = recipe.name.toLowerCase();
        let tags = recipe.tags.map(tag => tag.toLowerCase());

        // Check if searchValue is included in either name or any of the tags (case-insensitive)
        return name.includes(searchValue) || tags.some(tag => tag.includes(searchValue));
    });

    const sorted = filteredRecipes.sort(function(a, b) {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    })

    renderRecipes(sorted)
}

/* ==========================================================
 * search elements 
 ========================================================= */
const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", searchRecipes)

// Event listener for Enter key press on search bar
searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault() // Prevent default form submission
        searchRecipes()
    }
});

