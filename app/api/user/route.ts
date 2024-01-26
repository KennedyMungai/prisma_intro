import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    const users = await prisma.user.findMany({
        where: {
            name: {
                endsWith: 'n'
            }
        }
    })

    return NextResponse.json(users)
}