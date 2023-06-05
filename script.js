

// 2 

let myLibrary = [];

function Book(title, author, ztatuz) {
    this.title = title,
    this.author = author,
    this.ztatuz = ztatuz



};

let bookTitle;
let bookAuthor;
let booKZtatuz;

// a function that adds a new book to myLibrary

function addBookToLibrary(bookTi,bookAu,ztat) {

    let myBook = new Book(bookTi,bookAu, ztat);

    myLibrary.push(myBook);


}

/* ******** DOM ******* */


// 3 a loop that display the books present in the array 

let table = document.querySelector('table');
let tableRow;
let tableRows
let remove  ;
let removes =[];
let toggle;


function displayBooks() {

    // to remove the rows of the table before actualizing it

    tableRows = document.querySelectorAll('.rows');
    tableRows.forEach(a => a.remove()); 


for (let book of myLibrary ) {

 
tableRow= document.createElement('tr');
tableRow.setAttribute('class','rows'); // to be able to remove all the rows EXCEPT title, author

let tableData = document.createElement('td');
let tableData2 = document.createElement('td');
let tableData3 = document.createElement('td');

tableData.textContent = book.title;
tableData2.textContent = book.author;
tableData3.textContent = book.ztatuz;

remove = document.createElement('button');
remove.setAttribute('type', 'button');
remove.setAttribute('class', 'remove' );
remove.textContent = 'remove book';

toggle = document.createElement('button');
toggle.setAttribute('type', 'button');
toggle.textContent = 'change book ztatuz';

table.appendChild(tableRow);
tableRow.appendChild(tableData);
tableRow.appendChild(tableData2);
tableRow.appendChild(tableData3);
tableRow.appendChild(remove);
tableRow.appendChild(toggle);

}

removes = document.querySelectorAll('.remove');

//console.log();

a();
}


//4 add a button that brings up a form


let newBook = document.querySelector('.newBook');

    let form = document.createElement('form');
    let bookT = document.createElement('input');
    bookT.setAttribute('id', 'bookT');

    let bookA = document.createElement('input');
    bookA.setAttribute('id', 'bookA');

    let bookZ = document.createElement('input');
    bookZ.setAttribute('id','bookZ');

    let submit =document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.textContent = 'submit';


newBook.addEventListener('click', () => {


    document.body.appendChild(form);
    form.appendChild(bookT);
    form.appendChild(bookA);
    form.appendChild(bookZ);
    form.appendChild(submit);



} );


//////// after the submit button of the form is clicked

submit.addEventListener('click', () => {

    bookTitle = document.querySelector('#bookT').value;
    bookAuthor = document.querySelector('#bookA').value;
    booKZtatuz = document.querySelector('#bookZ').value;

form.remove();

addBookToLibrary(bookTitle,bookAuthor,booKZtatuz);

displayBooks();

console.log(myLibrary);  


});

//5 remove a book


function a() {
   removes.forEach(b => b.addEventListener('click', function() {
// try to assign id here  for tablerow and remove buttons
// so that every time tablerows and buttond and mylibrary indexes are synch

let i=-1;
tableRows = document.querySelectorAll('.rows');
tableRows.forEach(r => {
r.setAttribute('id', `a${++i}`);

} );

let j = -1;
removes= document.querySelectorAll('.remove');
removes.forEach(re => {
    re.setAttribute('id', `b${++j}`);
});

let id = b.getAttribute('id')[1];


let rem = document.querySelector(`#a${id}`);

rem.remove();


 myLibrary.splice(id,1);

console.log(myLibrary);  

        })  
);
}

//toggle read ztatuz








// console.log();
/* 



 */