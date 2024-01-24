import { getUserData } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return new NextResponse("Authentacitaion Request ", { status: 500 });

    }
    const userId = session.user.id;
    try {
        const data = await getUserData(userId);
        return NextResponse.json(data, { status: 200, statusText: "successful" })
    } catch (error) {
        return new NextResponse("unable to fetch", { status: 400 })

    }
}