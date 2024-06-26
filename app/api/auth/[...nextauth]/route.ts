
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
          email: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials);
        const res = await fetch(`${process.env.DDAYATTACK_API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
        const user = await res.json()
        console.log(user)

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };