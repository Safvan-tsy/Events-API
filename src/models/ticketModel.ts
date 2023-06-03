import mongoose, { Document, Schema } from 'mongoose'

interface Tickets extends Document {
   eventId: mongoose.Types.ObjectId,
   firstName: string,
   lastName: string,
   email: string,
   ticketCount: number
}

const ticketSchema: Schema = new Schema(
   {
      eventId: {
         type: mongoose.Types.ObjectId,
         ref: 'Events'
      },
      firstName: {
         type: String
      },
      lastName: {
         type: String
      },
      email: {
         type: String
      },
      ticketCount: {
         type: Number
      },
      orderId: {
         type: String
      }
   }
)

export default mongoose.model<Tickets>('Tickets', ticketSchema)