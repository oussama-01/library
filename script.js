

// 2 

let myLibrary = [];

function Book(title, author, status) {
    this.title = title,
    this.author = author,
    this.status = status

};

// 6 toggle read status

Book.prototype.toggle = function () {

    if (this.status === 'Already read') { this.status = 'Not read'; }
    else if (this.status === 'Not read') { this.status = 'Already read'; };

}

let bookTitle;
let bookAuthor;
let bookStatus;

// a function that adds a new book to myLibrary

function addBookToLibrary(bookTi, bookAu, stat) {

    let myBook = new Book(bookTi, bookAu, stat);

    myLibrary.push(myBook);

}

/* ******** DOM ******* */


// 3 a loop that display the books present in the array 

let table = document.querySelector('table');
let tableRow;
let tableRows;
let remove;
let removes = [];
let toggle;
let toggles;

function displayBooks() {

    // to remove the rows of the table before actualizing it

    tableRows = document.querySelectorAll('.rows');
    tableRows.forEach(a => a.remove());
                    

    for (let book of myLibrary) {


        tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'rows'); // to be able to remove all the rows EXCEPT title, author

        let tableData = document.createElement('td');
        let tableData2 = document.createElement('td');
        let tableData3 = document.createElement('td');

        tableData.textContent = book.title;
        tableData2.textContent = book.author;
        tableData3.textContent = book.status;

        remove = document.createElement('button');
        remove.setAttribute('class', 'remove');
        remove.textContent = 'remove book';

        toggle = document.createElement('button');
        toggle.setAttribute('class', 'toggle');
        toggle.textContent = 'change book status';

        table.appendChild(tableRow);
        tableRow.appendChild(tableData);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(remove);
        tableRow.appendChild(toggle);

    }

    removes = document.querySelectorAll('.remove');
    toggles = document.querySelectorAll('.toggle');

    a();
    b();
}


//4 add a button that brings up a form


let newBook = document.querySelector('.newBook');

let form = document.querySelector('form');
form.style.display = 'none';


newBook.addEventListener('click', () => {

    form.style.display = 'inline-block';

});


// after the submit button of the form is clicked

const add = document.querySelector('#add');

add.addEventListener('click', () => {

    bookTitle = document.querySelector('#bookTitle').value;
    bookAuthor = document.querySelector('#bookAuthor').value;
    bookStatus = document.querySelector('#read').value;
    form.style.display = 'none';

    addBookToLibrary(bookTitle, bookAuthor, bookStatus);


    displayBooks();


    console.log(myLibrary);


});

//5 remove a book


function a() {
    removes.forEach(b => b.addEventListener('click', function () {
        // try to assign id here  for tablerow and remove buttons
        // so that every time tablerows and buttond and mylibrary indexes are synch

        let i = -1;
        tableRows = document.querySelectorAll('.rows');
        tableRows.forEach(r => {
            r.setAttribute('id', `a${++i}`);

        });

        let j = -1;
        removes = document.querySelectorAll('.remove');
        removes.forEach(re => {
            re.setAttribute('id', `b${++j}`);
        });

        let id = b.getAttribute('id')[1];


        let rem = document.querySelector(`#a${id}`);

        rem.remove();


        myLibrary.splice(id, 1);

        console.log(myLibrary);

    })
    );

}

// toggle read status 


function b() {
    toggles.forEach(to => to.addEventListener('click', () => {


        let k = -1;
        toggles = document.querySelectorAll('.toggle');
        toggles.forEach(t => t.setAttribute('data-key', `${++k}`));

        let id = to.getAttribute('data-key');
        myLibrary[id].toggle();

        console.log(id);

        displayBooks();

    })
    );
}

