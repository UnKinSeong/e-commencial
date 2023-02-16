import { PrismaClient, User , Role} from '@prisma/client'
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
async function signup(req: any, res: { json: (arg0?: User | {error:string} ) => void; }) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ error: "Please add all the fields" });
  }
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role: Role.CUSTOMER,
    },
  });
  res.json(newUser);
}

api.post("/auth/signup", signup);




/*
  api/auth/login
  end point for user to login
*/





api.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

