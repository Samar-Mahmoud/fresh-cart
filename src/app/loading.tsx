import { Spinner } from "@/components/ui";

export default function loading() {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center text-primary-800">
      <Spinner className="size-6" />
      <span className="text-sm font-semibold">Loading</span>
    </div>
  );
}
