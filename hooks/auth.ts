import GitHubProvider from 'next-auth/providers/github'
import NextAuth from 'next-auth'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

export default NextAuth(authOptions)