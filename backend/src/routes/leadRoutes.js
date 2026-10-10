import express from 'express';
import Inquiry from '../models/Inquiry.js';
import Consultation from '../models/Consultation.js';
import HealthCheckup from '../models/HealthCheckup.js';
import LeadMagnet from '../models/LeadMagnet.js';
import CareerApplication from '../models/CareerApplication.js';

const router = express.Router();

// ========================================================
// 1. POST /contact — General Inquiries (Section 23 & 27)
// ========================================================
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, company, requirement, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      company,
      requirement,
      message,
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will contact you shortly.',
      data: inquiry,
    });
  } catch (error) {
    console.error('Error in /api/contact:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again later.',
      error: error.message,
    });
  }
});

// ========================================================
// 2. POST /consultation — Book Consultation (Section 3, 11, 27)
// ========================================================
router.post('/consultation', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      servicesInterested,
      estimatedBudget,
      preferredDate,
      preferredTimeSlot,
      projectBrief,
    } = req.body;

    if (!name || !email || !phone || !preferredDate) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and preferred date are required.',
      });
    }

    const consultation = await Consultation.create({
      name,
      email,
      phone,
      company,
      servicesInterested,
      estimatedBudget,
      preferredDate,
      preferredTimeSlot,
      projectBrief,
    });

    return res.status(201).json({
      success: true,
      message: 'Consultation session requested successfully! We will confirm your calendar slot.',
      data: consultation,
    });
  } catch (error) {
    console.error('Error in /api/consultation:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to schedule consultation.',
      error: error.message,
    });
  }
});

// ========================================================
// 3. POST /health-checkup — 6-Step Diagnostic (Section 16 & 27)
// ========================================================
router.post('/health-checkup', async (req, res) => {
  try {
    const {
      businessName,
      industry,
      companySize,
      annualRevenue,
      hasExistingWebsite,
      websiteUrl,
      websiteSatisfaction,
      marketingChannels,
      monthlyMarketingBudget,
      currentTechStack,
      techPainPoints,
      primaryChallenge,
      topGoalForYear,
      targetTimeline,
      contactName,
      email,
      phone,
    } = req.body;

    if (!businessName || !industry || !contactName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Business name, industry, contact name, email, and phone are required.',
      });
    }

    let score = 50;
    if (websiteSatisfaction) score += Number(websiteSatisfaction) * 4;
    if (marketingChannels && marketingChannels.length > 0) score += Math.min(marketingChannels.length * 3, 12);
    if (currentTechStack && currentTechStack.length > 0) score += Math.min(currentTechStack.length * 3, 12);
    if (techPainPoints && techPainPoints.length > 3) score -= 6;
    const calculatedScore = Math.min(Math.max(score, 35), 98);

    const checkup = await HealthCheckup.create({
      businessName,
      industry,
      companySize,
      annualRevenue,
      hasExistingWebsite,
      websiteUrl,
      websiteSatisfaction,
      marketingChannels,
      monthlyMarketingBudget,
      currentTechStack,
      techPainPoints,
      primaryChallenge,
      topGoalForYear,
      targetTimeline,
      contactName,
      email,
      phone,
      calculatedScore,
    });

    return res.status(201).json({
      success: true,
      message: 'Business Health Checkup completed successfully!',
      score: calculatedScore,
      data: checkup,
    });
  } catch (error) {
    console.error('Error in /api/health-checkup:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to process business health checkup.',
      error: error.message,
    });
  }
});

// ========================================================
// 4. POST /lead-magnet — Guide Download (Section 17 & 27)
// ========================================================
router.post('/lead-magnet', async (req, res) => {
  try {
    const { name, company, email, phone } = req.body;

    if (!name || !company || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, company, email, and phone are required to download the guide.',
      });
    }

    const lead = await LeadMagnet.create({
      name,
      company,
      email,
      phone,
      resourceRequested: 'Software Project Planning Guide',
    });

    return res.status(201).json({
      success: true,
      message: 'Success! Your Software Project Planning Guide is ready.',
      downloadUrl: '/downloads/software-project-planning-guide.pdf',
      data: lead,
    });
  } catch (error) {
    console.error('Error in /api/lead-magnet:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate download access.',
      error: error.message,
    });
  }
});

// ========================================================
// 5. POST /applications — Career Applications (Section 22 & 27)
// ========================================================
router.post('/applications', async (req, res) => {
  try {
    const { name, email, phone, position, jobSlug, resumeUrl, message } = req.body;

    if (!name || !email || !phone || !position || !jobSlug) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, position, and job role are required.',
      });
    }

    const application = await CareerApplication.create({
      name,
      email,
      phone,
      position,
      jobSlug,
      resumeUrl,
      message,
    });

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our talent team will review your profile.',
      data: application,
    });
  } catch (error) {
    console.error('Error in /api/applications:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit application.',
      error: error.message,
    });
  }
});

export default router;
