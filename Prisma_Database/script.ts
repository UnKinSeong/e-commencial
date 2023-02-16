import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()
import express from "express";

const api = express();

api.use(express.json());

const port = process.env.PORT || "3000";

api.get("/", async (req: any, res: { json: (arg0: User[]) => void; }) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});


/*
  api/auth/signup
  end point for user to sign up
*/





/*
  api/auth/login
  end point for user to login
*/





api.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

