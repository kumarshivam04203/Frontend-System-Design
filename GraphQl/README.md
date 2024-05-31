#### Requirement

// Structure
books {
    id,
    title,
    published_year,
    author,
},

author {
    id,
    name,
    books[],
}

//Data 
list of books
list of author
list of books with author details
list of author with book details