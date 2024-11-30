import { Router } from 'express';
import { bookControler } from './book.controller';

const bookRouter = Router();

bookRouter.get('/:productId', bookControler.getSingleBook);
bookRouter.put('/:productId', bookControler.updateBook);
bookRouter.delete('/:productId', bookControler.deleteBook);
bookRouter.get('/', bookControler.getAllBook);
bookRouter.post('/create-book', bookControler.createBook);


export default bookRouter;
