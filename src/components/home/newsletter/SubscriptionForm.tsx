import { Input } from "@/components/ui";
import Form from "next/form";
import SubmitButton from "./SubmitButton";

export default function SubscriptionForm() {
  return (
    <Form className="space-y-3" action="">
      <div className="grid grid-cols-12 gap-3 px-1">
        <Input
          required
          type="email"
          placeholder="you@example.com"
          className="col-span-12 lg:col-span-8 xl:col-span-9 px-5 py-4.5 rounded-2xl h-15 border-gray-200 border-2 bg-white md:text-base text-gray-800 font-medium placeholder:text-gray-400"
        />

        <SubmitButton />
      </div>

      <span className="text-xs font-medium text-gray-400">
        ✨ Unsubscribe anytime. No spam, ever.
      </span>
    </Form>
  );
}
