"use client";

import { createContext, useState } from "react";

type View = "grid" | "rows";

export const ViewContext = createContext<{
  view: View;
  setView: (v: View) => void;
}>({ view: "grid", setView: () => {} });

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>("grid");

  return <ViewContext value={{ view, setView }}>{children}</ViewContext>;
}
