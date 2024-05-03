import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

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
  // Sample library data
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
  ]);

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
            <BookItem key={book.id}>
              <BookTitle>{book.title}</BookTitle>
              <p>Author: {book.author}</p>
              <BorrowButton onClick={() => handleBorrowBook(book.id)}>Borrow</BorrowButton>
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default LibrarySection;
