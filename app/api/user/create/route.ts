import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async () => {
    const user = await prisma.user.create({
        data: {
            email: 'some1@body.com',
            name: 'Some1 Body',
            role: 'USER',
            post: {
                create: [
                    {
                        title: 'Some title',
                        isPublished: true,
                        categories: {
                            connectOrCreate: {
                                where: {
                                    id: 2
                                },
                                create: {
                                    name: "Big Data "
                                }
                            }
                        }
                    }
                ]
            }
        }
    })

    return NextResponse.json(user)
}