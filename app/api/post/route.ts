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
        }
    })
    return NextResponse.json(posts)
}