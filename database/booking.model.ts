import { Schema, model, models, Document } from 'mongoose';
import Event from './event.model';

// TypeScript interface for Booking document
export interface IBooking extends Document {
  eventId: Schema.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: Validate that the referenced event exists
BookingSchema.pre('save', async function (next) {
  // Only validate eventId if it's new or modified
  if (this.isNew || this.isModified('eventId')) {
    try {
      const eventExists = await Event.findById(this.eventId);

      if (!eventExists) {
        return next(new Error('Referenced event does not exist'));
      }
    } catch {
      return next(new Error('Failed to validate event reference'));
    }
  }

  next();
});

// Create index on eventId for faster lookups
BookingSchema.index({ eventId: 1 });

// Additional compound index for finding bookings by event and email
BookingSchema.index({ eventId: 1, email: 1 });

// Prevent model overwrite during hot reload in development
const Booking = models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
