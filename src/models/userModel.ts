import mongoose, { Document, Schema } from "mongoose";

interface Users extends Document {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string,
    role: string,
}

const userSchema: Schema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true, "provide email please"]
        },
        passowrd: {
            type: String,
            required: [true, "please enter password"]
        },
        passwordConfirm: {
            type: String
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }

    }
)

export default mongoose.model<Users>('Users', userSchema)