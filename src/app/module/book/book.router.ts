import { Router } from 'express';
import { bookController } from './book.controller';

const bookRouter = Router();

bookRouter.get('/:productId', bookController.getSingleBook);
bookRouter.put('/:productId', bookController.updateBook);
bookRouter.delete('/:productId', bookController.deleteBook);
bookRouter.get('/', bookController.getAllBook);
bookRouter.post('/create-book', bookController.createBook);

export default bookRouter;
