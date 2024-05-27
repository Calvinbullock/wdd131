const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
        'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
        'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
        'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
]

function createBookcard(i) {
    return`<div class="book-card">
                    <div class="book-div">
                        <h1>${articles[i].title}</h1>
                        <img src="${articles[i].imgSrc}" alt="${articles[i].imgAlt}">
                        <p>
                            ${articles[i].description}
                        </p>
                        <a href="">Read More ...</a>
                    </div>

                    <div class="date-div">
                        <p>date: ${articles[i].date}</p>
                        <p>age: ${articles[1].ages}</p>
                        <p>genre: ${articles[i].genre}</p>
                        <p>${articles[i].stars}p>
                    </div>
                </div>`;
}

function instertBookcard() {
    const cardSection = document.getElementById("content-sec");

    for (let i = 0; i <= articles.length; i++) {
        cardSection.insertAdjacentHTML("afterbegin", createBookcard(i));
    }
}

instertBookcard();
