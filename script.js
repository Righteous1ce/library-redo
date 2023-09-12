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
const openModalBtn = document.getElementById('new-book');
const closeModalBtn = document.getElementById('cancel');

openModalBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    openModal(modal);
});

closeModalBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    closeModal(modal);
})


function closeModal(modal){
    modal.classList.remove('active');
    backdrop.classList.remove('active');
}
function openModal(modal){
    modal.classList.add('active');
    backdrop.classList.add('active');
};




 
 
 
submit.addEventListener('click', () => {
    addNewBook();
    newBook.classList.remove('active');
});










