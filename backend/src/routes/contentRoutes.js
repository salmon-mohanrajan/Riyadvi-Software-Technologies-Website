import express from 'express';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import Article from '../models/Article.js';
import Job from '../models/Job.js';

const router = express.Router();

// Helper to generate a URL-safe slug from title if not provided
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');

// ==============================================================================
// 1. SERVICES CRUD
// ==============================================================================

// GET all services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: services.length, data: services });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE a service
router.post('/services', async (req, res) => {
  try {
    const body = { ...req.body };
    if (!body.slug && body.title) {
      body.slug = slugify(body.title);
    }
    const service = await Service.create(body);
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// UPDATE a service
router.put('/services/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE a service
router.delete('/services/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }
    res.status(200).json({ success: true, message: 'Service successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==============================================================================
// 2. PROJECTS CRUD
// ==============================================================================

// GET all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE a project
router.post('/projects', async (req, res) => {
  try {
    const body = { ...req.body };
    if (!body.slug && body.title) {
      body.slug = slugify(body.title);
    }
    if (!body.challenge) {
      body.challenge = body.shortDesc || 'Engineering high-scale digital architecture.';
    }
    if (!body.solution) {
      body.solution = body.shortDesc || 'Engineered custom full-stack solutions with 60 FPS performance.';
    }
    const project = await Project.create(body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// UPDATE a project
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE a project
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    res.status(200).json({ success: true, message: 'Project successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==============================================================================
// 3. ARTICLES (BLOG) CRUD
// ==============================================================================

// GET all articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE an article
router.post('/articles', async (req, res) => {
  try {
    const body = { ...req.body };
    if (!body.slug && body.title) {
      body.slug = slugify(body.title);
    }
    const article = await Article.create(body);
    res.status(201).json({ success: true, data: article });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// UPDATE an article
router.put('/articles/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.status(200).json({ success: true, data: article });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE an article
router.delete('/articles/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.status(200).json({ success: true, message: 'Article successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==============================================================================
// 4. JOBS (CAREERS) CRUD
// ==============================================================================

// GET all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE a job
router.post('/jobs', async (req, res) => {
  try {
    const body = { ...req.body };
    if (!body.slug && body.title) {
      body.slug = slugify(body.title);
    }
    if (!body.designation && body.title) {
      body.designation = body.title;
    }
    const job = await Job.create(body);
    res.status(201).json({ success: true, data: job });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// UPDATE a job
router.put('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }
    res.status(200).json({ success: true, data: job });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE a job
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }
    res.status(200).json({ success: true, message: 'Job successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
