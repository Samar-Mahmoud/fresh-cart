import * as z from "zod";

export const schema = z.object({
  city: z.string().min(2, "City name must be at least 2 characters"),
  details: z.string().min(10, "Address details must be at least 10 characters"),
  phone: z
    .string()
    .regex(
      /^(\+20|0020|0)?1[0125]\d{8}$/,
      "Please enter a valid Egyptian phone number",
    ),
  name: z.string().optional(),
});

export type AddressData = z.infer<typeof schema>;
