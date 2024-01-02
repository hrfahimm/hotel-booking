import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import sanityClient from "./sanity";
import { SanityClient } from "sanity";

export const authOption: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        SanityCredentials(sanityClient as SanityClient),
    ],
    session: {
        strategy: "jwt",
    },
    adapter: SanityAdapter(sanityClient as SanityClient),
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    callbacks: {
        session: async ({ session, token }) => {
            const userEmail = token.email;
            const userIdObj = await sanityClient.fetch<{ _id: string }>(
                `*[_type == "user" && email == $email] [0]{
                    _id
                } `,
                { email: userEmail }
            );
            // console.log(user);

            return {
                ...session,
                user: {
                    ...session.user,
                    id: userIdObj._id,
                },
            };
        },
    },
};
