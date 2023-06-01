

// 2 

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages

};

let bookTitle;
let bookAuthor;



function addBookToLibrary(bookTi,bookAu) {

let myBook = new Book(bookTi,bookAu);

myLibrary.push(myBook);


}

/* ******** DOM ******* */


// 3 a loop that display the books present in the array 

let table = document.querySelector('table');
let tableRow;
let remove ;
let removes;

function displayBooks() {

    // to remove the data of the table before actualizing it

let tableDataa=document.querySelectorAll('td');
   tableDataa.forEach(a=>a.remove()); 
/*    let tableRows = document.querySelectorAll('tr');
   tableRows.forEach(a=>a.remove()); 
 */
   let i =0;

for (let book of myLibrary ) {

tableRow= document.createElement('tr');
tableRow.setAttribute('id',`i${i++}`)

remove = document.createElement('button');
remove.setAttribute('type', 'button');
remove.setAttribute('class', 'remove');
remove.textContent = 'remove book';

let tableData = document.createElement('td');
let tableData2 = document.createElement('td');

tableData.textContent = book.title;
tableData2.textContent = book.author;

table.appendChild(tableRow);

tableRow.appendChild(tableData);
tableRow.appendChild(tableData2);
tableRow.appendChild(remove);

}

removes = document.querySelectorAll('.remove');

a();
console.log(removes);
}


//4 add a button that brings up a form


let button = document.querySelector('button');

    let form = document.createElement('form');
    let bookT = document.createElement('input');
    bookT.setAttribute('id', 'bookT');

    let bookA = document.createElement('input');
    bookA.setAttribute('id', 'bookA');

let submit =document.createElement('button');
submit.setAttribute('type', 'button');
submit.textContent = 'submit';


button.addEventListener('click', function() {


document.body.appendChild(form);
    form.appendChild(bookT);
    form.appendChild(bookA);
    form.appendChild(submit);



} );


//////// after the submit button of the frm is clicked

submit.addEventListener('click', function() {

    bookTitle = document.querySelector('#bookT').value;
bookAuthor = document.querySelector('#bookA').value;

form.remove();

addBookToLibrary(bookTitle,bookAuthor);


displayBooks();


})

// remove a book

if (removes != undefined) {

    console.log(removes);



} 

function a() {
    removes.forEach(a => a.addEventListener('click', function() {

let id = tableRow.getAttribute('id');
console.log(id);

let rem = document.querySelector(`#${id}`);
rem.remove();


})
);

}






// console.log();
/* 



 */