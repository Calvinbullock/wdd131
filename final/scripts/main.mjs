import recipes from './recipes.mjs';

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
 * Create and return a rating template
 ========================================================= */
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`

    for (let i = 1; i < 6; i++) {
        html += `\n`
        if (i >= rating) {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
    }
	html += `\n</span>`

	return html
}

/* ==========================================================
 * Create a template
 ========================================================= */
function recipeTemplate(recipe) {
    return  `
        <div class="recipe-card">
            <div class="recipe-img-div">
                <img class="recipe-img" src="${recipe.image}" alt="${recipes.description}">
            </div>
                <div class="recipe-details">
                <div class="recipe-tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                    <h2 class="recipe-name">${recipe.name}</h2>
                    <span
                        class="rating"
                        role="img"
                        aria-label="Rating: 4 out of 5 stars"
                    >
                    ${ratingTemplate(recipe.rating)}
                    <p class="desc">
                        ${recipe.description}
                    </p>
                </span>
            </div>
        </div>`
}

/* ==========================================================
 * Get and return and random recipe number
 ========================================================= */
function getRandRecipe() {
    let randInt = Math.floor(Math.random()* recipes.length)
    return (recipes[randInt])
}

/* ==========================================================
 * Render function
 ========================================================= */
function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const outputElement = document.getElementById("recipe-div")
    let recipeHtml = ""

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    for (const recipe of recipeList) {
        const recipeString = recipeTemplate(recipe)

        // Append the recipe HTML string to the accumulator
        recipeHtml += recipeString
    }

	// Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = recipeHtml
}

/* ==========================================================
 * init function
 ========================================================= */
function init() {
    // get a random recipe
    const recipe = getRandRecipe(recipes)

    // render the recipe with renderRecipes.
    renderRecipes([recipe])
}
init()

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


