import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const aggregations = await prisma.post.aggregate({
        _sum: {
            likeNum: true
        },
        _avg: {
            likeNum: true
        }
    })

    return NextResponse.json(aggregations)
}