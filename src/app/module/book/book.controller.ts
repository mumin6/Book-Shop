import { Request, Response } from 'express';
import { bookService } from './book.service';
import bookValidationSchema from './book.validation';

const createBook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodValidatedBook=bookValidationSchema.parse(payload)
    const result = await bookService.createBook(zodValidatedBook);
    res.json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to create Book',
      success: false,
      error,
    });
  }
};
const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await bookService.getAllBook();

    res.send({
      message: 'Books retrieved successfully',
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to retrieve Books',
      success: false,
      error,
    });
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.productId;
    const result = await bookService.getSingleBook(bookId);

    res.send({
      message: 'Book retrieved successfully',
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to retrieve Books',
      success: false,
      error,
    });
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.productId;
    const body = req.body;
    const result = await bookService.updateBook(bookId, body);

    res.send({
      message: 'Book updated successfully',
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to update Book',
      success: false,
      error,
    });
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.productId;
    await bookService.deleteBook(bookId);

    res.send({
      message: 'Book deleted successfully',
      status: true,
      result: {},
    });
  } catch (error) {
    res.json({
      message: 'Failed to delete Book',
      success: false,
      error,
    });
  }
};

export const bookControler = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
