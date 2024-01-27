import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const aggregations = await prisma.post.aggregate({
        _sum: {
            likeNum: true
        },
        _avg: {
            likeNum: true
        },
        _count: {
            id: true
        },
        _min: {
            likeNum: true
        },
        _max: {
            likeNum: true
        }
    })

    return NextResponse.json(aggregations)
}