import { handlers } from "@/auth";
import { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const { POST } = handlers;

export const GET = async (req: NextRequest) => {
  const res = await handlers.GET(req);

  // strip token from session endpoint response
  if (req.url.includes("/api/auth/session")) {
    const data: Session | null = await res.json();
    if (data) {
      const {
        user: { role, email, id, image, name },
        expires,
      } = data;

      return NextResponse.json({
        expires,
        user: { role, email, id, image, name },
      });
    }
    return NextResponse.json(data);
  }

  return res;
};
