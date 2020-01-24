import { User } from "users"
import createQuery, { database } from "@utils/db"
import { encrypt } from "@utils/bcrypt"
import { CustomError } from "@utils/error"

export async function createUser(opt: User) {
  const encryptedPassword = await encrypt(opt.password)

  const query = createQuery.insert(`users`, [`username`, `email`, `password`])
  const values = [opt.username, opt.email, encryptedPassword]

  try {
    await database.query(query, values)
  } catch (error) {
    throw new CustomError({ message: error.message, code: `DatabaseError` })
  }
}
