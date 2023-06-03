import mongoose, { Document, Schema } from 'mongoose'

interface Events extends Document {
    title: string;
    summary: string;
    description: string;
    paid: boolean;
    startDate: Date;
    endDate: Date;
    ticketCloseDate: Date;
    time: string;
    timeZone: string;
    mode: string;
    location: string;
    capacity: string;
    imageCover: string;
    images: [string];
    videoLinks: [string]
}

const eventSchema: Schema = new Schema(
    {
        title: {
            type: String,
            reuired: [true, 'Provide event title please']
        },
        summary: {
            type: String,
            reuired: [true, 'Provide event summary please']
        },
        description: {
            type: String,
            reuired: [true, 'Provide event description please']
        },
        paid: {
            type: Boolean,
            reuired: [true, 'Provide event paid please']
        },
        ticketCloseDate: {
            type: Date
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        time: {
            type: String
        },
        timezone: {
            type: String,
        },
        mode: {
            type: String,
            reuired: [true, 'Provide event mode please'],
            enum: ['online', 'offline']
        },
        location: {
            type: String,
            reuired: [true, 'Provide event location please']
        },
        capacity: {
            type: String,
            reuired: [true, 'Provide event capacity please']
        },
        images: [
            String
        ],
        videoLinks: [
            String
        ]
    }
)

export default mongoose.model<Events>('Events', eventSchema)