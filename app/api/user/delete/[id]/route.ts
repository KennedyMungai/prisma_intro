import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

type Props = {
    params: {
        id: string
    }
}

export const DELETE = async (request: Request, { params: { id } }: Props) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: +id
        }
    })
}