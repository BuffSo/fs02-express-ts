import { model, Schema } from "mongoose";
import { User } from "../../types/user";

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  name: { type: String, default: null },
})

export const UserModel = model<User>('User', userSchema)
