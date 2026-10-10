import mongoose from 'mongoose';

/**
 * Inquiry Schema
 * Captures general contact inquiries submitted from the /contact page.
 * Required by Assignment Section 23 & 26.
 */
const inquirySchema = new mongoose.Schema(
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
      trim: true,
      default: '',
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    requirement: {
      type: String,
      trim: true,
      enum: [
        'Web Development',
        'App Development',
        'Digital Marketing',
        'AR / VR',
        '3D Modeling',
        'UI/UX Design',
        'Other',
      ],
      default: 'Web Development',
    },
    message: {
      type: String,
      required: [true, 'Please provide a message or project overview'],
      trim: true,
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in-discussion', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
