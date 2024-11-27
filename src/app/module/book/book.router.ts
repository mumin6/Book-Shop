import { Router } from "express";
import { bookControler } from "./book.controller";

const bookRouter=Router()
bookRouter.post('/create-book',bookControler.createBook)
bookRouter.get('/get-books',bookControler.getAllBook)

export default bookRouter