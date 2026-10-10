import mongoose from 'mongoose';

/**
 * CareerApplication Schema
 * Handles candidate job applications for roles listed under /careers.
 * Required by Assignment Section 22, 26, 28.
 */
const careerApplicationSchema = new mongoose.Schema(
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
    position: {
      type: String,
      required: [true, 'Please specify the position applied for'],
      trim: true,
    },
    jobSlug: {
      type: String,
      required: [true, 'Job slug is required'],
      trim: true,
    },
    resumeUrl: {
      type: String,
      trim: true,
      default: '',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [3000, 'Cover note cannot exceed 3000 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: ['submitted', 'under-review', 'interview-scheduled', 'rejected', 'hired'],
      default: 'submitted',
    },
  },
  {
    timestamps: true,
  }
);

const CareerApplication =
  mongoose.models.CareerApplication ||
  mongoose.model('CareerApplication', careerApplicationSchema);

export default CareerApplication;
