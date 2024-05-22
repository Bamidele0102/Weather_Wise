import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const NameVar = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Please provide name and email" });
    }

    res.json({ message: `your name is: ${name}, your email is: ${email}` });
};

const createAccount = async (req, res) => {
    // const prisma = new PrismaClient()
    const { name, email, password, username } = req.body;

    if (!name || !email || !password || !username) {
        return res
            .status(400)
            .json({ message: "Please provide name, email, password and username" });
    }

    const existinguserbyemail = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    const existinguserbyusername = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (existinguserbyemail || existinguserbyusername) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
            username,
        },
    });

    res.status(201).json({ message: user });
};

const login = async (req, res) => {
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b69b5316dba2b3b6424b8616e42bb148


    const { email, password, username } = req.body;

    if (!password) {
        return res
            .status(400)
            .json({ message: "Please provide email and password" });
    }




    if (email && password) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        res.status(200).json({ message: user });
    }


    if (username) {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        res.status(200).json({ message: user });
    }

};

export { NameVar, createAccount, login };
