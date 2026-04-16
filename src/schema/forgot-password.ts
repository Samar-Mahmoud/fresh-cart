import * as z from "zod";

export const forgotPasswordschema = z.object({
  email: z.email("Invalid email address"),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordschema>;

export const codeVerificationSchema = z.object({
  resetCode: z.string().nonempty("Invalid Code").max(6, "Invalid Code"),
});

export type CodeVerificationData = z.infer<typeof codeVerificationSchema>;

export const resetPasswordSchema = z
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
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
