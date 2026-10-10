import mongoose from 'mongoose';

/**
 * LeadMagnet Schema
 * Captures downloads for the "Software Project Planning Guide" lead magnet.
 * Required by Assignment Section 17 & 26.
 */
const leadMagnetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    company: {
      type: String,
      required: [true, 'Please provide your company or organization name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your business email'],
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
    resourceRequested: {
      type: String,
      default: 'Software Project Planning Guide',
    },
    downloadCount: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const LeadMagnet =
  mongoose.models.LeadMagnet || mongoose.model('LeadMagnet', leadMagnetSchema);

export default LeadMagnet;
