import prisma from "@/lib/prisma"

type Props = {
    params: {
        id: string
    }
}

export const PUT = async ({ params: { id } }: Props) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: "Updated User"
        }
    })
}