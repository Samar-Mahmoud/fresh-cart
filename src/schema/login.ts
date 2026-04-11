import * as z from "zod";

export const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string(),
  signed: z.boolean(),
});

export type LoginSchema = z.infer<typeof schema>;
