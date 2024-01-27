import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

type Props = {
    params: {
        id: string
    }
}

export const PUT = async (request: Request, {params: {id}}: Props) => {
    console.log(id)

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: "Updated User"
        }
    })

    return NextResponse.json(updatedUser)
}