"use strict";
// Assignment: Library Management System
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Typing Variables
let bookTitle = "Eishah Nadeem - An Enigmatic Paradox";
let pageCount = 300;
let isAvailable = true;
// 6. typeof
const libraryHours = {
    Monday: "9:00 AM - 5:00 PM",
    Tuesday: "9:00 AM - 5:00 PM",
    Wednesday: "9:00 AM - 5:00 PM",
    Thursday: "9:00 AM - 5:00 PM",
    Friday: "9:00 AM - 5:00 PM",
    Saturday: "10:00 AM - 2:00 PM",
    Sunday: "Closed"
};
// 8. as const
const genres = ["Fiction", "Non-fiction", "Science", "History"];
// 10. Generics
class Shelf {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
}
// Assignment Tasks:
// 1. Create a function that takes an AuthoredBook and returns a formatted string
//    Use template literals to format the output
function ret_string(Auth_book) {
    const text = "----QUESTION 1------";
    console.log(text);
    const a = 'the name of author is ' + Auth_book.name + "\nthe title of book is " + Auth_book.title +
        "\nthe birth year of author is " + Auth_book.birthYear + "\n the publication year is " + Auth_book.publicationYear;
    console.log(a);
    return a;
}
const a = {
    name: "eishah",
    birthYear: 2004,
    title: "the light we unsee",
    publicationYear: 2011
};
const b = {
    title: "the fault in them",
    publicationYear: 1983
};
ret_string(a);
// 2. Implement a function that takes a Library and returns its keys as an array
const library1 = [{
        name: "city library",
        foundationYear: 2003
    },
    {
        name: "Cetral library",
        foundationYear: 1978
    }
];
function lib(libr) {
    const a = [[libr.name, libr.foundationYear]];
    const text = "----QUESTION 2------";
    console.log(text);
    console.log(a);
    return a;
}
lib(library1[0]);
// 3. Create a function that adds a new day to the libraryHours object
//    The function should maintain type safety
function add_day(your_day, start_time, end_time) {
    // const nnew:LibrarySchedule=libraryHours extends 
    const your_time = start_time + ":00 AM -" + end_time + ":00 PM";
    const new_obj = Object.assign(Object.assign({}, libraryHours), { [your_day]: your_time //[your_day] this will give the string we sent
     });
    const text = "----QUESTION 3------";
    console.log(text);
    console.log(new_obj);
    return new_obj;
}
add_day("new_day", 9, 5);
// 4. Implement a function that adds a book to the BookCollection
//    Ensure that the ISBN is a valid string format (e.g., XXX-XXXXXXXXXX)
function test_isbn(isbn) {
    const corr_isbn = /^[0-9]{3}-[0-9]{10}$/;
    if (corr_isbn.test(isbn)) {
        return isbn;
    }
    //  else{
    //   const text="isbn format is wrong"
    //   console.log(text)
    //   return text
    //  }
}
const books = {};
function add_book(y_isbn, title, author, copies) {
    if (test_isbn(y_isbn)) {
        books[y_isbn] = { title, author, copies };
        console.log("book added successfully");
    }
    else {
        const text = "isbn format is wrong, BOOK NOT ADDED";
        console.log(text);
    }
    console.log(books);
    return books;
}
const text = "----QUESTION 4------";
console.log(text);
add_book("123-456789", "matilda", "roald dhal", 78);
add_book("123-4567890989", "THE SECRET GARDEN", "roald dhal", 45);
add_book("438-847493759475", "to kill a mocking bird", "harper lee", 23);
// 5. Create a function that takes a Genre and returns a boolean indicating
//    whether it's a fiction genre or not
function genre_check(your_genre) {
    if (your_genre === genres[0]) {
        console.log("it is fiction\n");
        console.log(true);
        return true;
    }
    else if (your_genre === genres[1]) {
        console.log("it is not fiction\n");
        console.log(false);
        return false;
    }
    else {
        console.log("it is  neither fiction nor non-fiction\n");
        console.log(false);
        return false;
    }
}
const text4 = "----QUESTION 5 (checking genre)------";
console.log(text4);
genre_check("Fiction");
genre_check("Non-fiction");
const obj1 = new Shelf();
const obj2 = new Shelf();
console.log("---QUESTION 6------");
console.log("shelf of authors: ");
obj1.addItem({ name: "roald dhal", birthYear: 1992 });
obj1.addItem({ name: "harper lee", birthYear: 1984 });
obj1.addItem({ name: "jane austen", birthYear: 1893 });
obj1.addItem({ name: "michelle", birthYear: 2000 });
console.log(obj1.getItem(0));
console.log(obj1.getItem(1));
console.log(obj1.getItem(2));
console.log(obj1.getItem(3));
console.log("shelf of books: ");
obj2.addItem({ title: "To kill a mocking bird", publicationYear: 2021 });
obj2.addItem({ title: "matilda", publicationYear: 1999 });
obj2.addItem({ title: "The Alchemist", publicationYear: 1982 });
obj2.addItem({ title: "the secret garden", publicationYear: 2001 });
console.log(obj2.getItem(0));
console.log(obj2.getItem(1));
console.log(obj2.getItem(2));
console.log(obj2.getItem(3));
// 7. Create a function that takes a BookRecord tuple and returns an object
//    with named properties
console.log("\n----QUESTION 7-----");
function book_properties(book_record) {
    const [title, author, copies, format] = book_record;
    const record = {
        title,
        author,
        copies,
        format
    };
    console.log(record);
    return record;
}
book_properties(["the light we unsee", "Eishah Nadeem", 34, "E-book"]);
// 8. Implement a generic function that swaps the positions of two items in an array
function swapping(array1, item1, item2) {
    const index1 = array1.findIndex(item => item === item1);
    const index2 = array1.findIndex(item => item === item2);
    console.log(index1);
    const temp = array1[index1]; //stored item1 value in a temp var
    array1[index1] = array1[index2]; //placed 2nd value there
    array1[index2] = temp; //placed 1st value at index of 2nd
    console.log(array1);
    return array1;
}
const array = [1, 2, "eishah", "amna"];
console.log("----QUESTION 8-----");
swapping(array, "eishah", "amna");
// 9. Create a type guard function to check if an object is of type Author
function guard_func(obj) {
    if (typeof obj.name === 'string' && typeof obj.birthYear === "number") {
        console.log("yes, it is of type author");
        console.log(true);
        return true;
    }
    else {
        console.log("no it is not of type author");
        console.log(false);
        return false;
    }
}
const checkk = {
    name: "eishah",
    birthYear: 3003
};
const objj = {
    title: "dskks",
    publicationYear: 94993
};
console.log("-----QUESTION 9-------");
console.log("checking book obj");
guard_func(objj);
console.log("checking author obj");
guard_func(checkk);
// 10. Implement a function that merges two objects of the same type
//     Use generics to ensure type safety
function merge_obj(obj1, obj2) {
    if (typeof obj1 === typeof obj2) {
        console.log("both obj have same type");
        const new_obj = Object.assign(Object.assign({}, obj1), obj2);
        console.log(new_obj);
        return new_obj;
    }
    else {
        console.log("cannot be merged, donot have same types");
    }
}
const test_obj1 = {
    name: "inaya",
    birthYear: 2013
};
const test_obj2 = {
    name: "sarah",
    birthYear: 2008
};
const test_obj3 = {
    title: "testinggg",
    publicationYear: 1989
};
console.log("------QUESTION 10------");
merge_obj(test_obj1, test_obj2);
console.log("\n\n");
merge_obj(test_obj3, test_obj2);
//# sourceMappingURL=main.js.map