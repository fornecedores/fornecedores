import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = ["coutinhocoutinholucas@gmail.com"];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "495319500881-ns27iaei017fcio7gn06s5b9umcookgn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      if (adminEmails.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};
export default NextAuth(authOptions);
export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!adminEmails.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw "not admin";
  }
}
