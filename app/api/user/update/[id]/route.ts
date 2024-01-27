import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

type Props = {
    params: {
        id: string
    }
}

interface IBody{
    name: string
}

export const PUT = async (request: Request, {params: {id}}: Props) => {
    const body: IBody = await request.json()

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: body
    })

    return NextResponse.json(updatedUser)
}