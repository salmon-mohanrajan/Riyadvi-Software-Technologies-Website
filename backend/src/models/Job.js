import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    department: {
      type: String,
      required: true,
      default: 'Engineering',
    },
    designation: {
      type: String,
      default: function () {
        return this.title;
      },
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: 'Remote / Hybrid (Bengaluru, IN)',
    },
    type: {
      type: String,
      default: 'Full-time',
    },
    salaryRange: {
      type: String,
      default: 'Competitive',
    },
    overview: {
      type: String,
      required: true,
    },
    responsibilities: [String],
    requirements: [String],
    benefits: [String],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
