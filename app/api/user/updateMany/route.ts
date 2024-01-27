import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const PUT = async () => {
    const updateUsers = await prisma.user.updateMany({
        where: {
            name: {
                contains: "e"
            }
        },
        data: {
            name: "Many Updated"
        }
    })

    return NextResponse.json(updateUsers)
}