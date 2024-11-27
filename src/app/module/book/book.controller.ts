import { Request, Response } from 'express';
import { bookService } from './book.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await bookService.createBook(payload);
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
      data: result,
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
    const result = await bookService.getSingleBook();

    res.send({
      message: 'Book retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to retrieve Books',
      success: false,
      error,
    });
  }
};

export const bookControler = {
  createBook,
  getAllBook,
};
