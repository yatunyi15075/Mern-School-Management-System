import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import axios from 'axios';

const LibraryContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const LibraryHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const BookTitle = styled.h3`
  margin-bottom: 10px;
`;

const BorrowButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LibrarySection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/library/getall');
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBorrowBook = (id) => {
    // Implement borrow book functionality here
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList>
          {books.map((book) => (
            <BookItem key={book._id}>
              <BookTitle>{book.bookname}</BookTitle>
              <p>Author: {book.author}</p>
              <BorrowButton onClick={() => handleBorrowBook(book._id)}>Borrow</BorrowButton>
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default LibrarySection;
