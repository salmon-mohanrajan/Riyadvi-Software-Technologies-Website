import mongoose from 'mongoose';

/**
 * Consultation Schema
 * Handles "Book a Free Consultation" requests from the primary CTA.
 * Required by Assignment Section 3, 11, 26, 27.
 */
const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    servicesInterested: {
      type: [String],
      default: ['Web Development'],
    },
    estimatedBudget: {
      type: String,
      enum: ['$2,000 - $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+', 'Not Sure'],
      default: 'Not Sure',
    },
    preferredDate: {
      type: Date,
      required: [true, 'Please select a preferred consultation date'],
    },
    preferredTimeSlot: {
      type: String,
      enum: ['Morning (9 AM - 12 PM)', 'Afternoon (1 PM - 4 PM)', 'Evening (5 PM - 8 PM)'],
      default: 'Morning (9 AM - 12 PM)',
    },
    projectBrief: {
      type: String,
      trim: true,
      maxlength: [3000, 'Project brief cannot exceed 3000 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'scheduled', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Consultation =
  mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

export default Consultation;
