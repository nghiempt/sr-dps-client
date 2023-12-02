import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    user: {
      /** The user's postal address. */
      id?: string,
      role?: string
    } 
  }

  interface Session {
    user: {
      /** The user's postal address. */
      id: string,
      role?: string
    } & DefaultSession["user"]
  }
}
