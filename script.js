let library = [];
function Book(name, author, genre){
    this.name = name;
    this.author = author;
    this.genre = genre;
}

function addBookToLibrary(name, author, genre) {
    library.push(new Book(name, author, genre));
}

addBookToLibrary("hi","hello","fiction");
addBookToLibrary("hi2","hello","fiction");
addBookToLibrary("hi3","hello","fiction");

function displaybook(){
    console.log(library);
}
