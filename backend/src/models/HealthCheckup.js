import mongoose from 'mongoose';

/**
 * HealthCheckup Schema
 * Captures submissions from the 6-step interactive Business Health Checkup diagnostic tool.
 * Required by Assignment Section 16 & 26.
 */
const healthCheckupSchema = new mongoose.Schema(
  {
    // Step 1: Business Information
    businessName: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true,
    },
    industry: {
      type: String,
      required: [true, 'Industry is required'],
      trim: true,
    },
    companySize: {
      type: String,
      enum: ['1-10 employees', '11-50 employees', '51-200 employees', '201+ employees'],
      default: '1-10 employees',
    },
    annualRevenue: {
      type: String,
      default: 'Under $250k',
    },

    // Step 2: Website & Digital Presence
    hasExistingWebsite: {
      type: Boolean,
      default: true,
    },
    websiteUrl: {
      type: String,
      trim: true,
      default: '',
    },
    websiteSatisfaction: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },

    // Step 3: Marketing
    marketingChannels: {
      type: [String],
      default: [],
    },
    monthlyMarketingBudget: {
      type: String,
      default: 'Under $1,000',
    },

    // Step 4: Technology
    currentTechStack: {
      type: [String],
      default: [],
    },
    techPainPoints: {
      type: [String],
      default: [],
    },

    // Step 5: Business Challenges & Goals
    primaryChallenge: {
      type: String,
      trim: true,
      default: '',
    },
    topGoalForYear: {
      type: String,
      trim: true,
      default: '',
    },
    targetTimeline: {
      type: String,
      enum: ['Immediate (Within 1 month)', '1-3 months', '3-6 months', 'Exploratory / Planning'],
      default: '1-3 months',
    },

    // Step 6: Submission & Contact Info
    contactName: {
      type: String,
      required: [true, 'Contact name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },

    // Calculated Digital Maturity Score (e.g. 0 - 100)
    calculatedScore: {
      type: Number,
      default: 70,
    },

    // Lead status in Admin Dashboard
    status: {
      type: String,
      enum: ['new', 'reviewed', 'audit-sent', 'meeting-booked', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

const HealthCheckup =
  mongoose.models.HealthCheckup || mongoose.model('HealthCheckup', healthCheckupSchema);

export default HealthCheckup;
