import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth";
import { SignInData, schema } from "./schema/signin";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role: string;
    token: string;
  }

  interface Session {
    user: {
      role: string;
      token: string;
    } & DefaultSession["user"];
  }
}

import {} from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    token: string;
  }
}

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const validation = schema.safeParse(credentials);
        if (!validation.success) {
          return null;
        }

        const res = await login(credentials as SignInData);

        if (res) {
          return { ...res.user, token: res.token };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/signin" },
  callbacks: {
    jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session) {
        token.name = session.user.name;
        token.email = session.user.email;
      }

      if (user) {
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.token = token.token;
      return session;
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
  session: { maxAge: 60 * 60 * 24 },
  jwt: { maxAge: 60 * 60 * 24 },
});
