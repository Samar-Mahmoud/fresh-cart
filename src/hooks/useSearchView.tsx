import { ViewContext } from "@/context/SearchView";
import { useContext } from "react";

export default function useSearchView() {
  return useContext(ViewContext);
}
