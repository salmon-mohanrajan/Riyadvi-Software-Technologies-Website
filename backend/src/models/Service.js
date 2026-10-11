import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
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
      required: [true, 'Service title is required'],
      trim: true,
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    interactiveType: {
      type: String,
      default: 'browser-3d',
    },
    iconName: {
      type: String,
      default: 'Globe',
    },
    problem: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    features: [
      {
        title: String,
        description: String,
      },
    ],
    industryUseCases: [
      {
        industry: String,
        example: String,
      },
    ],
    techStack: [String],
    process: [
      {
        step: String,
        title: String,
        desc: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

export default Service;
