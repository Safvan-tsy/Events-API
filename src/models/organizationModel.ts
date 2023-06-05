import mongoose, { Document, Schema } from 'mongoose'

interface Organizations extends Document {
    user: mongoose.Types.ObjectId
    eventId: mongoose.Types.ObjectId[],
    name: string,
    email: string,
    imageCover: string,
    description: string,
    address: string
}

const organizationSchema: Schema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId
        },
        eventId: [{
            type: mongoose.Types.ObjectId,
            ref: 'Events'
        }],
        name: {
            type: String,
            required: [true, 'please provide name']
        },
        email: {
            type: String,
            required: [true, 'please provide email']
        },
        imageCover: {
            type: String
        },
        description: {
            type: String
        },
        address: {
            type: String
        }

    }
)

export default mongoose.model<Organizations>('Organizations', organizationSchema)