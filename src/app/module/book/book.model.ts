import { model, Schema } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>({
  author: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  category: {
    type: String,
    enum: {
      values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      message: '{value} is not valid. Enter valid category',
    },
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

bookSchema.set('timestamps', true);

// bookSchema.post("save", async function(this,next){
//   this.findOneAndUpdate((element:IBook) => {
//     if(element.quantity<=0){
//      return element.inStock=false
//     }
//   });
//   next()
// })

const Book = model<IBook>('Book', bookSchema);
export default Book;
