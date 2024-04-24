
// An array to store my book objects

const myLibrary = [];

// Constructor for creating book objects
/*
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

};

// A method to change the read status of a book instance

Book.prototype.changeStatus = function () {
    if (this.status === "already read") {
        this.status = "not read";
    } else {
        this.status = "already read";
    }

}
*/

// Replacing the constructor with a class

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    changeStatus() {
        if (this.status === "already read") {
            this.status = "not read";
        } else {
            this.status = "already read";
        }
    }
}


// a function that takes the user's input and store the book in the myLibrary array

function addBookToLibrary(title, author, pages, status) {

    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    displayBooks();

};

// dummy books
addBookToLibrary("aa", "bb", 43, "not read");


// A function that loops through myLibrary and displays the books on the page

function displayBooks() {
    const table = document.querySelector('table');

    // before displaying the books, remove the old ones displayed
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());

    let i = -1;
    // now dislay the books present in the library
    for (const book of myLibrary) {

        const tr = document.createElement('tr');
        tr.setAttribute('class', 'row');
        tr.setAttribute('data-index', ++i);
        for (const p in book) {

            //  if (book.hasOwnProperty(p)) { } // I don't need this test when I use the class construct
            const td = document.createElement('td');
            td.textContent = book[p];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    };

    addremoveButton0();
    changeButton();

}


// add remove button function

function addremoveButton0() {
    const rows = document.querySelectorAll('.row');
    let i = -1;
    rows.forEach(r => {
        const rmbtn = document.createElement('button');
        rmbtn.textContent = 'remove';
        rmbtn.classList.add('rmv');
        rmbtn.setAttribute('data-id', ++i);
        r.appendChild(rmbtn);

    });

    const rmnz = document.querySelectorAll('.rmv');
    rmnz.forEach(r => {
        r.addEventListener('click', () => {
            let index = r.dataset.id;
            myLibrary.splice(index, 1);

            displayBooks();
        })
    })

}

// adding a button to change status

function changeButton() {
    const rows = document.querySelectorAll('.row');
    let i = -1;
    rows.forEach(row => {
        const chgBtn = document.createElement('button');
        chgBtn.classList.add('cb');
        chgBtn.setAttribute('data-id', ++i);
        chgBtn.textContent = 'change status';
        row.appendChild(chgBtn);
    })

    const cbs = document.querySelectorAll('.cb');

    cbs.forEach(a => {
        a.addEventListener("click", () => {
            const index = a.dataset.id;
            myLibrary[index].changeStatus();
            displayBooks();
        })
    })

}

// adding a book with the DOM

const addBook = document.querySelector('#add2');

addBook.addEventListener('click', () => {

    const status = document.querySelector('select').value;
    const a = [...document.querySelectorAll('input')].map(e => e.value);


    addBookToLibrary(...a, status)

    displayBooks();
    document.querySelectorAll('input').forEach(e =>
        e.value = null);
    form.style.display = 'none';
});


// displaying the form to enter the book information

const add1 = document.querySelector('#add1');
const form = document.querySelector('form');

add1.addEventListener('click', () => {
    form.style.display = 'block';
});