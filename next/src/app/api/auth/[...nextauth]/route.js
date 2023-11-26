import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDb from "../../../../../lib/mongodb";
import dbUsers from "../../../../../schemas/dbUsers";
import bcrypt from "bcrypt";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      //   logic for login
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDb();
          const user = await dbUsers.findOne({ email });

          if (!user) return null;

          const compare = await bcrypt.compare(password, user.password);
          if (!compare) return null;

          return user;
        } catch (error) {
          throw new Error(`invalid credentials`, error);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
