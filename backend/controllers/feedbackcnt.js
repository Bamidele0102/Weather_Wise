import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
const makeFeedback = async (req, res) => {
    const { user_id, location, type, feedback } = req.body

    if (!user_id || !location || !type || !feedback) {
        return res.status(400).json({ message: "Please provide user_id, location, type and feedback" })
    }


    const user = await prisma.user.findUnique({
        where: {
            id: user_id
        }
    })

    if (!user) {
        return res.status(400).json({ message: "Please provide a valid user_id" })
    }

    const feedbackdata = await prisma.feedback.create({
        data: {
            userId: user_id,
            location: location,
            type,
            feedback
        }
    })

    return res.status(201).json(feedbackdata)

}


export { makeFeedback }