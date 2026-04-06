import Logo from "@/components/common/Logo";
import TopBar from "@/components/common/TopBar";
import SearchInput from "@/components/common/ProductSearch";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex gap-4 lg:gap-8 justify-between items-center h-16 lg:h-18">
          <Logo />

          <div className="hidden lg:flex flex-1">
            <SearchInput placeholder="Search for products, brands and more..." />
          </div>

          <NavMenu />
        </div>
      </header>
    </>
  );
}
