import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import axios from 'axios';

const LibraryContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/library/getall');
      console.log('Response data:', response.data); // Log the response data
      setBooks(response.data.books); // Update to access books array from response.data
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/library', {
        bookname: book.title,
        author: book.author,
      });
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };
  
  const handleBookPick = async (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  const handleBookReturn = async (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <h1>Library Management</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              id: Math.random().toString(36).substr(2, 9),
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2>Add New Book</h2>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" required />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" required />
          <button type="submit">Add Book</button>
        </form>

        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book._id}> {/* Update key to use _id */}
              {book.bookname} by {book.author} {/* Update property names */}
              <button onClick={() => handleBookPick(book._id, 'student123')}>Pick</button>
              <button onClick={() => handleBookReturn(book._id, 'student123')}>Return</button>
            </li>
          ))}
        </ul>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
