import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import verifyJwt from "../middleware/jwt/verifyJwt";

const userRoutes = Router()

userRoutes.post("/create-user", UserController.createUser)
userRoutes.post("/login", UserController.userLogin)
userRoutes.post("/:id", verifyJwt, UserController.userAuthentication)
userRoutes.patch("/update/:id", UserController.updateUser)






export default userRoutes

