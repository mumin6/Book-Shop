import { z } from "zod";

const bookValidationSchema = z.object({
  author: z.string().min(1, "Author is required."), 
  price: z.number().min(0, "Price must be a non-negative number."),
  title: z.string().min(1, "Title is required."),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      errorMap: () => ({
        message: "Enter a valid category. Options are: Fiction, Science, SelfDevelopment, Poetry, Religious.",
      }),
    }
  ),
  description: z.string().min(1, "Description is required."),
  quantity: z.number().int("Quantity must be an integer.").min(0, "Quantity must be non-negative."),
  inStock: z.boolean().refine((value) => typeof value === "boolean", {
    message: "InStock must be a boolean value.",
  }),
});

export default bookValidationSchema;
