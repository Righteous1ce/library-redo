const library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}


// maybe this needs the prototype

// function addBook(title, author, pages, status){
    // let title = document.getElementById('title').value;
    // let author = document.getElementById('author').value;
    // let pages = document.getElementById('pages').value;
    // let status = document.getElementById('status').value;
// }


const submit = document.getElementById('submit');
const newBook = document.getElementById('new-book');

newBook.forEach(button, () => {
    button.addEventListener(click, () => {
        newBook.classList.add('active');
    })
});

submit.addEventListener('click', () => {
    console.log('hello');
});










