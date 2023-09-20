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

    const titleElement = document.createElement('h1');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = 'By, ' + book.author;
    authorElement.classList.add('author-info');

    const pagesElement = document.createElement('p');
    pagesElement.textContent = 'Book Length: ' + book.pages + ', pages';
    pagesElement.classList.add('pages-info');

    const statusElement = document.createElement('p');
    statusElement.textContent = 'Reading Status: ' + book.status;
    statusElement.classList.add('status-info');

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Change Status'
    editBtn.classList.add('change-status-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('delete-btn');


    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(statusElement);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    document.getElementById('cards').appendChild(card);

    card.setAttribute('data-status', book.status);

    deleteBtn.addEventListener('click', () => {
        card.classList.remove('card');
        card.innerHTML = '';
    });

    editBtn.addEventListener('click', () => {
        const currentStatus = card.getAttribute('data-status', book.status);
        newStatus = currentStatus === 'Finished' ? 'In Progress' : 'Finished';

        card.setAttribute('data-status', newStatus);
        const statusElement = card.querySelector('.status-info');
        statusElement.textContent = 'Reading Status: ' + newStatus;
        
    });
     
};





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



function closeModal(modal){
    modal.classList.remove('active');
    backdrop.classList.remove('active');
};

function openModal(modal){
    modal.classList.add('active');
    backdrop.classList.add('active');
};

