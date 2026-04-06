import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/freshCartLogo.svg";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src={logo}
        alt="FreshCart Logo"
        className="h-6 lg:h-8 w-auto text-transparent"
      />
    </Link>
  );
}
