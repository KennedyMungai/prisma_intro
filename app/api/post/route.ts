import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const posts = await prisma.post.findMany({
        where: {
            author: {
                isNot: {
                    name: 'Jack'
                },
                is: {
                    email: {
                        startsWith: 's'
                    }
                }
            }
        },
        include: {
            author: true
        }
    })
    return NextResponse.json(posts)
}