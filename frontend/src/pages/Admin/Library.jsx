import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const LibraryContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Library = () => {
  // State for managing book records
  const [books, setBooks] = useState([]);

  // Function to add a new book
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // Function to handle when a student picks a book
  const handleBookPick = (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  // Function to handle when a student returns a book
  const handleBookReturn = (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <h1>Library Management</h1>
        {/* Add Book Form */}
        <form onSubmit={(e) => {
          e.preventDefault();
          const book = {
            id: Math.random().toString(36).substr(2, 9), // Generate random ID
            title: e.target.title.value,
            author: e.target.author.value,
            type: e.target.type.value,
          };
          addBook(book);
          e.target.reset();
        }}>
          <h2>Add New Book</h2>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" required />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" required />
          <label htmlFor="type">Type:</label>
          <select id="type" required>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
          </select>
          <button type="submit">Add Book</button>
        </form>

        {/* List of Books */}
        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} ({book.type})
              <button onClick={() => handleBookPick(book.id, 'student123')}>Pick</button>
              <button onClick={() => handleBookReturn(book.id, 'student123')}>Return</button>
            </li>
          ))}
        </ul>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
