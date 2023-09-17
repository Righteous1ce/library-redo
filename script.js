const library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}


function addBookToLibrary(){

    const book = new Book (
        document.querySelector('.title').value,
        document.querySelector('.author').value,
        document.querySelector('.pages').value,
        document.querySelector('input[name="reading-status"]:checked').value

    );
    library.push(book);
    

    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent += book.title;
    card.textContent += book.author;
    card.textContent += book.pages;
    card.textContent += book.status;

    document.getElementById('cards').appendChild(card);
    
       
}






const submitBtn = document.getElementById('submit');
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


submitBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    addBookToLibrary();
    closeModal(modal);
    
    
});

console.log(library);


function closeModal(modal){
    modal.classList.remove('active');
    backdrop.classList.remove('active');
};

function openModal(modal){
    modal.classList.add('active');
    backdrop.classList.add('active');
};




 
 
 











