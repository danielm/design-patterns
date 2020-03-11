interface Book {
  title: string;
  author: string;
}

class BookCollection {
  private books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  [Symbol.iterator](): Iterator<Book> {
    let index = 0;
    return {
      next: () => {
        if (index < this.books.length) {
          return { value: this.books[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// Usage
const books = new BookCollection([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
]);

for (const book of books) {
  console.log(book.title);
}
