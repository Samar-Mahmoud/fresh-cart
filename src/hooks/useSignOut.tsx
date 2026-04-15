import { signOutAction } from "@/actions/auth";
import { useTransition } from "react";

export default function useSignOut() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return { isPending, handleSignOut };
}
