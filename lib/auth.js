import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { getUser } from "@/actions/authActions";


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {

        const { email, phone, password } = credentials

        const existingUser = await getUser({
          email: email,
          phone: phone,
        });

        if (existingUser?.status) {
          const passwordMatch = await bcrypt.compare(password, existingUser.user.user_password);

          if (passwordMatch) {
            const { name, email, phone, id } = existingUser.user;
            return { name, email, phone, id };
          }
        } return null;
      },
    }),
  ],

  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ profile, account, user }) {
      return true;
    },
    async jwt({ token, user, account }) {

      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      return session
    },
  }
})