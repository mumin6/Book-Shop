import express, { Request, Response } from 'express';
import bookRouter from './app/module/book/book.router';
import orderRouter from './app/module/orders/order.router';

const app = express();

// middleware
app.use(express.json())

app.use("/api/products",bookRouter)
app.use("/api/orders",orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Book Shop is running');
});

export default app;
