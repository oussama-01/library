

// 2 

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages

};

let bookTitle;
let bookAuthor;
let table = document.querySelector('table');


function addBookToLibrary(bookTi,bookAu) {

let myBook = new Book(bookTi,bookAu);

myLibrary.push(myBook);


}

/* ******** DOM ******* */


// 3 a loop that display the books present in the array 

function displayBooks() {

/*    let tableDataa=document.querySelectorAll('td');
   tableDataa.forEach(a=>a.remove()); */

for (let book of myLibrary ) {


let tableRow= document.createElement('tr');
let tableData = document.createElement('td');
let tableData2 = document.createElement('td');


tableData.textContent = book.title;
tableData2.textContent = book.author;

table.appendChild(tableRow);
tableRow.appendChild(tableData);
tableRow.appendChild(tableData2);



}

}



//4 add a button


let button = document.querySelector('button');


button.addEventListener('click', function() {

bookTitle = document.querySelector('#bookT').value;
bookAuthor = document.querySelector('#bookA').value;


addBookToLibrary(bookTitle,bookAuthor);

displayBooks();

} );




// console.log();
/* 



 */