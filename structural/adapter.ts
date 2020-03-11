interface ModernLibrary {
  getBook(title: string): string;
}

class LegacyLibrary {
  getBookFromLegacySystem(isbn: number): string {
    // Implementation for retrieving books from a legacy system
    return "Book content";
  }
}

class LegacyLibraryAdapter implements ModernLibrary {
  private legacyLibrary: LegacyLibrary;

  constructor(legacyLibrary: LegacyLibrary) {
    this.legacyLibrary = legacyLibrary;
  }

  getBook(title: string): string {
    // Assuming you have a way to map titles to ISBNs
    const isbn = this.mapToIsbn(title);
    return this.legacyLibrary.getBookFromLegacySystem(isbn);
  }

  private mapToIsbn(title: string): number {
    // Implementation for mapping titles to ISBNs
    return 1234567890;
  }
}

// Usage
const legacyLibrary = new LegacyLibrary();
const adapter = new LegacyLibraryAdapter(legacyLibrary);

const bookContent = adapter.getBook("The Great Gatsby");
console.log(bookContent);
