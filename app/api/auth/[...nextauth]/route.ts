import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const options = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ]
})

export { options as GET, options as POST }