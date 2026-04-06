import { Button, Input } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export default function SubscriptionForm() {
  return (
    <form className="space-y-3">
      <div className="grid grid-cols-12 gap-3">
        <Input
          placeholder="you@example.com"
          className="col-span-12 lg:col-span-8 xl:col-span-9 px-5 py-4.5 rounded-2xl h-15 border-gray-200 border-2 bg-white placeholder:text-gray-400"
        />

        <Button className="col-span-12 lg:col-span-4 xl:col-span-3 h-14 lg:h-full rounded-2xl gap-3 px-8 py-4 shadow-md text-white font-semibold text-base bg-linear-to-r from-primary-800 to-emerald-500 hover:to-emerald-400">
          Subscribe
          <ArrowRight className="" />
        </Button>
      </div>

      <span className="text-xs font-medium text-gray-400">
        ✨ Unsubscribe anytime. No spam, ever.
      </span>
    </form>
  );
}
