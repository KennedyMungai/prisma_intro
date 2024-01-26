import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const posts = await prisma.post.findMany({
        where: {
            author: {
                is: {
                    name: 'Jack'
                }
            }
        }
    })
    return NextResponse.json(posts)
}