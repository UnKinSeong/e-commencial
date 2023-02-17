import { PrismaClient, User , Role} from '@prisma/client'
const prisma = new PrismaClient()
import express from "express";

const api = express();

api.use(express.json());

const port = "3000";

api.get("/", async (req: any, res: any) => {
  const allUsers = await prisma.user.findMany();
  res.json({ message: allUsers });
});


/*
  api/auth/signup
  end point for user to sign up
*/
async function signup(req: any, res: any ) {
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
async function login(req: any, res: { json: (arg0?: User | {error:string} ) => void; }) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please add email and password" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return res.json({ error: "Invalid Credentials" });
  }
  if (user.password !== password) {
    return res.json({ error: "Invalid Credentials" });
  }
  res.json(user);
}

api.post("/auth/login", login);


/*
  api/auth/logout
  end point for user to logout
*/
async function logout(req: any, res: { json: (arg0?: User | {error:string} ) => void; }) {
  const { email } = req.body;
  if (!email) {
    return res.json({ error: "Please add email" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return res.json({ error: "Invalid Credentials" });
  }
  res.json(user);
}

api.post("/auth/logout", logout);


/*
  api/auth/update
  end point for user to update
*/
async function update(req: any, res: { json: (arg0?: User | {error:string} ) => void; }) {
  const { id, name, email, password } = req.body;
  if (!id || !name || !email || !password) {
    return res.json({ error: "Please add all the fields" });
  }
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
    },
  });
  res.json(user);
}

api.post("/auth/update", update);


/*
  api/auth/delete
  end point for user to delete
*/
async function deleteUser(req: any, res: { json: (arg0?: User | {error:string} ) => void; }) {
  const { id } = req.body;
  if (!id) {
    return res.json({ error: "Please add id" });
  }
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.json(user);
}

api.post("/auth/delete", deleteUser);


/*
  api/product/get
  end point for user to get all products
*/

async function getProducts(req: any, res: any) {
  const allProducts = await prisma.product.findMany();
  console.log("allProducts", allProducts)
  return res.json(allProducts);
}

api.get("/product/get", getProducts);



/*
  api/product/add
  end point for user to add product
*/

async function addProduct(req: any, res: { json: (arg0?: any | {error:string} ) => void; }) {
  const { name, price, description, color, inStock, isOnSale, material, quantity, quantitySold, image, size, thumbnail, Image, Order, ProductCategory, vendorId } = req.body;
  if (!name || !price || !description || !color || !inStock || !isOnSale || !material || !quantity || !quantitySold || !image || !size || !thumbnail || !Image || !Order || !ProductCategory || !vendorId) {
    return res.json({ error: "Please add all the fields" });
  }
  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
      description,
      color,
      inStock,
      isOnSale,
      material,
      quantity,
      quantitySold,
      size,
      thumbnail,
      Image,
      Order,
      ProductCategory,
      vendorId,
    },
  });
  res.json(newProduct);
}

api.post("/product/add", addProduct);


api.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

