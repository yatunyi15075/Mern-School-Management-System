// LibraryStyles.js
import styled from 'styled-components';

export const LibraryContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const AddBookForm = styled.form`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const BookList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BookItem = styled.li`
  margin-bottom: 10px;
`;

export const BookTitle = styled.span`
  font-weight: bold;
`;

export const BookAuthor = styled.span`
  margin-left: 10px;
`;

export const ActionButton = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const LibraryHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const BorrowButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
