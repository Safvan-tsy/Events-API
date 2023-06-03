import mongoose, { Document, Schema } from "mongoose";
import validator from 'validator'
import bcrypt from 'bcryptjs';
import crypto from 'crypto'

interface Users extends Document {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string,
    role: string,
    organizations: mongoose.Types.ObjectId[],
    correctPasswords(candidatePassword: string, userPassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true, "provide email please"],
            validate: [validator.isEmail, 'Please provide a valid email']
        },
        password: {
            type: String,
            required: [true, "please enter password"],
            select:false
        },
        passwordConfirm: {
            type: String,
            required:true,
            validate: {
                validator: function (el:string) {
                    return el === this.password;
                },
                message: 'Passwords are not the same!'
            }
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        organizations: [{
            type: mongoose.Types.ObjectId,
            ref: 'Organizations'
        }],

    }
)
userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;
    next()
})

userSchema.methods.correctPasswords = async function(candidatePassword: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword);
  };
  
  const Users = mongoose.model<Users>('Users', userSchema);
  
  export default Users;