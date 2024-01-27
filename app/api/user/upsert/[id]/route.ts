import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

interface IBody {
    name: string,
    email: string,
}

type Props = {
    params: {
        id: string
    }
}

export const PUT = async (request: Request, { params: { id } }: Props) => {
    const body: IBody = await request.json()

    const updatedUser = await prisma.user.upsert({
        where: {
            id: Number(id)
        },
        create: {
            name: body.name,
            email: body.email
        },
        update: {
            name: body.name
        }
    })

    return NextResponse.json(updatedUser)
}