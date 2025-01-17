import { IBook } from './book.interface';
import Book from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};

const getAllBook = async () => {
  const result = await Book.find();
  return result;
};
const getSingleBook = async (productId: string) => {
  const result = await Book.findById(productId);
  return result;
};
const updateBook = async (productId: string, data: IBook) => {
  const result = await Book.findByIdAndUpdate(productId, data, { new: true });
  return result;
};
const deleteBook = async (productId: string) => {
  const result = await Book.findByIdAndDelete(productId);
  return result;
};
export const bookService = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteBook,
  updateBook,
};
