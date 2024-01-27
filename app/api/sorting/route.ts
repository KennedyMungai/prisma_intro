import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const sortedPosts = await prisma.post.findMany({
        orderBy: {
            likeNum: 'asc'
        }
    })

    return NextResponse.json(sortedPosts)
}