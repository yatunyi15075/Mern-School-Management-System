import { Book } from "../models/librarySchema.js";

export const createBook = async (req, res, next) => {
  const { bookname, author } = req.body;
  if (!bookname || !author ) {
    return next("Please Fill Full Form!", 400);
  }
  await Book.create({ bookname, author });
  res.status(200).json({
    success: true,
    message: "A new book is Created!",
  });
};

export const getAllBooks= async (req, res, next) => {
  const books = await Book.find();
  res.status(200).json({
    success: true,
    books,
  });
};


