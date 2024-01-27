import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async () => {
    const withdrawUpdate = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            likeNum: {
                decrement: 5
            }
        }
    })

    const depositUpdate = await prisma.post.update({
        where: {
            id: 4
        },
        data: {
            likeNum: {
                increment: 5
            }
        }
    })

    const result = await prisma.$transaction([withdrawUpdate, depositUpdate])

    return NextResponse.json(result)
}