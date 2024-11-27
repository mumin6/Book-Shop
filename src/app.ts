import express, { Request, Response } from 'express';
import bookRouter from './app/module/book/book.router';

const app = express();

// middleware
app.use(express.json())

app.use("/api/products",bookRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!');
});

export default app;
