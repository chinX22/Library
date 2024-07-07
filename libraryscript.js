const myForm = document.querySelector("form");

let title, author, num_pages, has_read, descript;

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    dialog.close();
    title = myForm.elements['title'].value;
    author = myForm.elements['author'].value;
    num_pages = myForm.elements['num_pages'].value;
    has_read = myForm.elements['has_read'].value;
    descript = myForm.elements['description'].value;
    addBookToLibrary();
    myForm.reset();
 } );

const dialog = document.querySelector("dialog");

const newButton = document.querySelector("#newButton");
newButton.addEventListener("click", () => { dialog.showModal(); } );

const cancelButton = document.querySelector("#cancelButton");
cancelButton.addEventListener("click", () => { dialog.close(); } );

const shelf = document.querySelector(".container");

const myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.has_read = (has_read == "on") ? "Yes" : "No";
  this.descript = descript;
}

function addBookToLibrary() {
    let newBook = new Book();
    console.log(newBook);
    myLibrary.push(newBook);
    for (fresh of myLibrary){
        let newdiv = document.createElement("div");
        newdiv.className = "book";

        let title_element = document.createElement("h2");
        title_element.className = "title";
        title_element.appendChild(document.createTextNode("Title: " + fresh.title));
        newdiv.appendChild(title_element);

        let author_element = document.createElement("h3");
        author_element.className = "author";
        author_element.appendChild(document.createTextNode("Author: " + fresh.author));
        newdiv.appendChild(author_element);

        let num_pages_element = document.createElement("p");
        num_pages_element.className = "numpages";
        num_pages_element.appendChild(document.createTextNode("Number of Pages: " + fresh.num_pages));
        newdiv.appendChild(num_pages_element);

        let has_read_element = document.createElement("p");
        has_read_element.className = "read";
        has_read_element.appendChild(document.createTextNode("Have Read?: " + fresh.has_read));
        newdiv.appendChild(has_read_element);

        if(fresh.descript != ""){
        let description_element = document.createElement("p");
        description_element.className = "whatever";
        description_element.appendChild(document.createTextNode("Notes: " + fresh.descript));
        newdiv.appendChild(description_element);}

        shelf.appendChild(newdiv);
    }
}