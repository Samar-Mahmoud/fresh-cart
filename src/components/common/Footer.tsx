import { Phone } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const sections: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}[] = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/products" },
      { name: "Categories", href: "/categories" },
      { name: "Brands", href: "/brands" },
      {
        name: "Electronics",
        href: "/products?category=6439d58a0049ad0b52b9003f",
      },
      {
        name: "Men's Fashion",
        href: "/products?category=6439d2d167d9aa4ca970649f",
      },
      {
        name: "Women's Fashion",
        href: "/products?category=6439d5b90049ad0b52b90048",
      },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "My Account", href: "/profile" },
      { name: "Order History", href: "/orders" },
      { name: "Wishlist", href: "/wishlist" },
      { name: "Shopping Cart", href: "/cart" },
      { name: "Sign In", href: "/login" },
      { name: "Create Account", href: "/register" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const cards: string[] = ["Visa", "Mastercard", "PayPal"];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12 grid grid-cols-12 gap-8 lg:gap-12 text-gray-400">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="w-fit bg-white px-4 py-2 rounded-lg mb-7.75">
            <Logo />
          </div>

          <p className="text-sm font-medium mb-6 leading-relaxed">
            FreshCart is your one-stop destination for quality products. From
            fashion to electronics, we bring you the best brands at competitive
            prices with a seamless shopping experience.
          </p>

          <div className="mb-6 space-y-3">
            {/* Phone */}
            <a
              href="tel:+18001234567"
              className="group/link-group flex items-center gap-3 "
            >
              <Phone
                className=" text-primary-600 fill-primary-600"
                width="18"
                height="14"
              />
              <span className="text-sm font-medium group-hover/link-group:text-primary-600 transition-colors">
                +1 (800) 123-4567
              </span>
            </a>

            {/* Mail */}
            <a
              href="mailto:support@freshcart.com"
              className="group/link-group flex items-center gap-3"
            >
              <svg
                className="text-primary-600"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.0625 1.75C2.33789 1.75 1.75 2.33789 1.75 3.0625C1.75 3.47539 1.94414 3.86367 2.275 4.1125L7.9625 8.37812C8.43008 8.72812 9.06992 8.72812 9.5375 8.37812L15.225 4.1125C15.5559 3.86367 15.75 3.47539 15.75 3.0625C15.75 2.33789 15.1621 1.75 14.4375 1.75H3.0625ZM1.75 5.35938V10.5C1.75 11.4652 2.53477 12.25 3.5 12.25H14C14.9652 12.25 15.75 11.4652 15.75 10.5V5.35938L10.325 9.42812C9.39258 10.1281 8.10742 10.1281 7.175 9.42812L1.75 5.35938Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-medium group-hover/link-group:text-primary-600 transition-colors">
                support@freshcart.com
              </span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-3 ">
              <svg
                className="text-primary-600"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.50005 5.15703C3.50005 2.30781 5.85161 0 8.75005 0C11.6485 0 14 2.30781 14 5.15703C14 8.41914 10.7133 12.3293 9.34067 13.8195C9.01802 14.1695 8.47935 14.1695 8.15669 13.8195C6.78403 12.3293 3.49731 8.41914 3.49731 5.15703H3.50005ZM8.75005 7C9.21418 7 9.6593 6.81563 9.98749 6.48744C10.3157 6.15925 10.5 5.71413 10.5 5.25C10.5 4.78587 10.3157 4.34075 9.98749 4.01256C9.6593 3.68437 9.21418 3.5 8.75005 3.5C8.28592 3.5 7.8408 3.68437 7.51261 4.01256C7.18442 4.34075 7.00005 4.78587 7.00005 5.25C7.00005 5.71413 7.18442 6.15925 7.51261 6.48744C7.8408 6.81563 8.28592 7 8.75005 7Z"
                  fill="currentColor"
                />
              </svg>

              <span className="text-sm font-medium">
                123 Commerce Street, New York, NY 10001
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="size-10 shrink-0 bg-gray-800 rounded-full flex hover:bg-primary-main hover:text-white transition-colors"
            >
              <svg
                className="m-auto"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 21.3531V28H21.125V21.3531H23.8281L24.3906 18.2969H21.125V17.2156C21.125 15.6 21.7594 14.9813 23.3969 14.9813C23.9062 14.9813 24.3156 14.9937 24.5531 15.0187V12.2469C24.1063 12.125 23.0125 12 22.3812 12C19.0406 12 17.5 13.5781 17.5 16.9812V18.2969H15.4375V21.3531H17.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              className="size-10 shrink-0 bg-gray-800 rounded-full flex hover:bg-primary-main hover:text-white transition-colors"
            >
              <svg
                className="m-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3562 4.74062C16.3656 4.88125 16.3656 5.025 16.3656 5.16563C16.3656 9.5 13.0656 14.4969 7.03438 14.4969C5.175 14.4969 3.45 13.9594 2 13.025C2.2625 13.0562 2.51875 13.0656 2.79062 13.0656C4.325 13.0656 5.73438 12.5469 6.8625 11.6656C5.42188 11.6344 4.2125 10.6906 3.79688 9.39062C4 9.42188 4.20312 9.44063 4.41563 9.44063C4.70938 9.44063 5.00312 9.4 5.27813 9.32812C3.775 9.025 2.65 7.70312 2.65 6.10938V6.06875C3.0875 6.3125 3.59375 6.46562 4.13125 6.48438C3.24687 5.89687 2.66875 4.89062 2.66875 3.75312C2.66875 3.14375 2.83125 2.58437 3.11563 2.09687C4.73125 4.0875 7.15625 5.3875 9.87813 5.52812C9.82812 5.28437 9.79688 5.03125 9.79688 4.77812C9.79688 2.97187 11.2594 1.5 13.075 1.5C14.0188 1.5 14.8719 1.89687 15.4719 2.53437C16.2125 2.39375 16.925 2.11875 17.5531 1.74375C17.3094 2.50625 16.7906 3.14375 16.1125 3.55C16.7719 3.47812 17.4125 3.29688 18 3.04375C17.5531 3.69375 16.9937 4.27187 16.3562 4.74062Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              className="size-10 shrink-0 bg-gray-800 rounded-full flex hover:bg-primary-main hover:text-white transition-colors"
            >
              <svg
                className="m-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0094 4.40586C9.53744 4.40463 9.06988 4.49636 8.63339 4.67583C8.19691 4.8553 7.80005 5.11898 7.46546 5.45182C6.78975 6.12402 6.40874 7.03711 6.40625 7.99023C6.40376 8.94336 6.78 9.85843 7.45221 10.5341C8.12441 11.2099 9.0375 11.5909 9.99062 11.5934C10.9437 11.5958 11.8588 11.2196 12.5345 10.5474C13.2103 9.8752 13.5913 8.96211 13.5938 8.00898C13.5962 7.05586 13.22 6.14079 12.5478 5.46507C11.8756 4.78936 10.9625 4.40835 10.0094 4.40586ZM9.99062 5.66836C10.2968 5.66713 10.6002 5.72621 10.8835 5.84223C11.1668 5.95825 11.4245 6.12893 11.6418 6.34454C11.8592 6.56014 12.0319 6.81645 12.1502 7.09882C12.2685 7.38119 12.33 7.68409 12.3313 7.99023C12.3325 8.29638 12.2734 8.59977 12.1574 8.88308C12.0414 9.16639 11.8707 9.42408 11.6551 9.64142C11.4395 9.85877 11.1832 10.0315 10.9008 10.1498C10.6184 10.2681 10.3155 10.3296 10.0094 10.3309C9.70323 10.3321 9.39984 10.273 9.11653 10.157C8.83322 10.041 8.57553 9.87029 8.35819 9.65468C8.14084 9.43908 7.96809 9.18277 7.84979 8.9004C7.7315 8.61803 7.66998 8.31513 7.66875 8.00898C7.66752 7.70284 7.7266 7.39945 7.84262 7.11614C7.95864 6.83283 8.12932 6.57514 8.34493 6.3578C8.56053 6.14045 8.81684 5.9677 9.09921 5.8494C9.38158 5.73111 9.68448 5.66959 9.99062 5.66836ZM12.9094 4.25898C12.9094 4.03687 12.9976 3.82384 13.1547 3.66678C13.3117 3.50972 13.5248 3.42148 13.7469 3.42148C13.969 3.42148 14.182 3.50972 14.3391 3.66678C14.4961 3.82384 14.5844 4.03687 14.5844 4.25898C14.5844 4.4811 14.4961 4.69412 14.3391 4.85119C14.182 5.00825 13.969 5.09648 13.7469 5.09648C13.5248 5.09648 13.3117 5.00825 13.1547 4.85119C12.9976 4.69412 12.9094 4.4811 12.9094 4.25898ZM16.9625 5.10898C16.9094 3.98711 16.6531 2.99336 15.8313 2.17461C15.0125 1.35586 14.0188 1.09961 12.8969 1.04336C11.7406 0.977734 8.275 0.977734 7.11875 1.04336C6 1.09648 5.00625 1.35273 4.18438 2.17148C3.3625 2.99023 3.10938 3.98398 3.05312 5.10586C2.9875 6.26211 2.9875 9.72773 3.05312 10.884C3.10625 12.0059 3.3625 12.9996 4.18438 13.8184C5.00625 14.6371 5.99688 14.8934 7.11875 14.9496C8.275 15.0152 11.7406 15.0152 12.8969 14.9496C14.0188 14.8965 15.0125 14.6402 15.8313 13.8184C16.65 12.9996 16.9062 12.0059 16.9625 10.884C17.0281 9.72773 17.0281 6.26523 16.9625 5.10898ZM15.4688 12.1246C15.225 12.7371 14.7531 13.209 14.1375 13.4559C13.2156 13.8215 11.0281 13.7371 10.0094 13.7371C8.99063 13.7371 6.8 13.8184 5.88125 13.4559C5.26875 13.2121 4.79688 12.7402 4.55 12.1246C4.18437 11.2027 4.26875 9.01523 4.26875 7.99648C4.26875 6.97773 4.1875 4.78711 4.55 3.86836C4.79375 3.25586 5.26562 2.78398 5.88125 2.53711C6.80312 2.17148 8.99063 2.25586 10.0094 2.25586C11.0281 2.25586 13.2188 2.17461 14.1375 2.53711C14.75 2.78086 15.2219 3.25273 15.4688 3.86836C15.8344 4.79023 15.75 6.97773 15.75 7.99648C15.75 9.01523 15.8344 11.2059 15.4688 12.1246Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="https://youtube.com"
              target="_blank"
              className="size-10 shrink-0 bg-gray-800 rounded-full flex hover:bg-primary-main hover:text-white transition-colors"
            >
              <svg
                className="m-auto"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1781 3.87812C17.9844 3.1375 17.4031 2.55625 16.6687 2.35938C15.3406 2 10.0031 2 10.0031 2C10.0031 2 4.66562 2 3.33437 2.35938C2.6 2.55625 2.02188 3.1375 1.825 3.87812C1.46875 5.21875 1.46875 8.0125 1.46875 8.0125C1.46875 8.0125 1.46875 10.8063 1.825 12.1469C2.02188 12.8844 2.6 13.4438 3.33437 13.6406C4.66562 14 10.0031 14 10.0031 14C10.0031 14 15.3406 14 16.6719 13.6406C17.4062 13.4438 17.9844 12.8844 18.1812 12.1469C18.5375 10.8063 18.5375 8.0125 18.5375 8.0125C18.5375 8.0125 18.5375 5.21875 18.1812 3.87812H18.1781ZM8.25625 10.55V5.475L12.7156 8.0125L8.25625 10.55Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {sections.map((sec) => (
          <div
            key={sec.title}
            className="col-span-12 md:col-span-6 lg:col-span-2"
          >
            <h3 className="font-semibold text-white mb-5 text-lg">
              {sec.title}
            </h3>
            <ul className="space-y-3">
              {sec.links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="font-medium text-sm hover:text-primary-600 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className="bg-gray-800" />

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-gray-500">
        <p className="text-sm font-medium ">
          © 2026 FreshCart. All rights reserved.
        </p>

        <div className="flex gap-4">
          {cards.map((c) => (
            <div key={c} className="flex gap-2 items-center">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 3.5V4.375H15.75V3.5C15.75 2.53477 14.9652 1.75 14 1.75H3.5C2.53477 1.75 1.75 2.53477 1.75 3.5ZM1.75 5.6875V10.5C1.75 11.4652 2.53477 12.25 3.5 12.25H14C14.9652 12.25 15.75 11.4652 15.75 10.5V5.6875H1.75ZM3.5 9.84375C3.5 9.48008 3.79258 9.1875 4.15625 9.1875H5.46875C5.83242 9.1875 6.125 9.48008 6.125 9.84375C6.125 10.2074 5.83242 10.5 5.46875 10.5H4.15625C3.79258 10.5 3.5 10.2074 3.5 9.84375ZM7.4375 9.84375C7.4375 9.48008 7.73008 9.1875 8.09375 9.1875H9.84375C10.2074 9.1875 10.5 9.48008 10.5 9.84375C10.5 10.2074 10.2074 10.5 9.84375 10.5H8.09375C7.73008 10.5 7.4375 10.2074 7.4375 9.84375Z"
                  fill="currentColor"
                />
              </svg>

              <span className="text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
