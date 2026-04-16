import { auth } from "@/auth";

export const proxy = auth((req) => {
  const pathname = req.nextUrl.pathname;

  if (req.auth && (pathname === "/signin" || pathname === "/register")) {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: [
    "/cart",
    "/wishlist",
    "/profile",
    "/checkout",
    "/orders",
    "/signin",
    "/register",
  ],
};
