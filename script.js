const library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}


function addBookToLibrary(){

}


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










