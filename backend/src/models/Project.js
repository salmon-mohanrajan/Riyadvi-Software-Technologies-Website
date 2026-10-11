import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
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
      required: [true, 'Project title is required'],
      trim: true,
    },
    client: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    has3DExperience: {
      type: Boolean,
      default: false,
    },
    interactive3DType: {
      type: String,
      default: 'none',
    },
    shortDesc: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    technologies: [String],
    results: [
      {
        metric: String,
        label: String,
      },
    ],
    testimonial: {
      quote: String,
      author: String,
      role: String,
    },
    relatedServices: [String],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
