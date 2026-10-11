import express from 'express';
import Inquiry from '../models/Inquiry.js';
import Consultation from '../models/Consultation.js';
import HealthCheckup from '../models/HealthCheckup.js';
import LeadMagnet from '../models/LeadMagnet.js';
import CareerApplication from '../models/CareerApplication.js';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import Article from '../models/Article.js';
import Job from '../models/Job.js';

const router = express.Router();

/**
 * 1. GET /api/admin/metrics
 * Returns aggregated lead and content counts across all categories for the Admin Dashboard overview.
 */
router.get('/metrics', async (req, res) => {
  try {
    const [
      inquiries,
      consultations,
      healthCheckups,
      leadMagnets,
      applications,
      servicesCount,
      projectsCount,
      articlesCount,
      jobsCount,
    ] = await Promise.all([
      Inquiry.countDocuments(),
      Consultation.countDocuments(),
      HealthCheckup.countDocuments(),
      LeadMagnet.countDocuments(),
      CareerApplication.countDocuments(),
      Service.countDocuments(),
      Project.countDocuments(),
      Article.countDocuments(),
      Job.countDocuments(),
    ]);

    const totalLeads = inquiries + consultations + healthCheckups + leadMagnets + applications;

    return res.status(200).json({
      success: true,
      data: {
        totalLeads,
        inquiries,
        consultations,
        healthCheckups,
        leadMagnets,
        applications,
        servicesCount,
        projectsCount,
        articlesCount,
        jobsCount,
      },
    });
  } catch (error) {
    console.error('Error in /api/admin/metrics:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve metrics.',
      error: error.message,
    });
  }
});

/**
 * 2. GET /api/admin/inquiries
 * Retrieves all general contact enquiries.
 */
router.get('/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries.',
      error: error.message,
    });
  }
});

/**
 * 3. GET /api/admin/consultations
 * Retrieves all consultation requests.
 */
router.get('/consultations', async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve consultations.',
      error: error.message,
    });
  }
});

/**
 * 4. GET /api/admin/health-checkups
 * Retrieves all business health checkup leads.
 */
router.get('/health-checkups', async (req, res) => {
  try {
    const checkups = await HealthCheckup.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: checkups.length,
      data: checkups,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve health checkups.',
      error: error.message,
    });
  }
});

/**
 * 5. GET /api/admin/lead-magnets
 * Retrieves all project guide lead magnet downloads.
 */
router.get('/lead-magnets', async (req, res) => {
  try {
    const leads = await LeadMagnet.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve lead magnet downloads.',
      error: error.message,
    });
  }
});

/**
 * 6. GET /api/admin/applications
 * Retrieves all career job applications.
 */
router.get('/applications', async (req, res) => {
  try {
    const applications = await CareerApplication.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve career applications.',
      error: error.message,
    });
  }
});

/**
 * 7. PATCH /api/admin/inquiries/:id/status
 * Updates the workflow status of an inquiry.
 */
router.patch('/inquiries/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: inquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update status',
      error: error.message,
    });
  }
});

/**
 * 8. PATCH /api/admin/applications/:id/status
 * Updates the review status of a career application.
 */
router.patch('/applications/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await CareerApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Application status updated successfully',
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update application status',
      error: error.message,
    });
  }
});

export default router;
