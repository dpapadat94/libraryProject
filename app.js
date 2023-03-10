console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

///////////////////////////////////
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
    const read = document.querySelector("#checkbox1");
    const insert = document.querySelector("#insert");
    const form = document.querySelector("form");
    const newBook = new Book(title.value, author.value, read.value);
    this.books.push(newBook);

    this.count++;
    if (document.querySelector("#checkbox1").checked == false) {
      insert.insertAdjacentHTML(
        "afterend",
        `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>
      <input
        type="checkbox"
        name="read"
        id="checkbox"
        disabled
        />
    </td>
  </tr>`
      );
    } else if (document.querySelector("#checkbox1").checked == true) {
      insert.insertAdjacentHTML(
        "afterend",
        `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>
      <input
        type="checkbox"
        name="read"
        id="checkbox"
        checked
        disabled
        />
    </td>
  </tr>`
      );
    }
  }
  markread(checkbox, id) {
    this.books.forEach((book) => {
      if (book.id === id) {
        book.read = "true";
      } else {
        book.read = "false";
      }
    });
  }
}
const form = document.querySelector("#form");
const lib1 = new Library("books");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  lib1.addBook();
  lib1.markread();
  form.reset();

  console.log(lib1);
});
