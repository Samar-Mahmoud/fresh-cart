import * as z from "zod";

export const schema = z.object({
  name: z.string().min(2, "Name is too short").optional(),
  email: z.email("Invalid email address").optional(),
  phone: z
    .string()
    .regex(
      /^(\+20|0020|0)?1[0125]\d{8}$/,
      "Only Egyptian phone numbers are allowed",
    )
    .optional(),
});

export type UserData = z.infer<typeof schema>;

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    rePassword: z.string(),
    currentPassword: z.string().nonempty("Current password is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type PasswordT = z.infer<typeof passwordSchema>;
