console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.count = 0;
  }

  addBook() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const read = document.querySelector("#checkbox");
    const insert = document.querySelector("#insert");

    const newBook = new Book(title.value, author.value, read.value);
    this.books.push(newBook);
    this.count++;

    insert.insertAdjacentHTML(
      "afterend",
      `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>
      <input
        type="checkbox"
        name="read"
        id="readLibraryCheckbox"
        checked
        disabled
      />
    </td>
  </tr>`
    );
  }
  markread(checkbox, id) {
    this.books.forEach((book) => {
      if (id == book.id) {
        book.read = true;
      }
    });
  }
}
const form = document.querySelector("#form");
const lib1 = new Library("books");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  lib1.addBook();
  form.reset();
  console.log(lib1);
});
