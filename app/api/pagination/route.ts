import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url)

    const pgnum = +(searchParams.get("pgnum") ?? 0)
    const pgsize = +(searchParams.get("pgsize") ?? 2)

    const paginatedPosts = await prisma.post.findMany({
        skip: pgnum * pgsize,
        take: pgsize
    })

    return NextResponse.json(paginatedPosts)
}