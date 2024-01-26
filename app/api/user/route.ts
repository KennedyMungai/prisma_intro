import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    const users = await prisma.user.findMany({
        where: {
            name: {
                contains: 'a',
                startsWith: 's'
            }
        }
    })

    return NextResponse.json(users)
}