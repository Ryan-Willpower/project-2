import root from "./root"
import status from "./status"
import createUser from "./users/create"
import login from "./users/login"
import JWT from "./jwt"
import updateUser from "./users/update"

export const typeDefs = [root, status, createUser, login, JWT, updateUser]
