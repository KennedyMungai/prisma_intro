import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const paginatedPosts = await prisma.post.findMany({
        skip: 2,
        take: 2
    })

    return NextResponse.json(paginatedPosts)
}