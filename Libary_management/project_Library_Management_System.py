import random

# Book class
class Book:
    def __init__(self, name, author):
        self.name = name.title()
        self.author = author.title()
        self.is_available = True

    def borrow_book(self):
        self.is_available = False

    def return_book(self):
        self.is_available = True


# Person class
class Person:
    def __init__(self, name):
        self.name = name


# Member class
class Member(Person):
    def __init__(self, person_name, member_id):
        super().__init__(person_name)
        self.member_id = member_id
        self.borrowed_books = []

    def borrow_book(self, book):
        if book.is_available:
            self.borrowed_books.append(book)
            book.borrow_book()
            print(f"Book '{book.name}' borrowed by {self.name}.")
            save_borrowing_info(self.name, self.member_id, book.name)
        else:
            print(f"Sorry, '{book.name}' is not available.")

    def return_book(self, book):
        if book in self.borrowed_books:
            self.borrowed_books.remove(book)
            book.return_book()
            print(f"Book '{book.name}' returned by {self.name}.")
            save_return_info(self.name, self.member_id, book.name)
        else:
            print(f"'{book.name}' was not borrowed by {self.name}.")


# Library class
class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def add_book(self, name, author):
        book = Book(name, author)
        self.books.append(book)
        print(f"New book '{name}' by {author} is now available.")
        save_book_info(name, author)

    def add_member(self, name):
        member_id = random.randint(1000302126, 1000999668)
        member = Member(name, member_id)
        self.members.append(member)
        print(f"Member added: {name}, Member ID: {member_id}")

    def find_book(self, title):
        title = title.lower()
        found_books = []

        # Search in the current list of books
        for book in self.books:
            if title in book.name.lower():
                status = "Available" if book.is_available else "Not Available"
                found_books.append((book.name, book.author, status))

        # Search in the books.txt file
        try:
            with open("books.txt", "r") as file:
                for line in file:
                    if title in line.lower():
                        # Extract book details from the line
                        parts = line.strip().split(", ")
                        book_name = parts[0].split(": ")[1]
                        book_author = parts[1].split(": ")[1]
                        found_books.append((book_name, book_author, "Unknown"))  # Status unknown for file entries
        except FileNotFoundError:
            print("No books file found. Adding books to the library will create one.")

        # Display found books
        if found_books:
            print("Found Books:")
            for book in found_books:
                print(f"Title: {book[0]}, Author: {book[1]}, Status: {book[2]}")
        else:
            print(f"No book found with title: '{title}'")

    def borrow_book(self, member_name, book_title):
        member = next((m for m in self.members if m.name.lower() == member_name.lower()), None)
        book = next((b for b in self.books if b.name.lower() == book_title.lower()), None)

        if not member:
            print(f"Member '{member_name}' not found.")
            return
        if not book:
            print(f"Book '{book_title}' not found.")
            return

        member.borrow_book(book)

    def return_book(self, member_name, book_title):
        member = next((m for m in self.members if m.name.lower() == member_name.lower()), None)
        book = next((b for b in self.books if b.name.lower() == book_title.lower()), None)

        if not member:
            print(f"Member '{member_name}' not found.")
            return
        if not book:
            print(f"Book '{book_title}' not found.")
            return

        member.return_book(book)

    def display_books(self):
        if not self.books:
            print("No books available in the library.")
        else:
            print("Library Books:")
            for book in self.books:
                status = "Available" if book.is_available else "Not Available"
                print(f"Title: {book.name}, Author: {book.author}, Status: {status}")


# Function to save book information to a file
def save_book_info(name, author):
    with open("./books.txt", "a") as file:
        file.write(f"Title: {name}, Author: {author}\n")


# Function to save borrowing information to a file
def save_borrowing_info(member_name, member_id, book_title):
    with open("borrowing_records.txt", "a") as file:
        file.write(f"Member Name: {member_name}, Member ID: {member_id}, Book Title: {book_title}\n")


# Function to save return information to a file
def save_return_info(member_name, member_id, book_title):
    with open("return_records.txt", "a") as file:
        file.write(f"Member Name: {member_name}, Member ID: {member_id}, Book Title: {book_title}\n")


def main():
    library = Library()

    while True:
        print("\nLibrary Management System")
        print("1. Add Book")
        print("2. Add Member")
        print("3. Search Book")
        print("4. Borrow Book")
        print("5. Return Book")
        print("6. Display Books")
        print("7. Exit")

        choice = input("Enter choice: ").strip()

        if choice == "1":
            title = input("Enter book title: ").strip().title()
            author = input("Enter book author: ").strip().title()
            library.add_book(title, author)

        elif choice == "2":
            name = input("Enter member name: ").strip().title()
            library.add_member(name)

        elif choice == "3":
            title = input("Enter book title to search: ").strip()
            library.find_book(title)

        elif choice == "4":
            member_name = input("Enter member name: ").strip()
            book_title = input("Enter book title: ").strip()
            library.borrow_book(member_name, book_title)

        elif choice == "5":
            member_name = input("Enter member name: ").strip()
            book_title = input("Enter book title: ").strip()
            library.return_book(member_name, book_title)

        elif choice == "6":
            library.display_books()

        elif choice == "7":
            print("Exiting Library System. Goodbye!")
            break

        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()