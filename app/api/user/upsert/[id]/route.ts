import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

interface IBody {
    name: string
}

type Props = {
    params: {
        id: string
    }
}

export const PUT = async (request: Request, { params: { id } }: Props) => {
    const body: IBody = await request.json()

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: body.name
        }
    })

    return NextResponse.json(updatedUser)
}