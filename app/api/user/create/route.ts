import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

interface IBody {
    name: string
    email: string
}

export const POST = async (request: Request) => {
    // const user = await prisma.user.create({
    //     data: {
    //         email: 'some2@body.com',
    //         name: 'Some2 Body',
    //         role: 'USER',
    //         post: {
    //             create: [
    //                 {
    //                     title: 'Some title',
    //                     isPublished: true,
    //                     categories: {
    //                         connectOrCreate: {
    //                             where: {
    //                                 id: 3
    //                             },
    //                             create: {
    //                                 name: "ORM"
    //                             }
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    // })

    const body: IBody = await request.json()
    const user = await prisma.user.create({
        data: body
    })

    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: 'Sha Poopie', 
    //             email: 'Sha@poopie.com'
    //         },
    //         { 
    //             name: 'Thun Der', 
    //             email: 'thun@der.com' 
    //         },
    //         {
    //             name: "Kitchen Sink", 
    //             email: "kitchen@sink.com"
    //         }
    //     ]
    // })

    return NextResponse.json(user)
}