import * as z from "zod";

export const schema = z.object({
  review: z.string().min(1, "Review cannot be empty."),
  rating: z.number("Please select a rating.").min(0).max(5),
});

export type ReviewData = z.infer<typeof schema>;
