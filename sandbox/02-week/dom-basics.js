const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Random image")
document.body.appendChild(newImg);

const newSection = document.createElement("section")
newSection.innerHTML = "<h2>yolo</h2><p>this was added with js</p>"
document.body.appendChild(newSection)
