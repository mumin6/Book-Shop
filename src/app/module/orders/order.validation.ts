import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address.") // Validates email format
    .min(1, "Email is required."), // Ensures it's not empty
  product: z.string().min(1, "Product is required."), // Ensures product name is not empty
  quantity: z
    .number()
    .int("Quantity must be an integer.") // Ensures it's an integer
    .min(1, "Quantity must be at least 1."), // Quantity must be positive
  totalPrice: z
    .number()
    .min(0, "Total price must be a non-negative number."), // Prevents negative prices
});

export default orderValidationSchema;
