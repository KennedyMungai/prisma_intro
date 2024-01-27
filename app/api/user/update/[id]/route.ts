import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const PUT = async ({params}: {params: {id: string}}) => {
    console.log(params.id)

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(params.id)
        },
        data: {
            name: "Updated User"
        }
    })

    return NextResponse.json(updatedUser)
}