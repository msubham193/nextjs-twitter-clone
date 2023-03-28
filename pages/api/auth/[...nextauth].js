import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:
        "168632414581-4h0kotjmuhmih22pkigmkcc0odd0nm8c.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/Signin",
  },
};

export default NextAuth(authOptions);
