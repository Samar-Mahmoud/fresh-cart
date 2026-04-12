import * as z from "zod";

export const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string(),
  signed: z.boolean().optional(),
});

export type LoginData = z.infer<typeof schema>;
