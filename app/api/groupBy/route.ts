import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const groupPosts = await prisma.post.groupBy({
        by: ["authorId"],
        _sum: {
            likeNum: true
        },
        _avg: {
            likeNum: true
        }
    })

    return NextResponse.json(groupPosts)
}