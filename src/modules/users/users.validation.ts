import { z, ZodType } from "zod"

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(5).max(100),
    email: z.string().email().min(7).max(100),
    password: z.string().min(7).max(100),
    fullname: z.string().min(5).max(100),
    role: z.enum(["owner", "manager"]),
  })
}