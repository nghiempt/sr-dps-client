import GoogleProvider from 'next-auth/providers/google';
import {getServerSession, type NextAuthOptions} from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  session: {strategy: 'jwt'},
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({token, user}) => {
      if (user) {
        token.user = user;
      }
      return token;
    },

    session: async ({session, token}) => {
      session.user = {
        ...session.user,
        // @ts-expect-error
        // username: token?.user?.username || token?.user?.gh_username,
        id: token?.user.id,
        role: token?.user.role,
      };
      return session;
    },
  },
};

export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      role: string;
    };
  } | null>;
}
