import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    const users = await prisma.user.findMany({
        where: {
            post: {
                none: {
                    isPublished: true
                }
            }
        }
    })

    return NextResponse.json(users)
}