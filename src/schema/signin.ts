import * as z from "zod";

export const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string(),
  signed: z.boolean().optional(),
});

export type SignInData = z.infer<typeof schema>;
