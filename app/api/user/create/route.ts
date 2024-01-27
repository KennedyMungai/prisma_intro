import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async () => {
    const user = await prisma.user.create({
        data: {
            email: 'some@body.com',
            name: 'Some Body',
            role: 'USER'
        }
    })

    return NextResponse.json(user)
}