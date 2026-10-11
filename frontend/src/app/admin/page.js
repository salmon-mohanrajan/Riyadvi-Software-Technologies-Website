'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/api';
import {
  ShieldCheck,
  Activity,
  FileText,
  Briefcase,
  Calendar,
  RefreshCw,
  Mail,
  Building,
  CheckCircle2,
  Clock,
  ExternalLink,
  Plus,
  Edit2,
  Trash2,
  Layers,
  Sparkles,
  BookOpen,
  Box,
  X,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    inquiries: 0,
    consultations: 0,
    healthCheckups: 0,
    leadMagnets: 0,
    applications: 0,
    servicesCount: 0,
    projectsCount: 0,
    articlesCount: 0,
    jobsCount: 0,
  });

  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [healthCheckups, setHealthCheckups] = useState([]);
  const [applications, setApplications] = useState([]);
  const [leadMagnets, setLeadMagnets] = useState([]);

  // CRUD Content Collections
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State for CRUD operations
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('service'); // 'service' | 'project' | 'article' | 'job'
  const [modalMode, setModalMode] = useState('create'); // 'create' | 'edit'
  const [editingId, setEditingId] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Form State
  const [formData, setFormData] = useState({});

  // 1. Fetch metrics & all records from backend
  const fetchData = async () => {
    setLoading(true);
    try {
      // Metrics
      const metricsRes = await fetch(`${API_BASE_URL}/api/admin/metrics`);
      const metricsJson = await metricsRes.json();
      if (metricsJson.success) setMetrics(metricsJson.data);

      // Inquiries
      const inqRes = await fetch(`${API_BASE_URL}/api/admin/inquiries`);
      const inqJson = await inqRes.json();
      if (inqJson.success) setInquiries(inqJson.data);

      // Health Checkups
      const hcRes = await fetch(`${API_BASE_URL}/api/admin/health-checkups`);
      const hcJson = await hcRes.json();
      if (hcJson.success) setHealthCheckups(hcJson.data);

      // Applications
      const appRes = await fetch(`${API_BASE_URL}/api/admin/applications`);
      const appJson = await appRes.json();
      if (appJson.success) setApplications(appJson.data);

      // Lead Magnets
      const lmRes = await fetch(`${API_BASE_URL}/api/admin/lead-magnets`);
      const lmJson = await lmRes.json();
      if (lmJson.success) setLeadMagnets(lmJson.data);

      // Content CRUD data
      const [sRes, pRes, aRes, jRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/content/services`),
        fetch(`${API_BASE_URL}/api/content/projects`),
        fetch(`${API_BASE_URL}/api/content/articles`),
        fetch(`${API_BASE_URL}/api/content/jobs`),
      ]);

      const sData = await sRes.json();
      const pData = await pRes.json();
      const aData = await aRes.json();
      const jData = await jRes.json();

      if (sData.success) setServices(sData.data);
      if (pData.success) setProjects(pData.data);
      if (aData.success) setArticles(aData.data);
      if (jData.success) setJobs(jData.data);
    } catch (err) {
      console.warn('Backend fetch notice:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update status of an inquiry live in MongoDB
  const updateInquiryStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status } : item))
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  // Open Modal for Create
  const handleOpenCreate = (type) => {
    setModalType(type);
    setModalMode('create');
    setEditingId(null);
    setFormData({});
    setModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEdit = (type, item) => {
    setModalType(type);
    setModalMode('edit');
    setEditingId(item._id);

    // Prepare form fields
    if (type === 'service') {
      setFormData({
        title: item.title || '',
        slug: item.slug || '',
        tagline: item.tagline || '',
        shortDescription: item.shortDescription || '',
        problem: item.problem || '',
        solution: item.solution || '',
        techStack: (item.techStack || []).join(', '),
      });
    } else if (type === 'project') {
      setFormData({
        title: item.title || '',
        slug: item.slug || '',
        client: item.client || '',
        industry: item.industry || '',
        featured: !!item.featured,
        has3DExperience: !!item.has3DExperience,
        interactive3DType: item.interactive3DType || 'none',
        shortDesc: item.shortDesc || '',
        challenge: item.challenge || '',
        solution: item.solution || '',
        technologies: (item.technologies || []).join(', '),
      });
    } else if (type === 'article') {
      setFormData({
        title: item.title || '',
        slug: item.slug || '',
        category: item.category || 'Engineering Architecture',
        featured: !!item.featured,
        publishedAt: item.publishedAt || '',
        readTime: item.readTime || '5 min read',
        authorName: item.author?.name || '',
        authorRole: item.author?.role || '',
        excerpt: item.excerpt || '',
        content: item.content || '',
        tags: (item.tags || []).join(', '),
      });
    } else if (type === 'job') {
      setFormData({
        title: item.title || '',
        slug: item.slug || '',
        department: item.department || 'Engineering',
        designation: item.designation || '',
        experience: item.experience || '',
        location: item.location || 'Remote / Hybrid (Bengaluru, IN)',
        type: item.type || 'Full-time',
        salaryRange: item.salaryRange || 'Competitive',
        overview: item.overview || '',
      });
    }

    setModalOpen(true);
  };

  // Delete an item
  const handleDelete = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const endpointMap = {
        service: `${API_BASE_URL}/api/content/services/${id}`,
        project: `${API_BASE_URL}/api/content/projects/${id}`,
        article: `${API_BASE_URL}/api/content/articles/${id}`,
        job: `${API_BASE_URL}/api/content/jobs/${id}`,
      };

      const res = await fetch(endpointMap[type], { method: 'DELETE' });
      const contentType = res.headers.get('content-type') || '';

      if (!res.ok) {
        if (contentType.includes('application/json')) {
          const errJson = await res.json();
          alert(`Delete failed (${res.status}): ${errJson.error || errJson.message || 'Error deleting item'}`);
        } else {
          alert(`Delete failed (${res.status}): Server returned non-JSON response. Please verify backend availability.`);
        }
        return;
      }

      const json = await res.json();

      if (json.success) {
        if (type === 'service') setServices((prev) => prev.filter((i) => i._id !== id));
        if (type === 'project') setProjects((prev) => prev.filter((i) => i._id !== id));
        if (type === 'article') setArticles((prev) => prev.filter((i) => i._id !== id));
        if (type === 'job') setJobs((prev) => prev.filter((i) => i._id !== id));

        setFeedbackMsg(`Successfully deleted ${type}.`);
        setTimeout(() => setFeedbackMsg(''), 3000);
      } else {
        alert(json.error || 'Failed to delete');
      }
    } catch (err) {
      alert('Delete request failed: ' + err.message);
    }
  };

  // Save (Create or Update)
  const handleSaveSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpointBaseMap = {
        service: `${API_BASE_URL}/api/content/services`,
        project: `${API_BASE_URL}/api/content/projects`,
        article: `${API_BASE_URL}/api/content/articles`,
        job: `${API_BASE_URL}/api/content/jobs`,
      };

      const url =
        modalMode === 'create'
          ? endpointBaseMap[modalType]
          : `${endpointBaseMap[modalType]}/${editingId}`;

      const method = modalMode === 'create' ? 'POST' : 'PUT';

      // Process payload formatting
      const payload = { ...formData };
      if (modalType === 'job') {
        if (!payload.designation && payload.title) {
          payload.designation = payload.title;
        }
      }
      if (modalType === 'service' && payload.techStack) {
        payload.techStack = payload.techStack.split(',').map((s) => s.trim()).filter(Boolean);
      }
      if (modalType === 'project' && payload.technologies) {
        payload.technologies = payload.technologies.split(',').map((s) => s.trim()).filter(Boolean);
      }
      if (modalType === 'article') {
        if (payload.tags) {
          payload.tags = payload.tags.split(',').map((s) => s.trim()).filter(Boolean);
        }
        payload.author = {
          name: payload.authorName || 'Riyadvi Engineering',
          role: payload.authorRole || 'Architecture Lead',
        };
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type') || '';
      if (!res.ok) {
        if (contentType.includes('application/json')) {
          const errJson = await res.json();
          alert(`Server Error (${res.status}): ${errJson.error || errJson.message || 'Operation failed'}`);
        } else {
          alert(
            `Backend Connection Notice (${res.status}): The API did not return JSON.\n\n` +
            `Target endpoint: ${url}\n\n` +
            `Common causes:\n` +
            `1. Render free-tier sleep: If backend was idle for 15 minutes, Render takes 30-50s to boot up. Please retry in 30 seconds.\n` +
            `2. In Vercel Environment Variables, ensure NEXT_PUBLIC_API_URL is set to your Render backend URL (e.g. https://your-backend.onrender.com).\n` +
            `3. If NEXT_PUBLIC_API_URL ended with '/api', redeploy or refresh after updating it.`
          );
        }
        return;
      }

      const json = await res.json();

      if (json.success) {
        setFeedbackMsg(`Successfully ${modalMode === 'create' ? 'created' : 'updated'} ${modalType}!`);
        setTimeout(() => setFeedbackMsg(''), 3000);
        setModalOpen(false);
        fetchData(); // Refresh table state
      } else {
        alert(json.error || 'Operation failed');
      }
    } catch (err) {
      alert('Error submitting form: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Feedback Toast */}
      {feedbackMsg && (
        <div className="fixed top-20 right-6 z-50 bg-[#D4AF37] text-black font-bold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Enterprise Mission-Control &amp; CMS
            </h1>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Connected Live to Express &amp; MongoDB Microservice API (<code>{API_BASE_URL}</code>)
          </p>
        </div>

        <button
          onClick={fetchData}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#D4AF37] ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh All Data</span>
        </button>
      </div>

      {/* High-Level Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {[
          { label: 'Enquiries', count: metrics.inquiries, icon: Mail, color: 'text-amber-400', bg: 'bg-amber-400/10' },
          { label: 'Checkups', count: metrics.healthCheckups, icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
          { label: 'Guides', count: metrics.leadMagnets, icon: FileText, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'Applications', count: metrics.applications, icon: Briefcase, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          { label: 'Services', count: services.length, icon: Layers, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/10' },
          { label: 'Projects', count: projects.length, icon: Box, color: 'text-pink-400', bg: 'bg-pink-400/10' },
          { label: 'Articles', count: articles.length, icon: BookOpen, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
          { label: 'Job Roles', count: jobs.length, icon: Briefcase, color: 'text-teal-400', bg: 'bg-teal-400/10' },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="glass-panel rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400 truncate">{kpi.label}</span>
                <div className={`w-6 h-6 rounded-md ${kpi.bg} flex items-center justify-center ${kpi.color}`}>
                  <Icon className="w-3 h-3" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white font-mono">{kpi.count}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs (Leads vs CMS) */}
      <div className="space-y-3">
        <div className="flex border-b border-white/10 gap-2 overflow-x-auto pb-1 text-xs font-semibold">
          {/* Leads Section */}
          {[
            { id: 'inquiries', label: `Contact Enquiries (${inquiries.length})` },
            { id: 'health-checkups', label: `Health Checkups (${healthCheckups.length})` },
            { id: 'applications', label: `Job Applicants (${applications.length})` },
            { id: 'lead-magnets', label: `Guide Downloads (${leadMagnets.length})` },
            { id: 'services-cms', label: `⚙️ Services CMS (${services.length})` },
            { id: 'projects-cms', label: `🚀 Projects CMS (${projects.length})` },
            { id: 'articles-cms', label: `✍️ Blog CMS (${articles.length})` },
            { id: 'jobs-cms', label: `💼 Jobs CMS (${jobs.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#121520] text-[#D4AF37] border-t-2 border-x border-[#D4AF37]/40 font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Data Views */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden">
        
        {/* ---------------------------------------------------- */}
        {/* TAB 1: Contact Enquiries Table                       */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              Inbound Project Inquiries
            </h3>
            {inquiries.length === 0 ? (
              <p className="text-sm text-gray-500 py-8 text-center">No contact inquiries recorded yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Client</th>
                      <th className="p-3">Contact</th>
                      <th className="p-3">Requirement</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Received</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {inquiries.map((inq) => (
                      <tr key={inq._id} className="hover:bg-white/[0.02]">
                        <td className="p-3">
                          <p className="font-bold text-white">{inq.name}</p>
                          <p className="text-[11px] text-gray-400">{inq.company || 'Direct Client'}</p>
                        </td>
                        <td className="p-3">
                          <p>{inq.email}</p>
                          <p className="text-[11px] text-gray-400">{inq.phone || 'No phone'}</p>
                        </td>
                        <td className="p-3 max-w-xs">
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-[#D4AF37] block font-mono mb-1 truncate">
                            {inq.requirement}
                          </span>
                          <p className="line-clamp-2 text-gray-400 text-[11px]">{inq.message}</p>
                        </td>
                        <td className="p-3">
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq._id, e.target.value)}
                            className="bg-black/80 border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>
                        <td className="p-3 text-[11px] text-gray-400 whitespace-nowrap">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 2: Health Checkups Table                         */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'health-checkups' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Business Health Checkup Leads
            </h3>
            {healthCheckups.length === 0 ? (
              <p className="text-sm text-gray-500 py-8 text-center">No diagnostic checkups completed yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Company / Lead</th>
                      <th className="p-3">Calculated Score</th>
                      <th className="p-3">Key Friction Area</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {healthCheckups.map((hc) => (
                      <tr key={hc._id} className="hover:bg-white/[0.02]">
                        <td className="p-3">
                          <p className="font-bold text-white">{hc.company || 'Enterprise Lead'}</p>
                          <p className="text-[11px] text-gray-400">{hc.email}</p>
                        </td>
                        <td className="p-3">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold font-mono">
                            {hc.calculatedScore} / 100
                          </span>
                        </td>
                        <td className="p-3 max-w-xs text-[11px] text-gray-400">
                          {hc.answers?.q1 || hc.answers?.q2 || 'Audit Recorded'}
                        </td>
                        <td className="p-3 text-[11px] text-gray-400 whitespace-nowrap">
                          {new Date(hc.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 3: Job Applicants Table                          */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Career Job Applicants
            </h3>
            {applications.length === 0 ? (
              <p className="text-sm text-gray-500 py-8 text-center">No applications received yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Candidate</th>
                      <th className="p-3">Role Applied</th>
                      <th className="p-3">Portfolio / Resume</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Applied Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {applications.map((app) => (
                      <tr key={app._id} className="hover:bg-white/[0.02]">
                        <td className="p-3">
                          <p className="font-bold text-white">{app.name}</p>
                          <p className="text-[11px] text-gray-400">{app.email}</p>
                        </td>
                        <td className="p-3 font-semibold text-white">{app.position}</td>
                        <td className="p-3">
                          {app.resumeLink ? (
                            <a
                              href={app.resumeLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-mono text-[11px]"
                            >
                              <span>View Resume</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-gray-500 font-mono text-[11px]">No link</span>
                          )}
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono">{app.status}</span>
                        </td>
                        <td className="p-3 text-[11px] text-gray-400 whitespace-nowrap">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 4: Lead Magnets Table                            */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'lead-magnets' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              Software Planning Guide Downloads
            </h3>
            {leadMagnets.length === 0 ? (
              <p className="text-sm text-gray-500 py-8 text-center">No guide downloads registered yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Registrant</th>
                      <th className="p-3">Company &amp; Role</th>
                      <th className="p-3">Estimated Scope</th>
                      <th className="p-3">Download Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {leadMagnets.map((lm) => (
                      <tr key={lm._id} className="hover:bg-white/[0.02]">
                        <td className="p-3">
                          <p className="font-bold text-white">{lm.name}</p>
                          <p className="text-[11px] text-gray-400">{lm.email}</p>
                        </td>
                        <td className="p-3">
                          <p>{lm.company || 'Not Specified'}</p>
                          <p className="text-[11px] text-gray-400">{lm.role}</p>
                        </td>
                        <td className="p-3 font-mono text-[11px] text-[#D4AF37]">{lm.estimatedBudget || 'Standard'}</td>
                        <td className="p-3 text-[11px] text-gray-400 whitespace-nowrap">
                          {new Date(lm.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 5: SERVICES CRUD                                 */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'services-cms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  Services Directory Management
                </h3>
                <p className="text-xs text-gray-400">Add, edit, or delete core services dynamically in MongoDB.</p>
              </div>
              <button
                onClick={() => handleOpenCreate('service')}
                className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Service Title</th>
                    <th className="p-3">Slug</th>
                    <th className="p-3">Tagline</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {services.map((item) => (
                    <tr key={item._id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-white">
                        <Link href={`/services/${item.slug}`} className="hover:text-[#D4AF37] flex items-center gap-1">
                          <span>{item.title}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </Link>
                      </td>
                      <td className="p-3 font-mono text-gray-400">{item.slug}</td>
                      <td className="p-3 text-gray-300 max-w-xs truncate">{item.tagline}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEdit('service', item)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white mr-2"
                          title="Edit Service"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                        <button
                          onClick={() => handleDelete('service', item._id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                          title="Delete Service"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 6: PROJECTS / PORTFOLIO CRUD                     */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'projects-cms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Box className="w-4 h-4 text-pink-400" />
                  Portfolio Case Studies Management
                </h3>
                <p className="text-xs text-gray-400">Add, edit, or delete case studies &amp; 3D experiences in MongoDB.</p>
              </div>
              <button
                onClick={() => handleOpenCreate('project')}
                className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Project Title</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">3D Showcase</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {projects.map((item) => (
                    <tr key={item._id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-white">
                        <Link href={`/portfolio/${item.slug}`} className="hover:text-[#D4AF37] flex items-center gap-1">
                          <span>{item.title}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </Link>
                      </td>
                      <td className="p-3 text-gray-300">{item.client}</td>
                      <td className="p-3 font-mono text-[11px]">
                        {item.has3DExperience ? (
                          <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                            {item.interactive3DType}
                          </span>
                        ) : (
                          <span className="text-gray-500">None</span>
                        )}
                      </td>
                      <td className="p-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEdit('project', item)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white mr-2"
                          title="Edit Project"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                        <button
                          onClick={() => handleDelete('project', item._id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 7: BLOG ARTICLES CRUD                            */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'articles-cms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Technical Blog Articles Management
                </h3>
                <p className="text-xs text-gray-400">Add, edit, or delete tech insights published on /blog.</p>
              </div>
              <button
                onClick={() => handleOpenCreate('article')}
                className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Article</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Article Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Published</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {articles.map((item) => (
                    <tr key={item._id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-white">
                        <Link href={`/blog/${item.slug}`} className="hover:text-[#D4AF37] flex items-center gap-1">
                          <span>{item.title}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </Link>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-[11px]">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3 text-gray-400 text-[11px]">{item.publishedAt}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEdit('article', item)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white mr-2"
                          title="Edit Article"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                        <button
                          onClick={() => handleDelete('article', item._id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 8: CAREERS JOBS CRUD                             */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'jobs-cms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-teal-400" />
                  Careers Job Openings Management
                </h3>
                <p className="text-xs text-gray-400">Post, modify, or remove open job listings under /careers.</p>
              </div>
              <button
                onClick={() => handleOpenCreate('job')}
                className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Post Job</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-gray-400 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Job Role</th>
                    <th className="p-3">Department</th>
                    <th className="p-3">Experience</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {jobs.map((item) => (
                    <tr key={item._id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-white">
                        <Link href={`/careers/${item.slug}`} className="hover:text-[#D4AF37] flex items-center gap-1">
                          <span>{item.title}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </Link>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-[11px]">
                          {item.department}
                        </span>
                      </td>
                      <td className="p-3 text-gray-400 text-[11px]">{item.experience}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEdit('job', item)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white mr-2"
                          title="Edit Job"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                        <button
                          onClick={() => handleDelete('job', item._id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                          title="Delete Job"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* ==================================================== */}
      {/* UNIVERSAL CRUD MODAL FORM (OBSIDIAN & GOLD)          */}
      {/* ==================================================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0C0F1A] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1 capitalize">
              {modalMode} {modalType}
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill in the details below. Data will be saved directly into MongoDB.
            </p>

            <form onSubmit={handleSaveSubmit} className="space-y-4 text-xs">
              
              {/* Universal Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    placeholder="e.g. AI-Powered ERP Suite"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Slug (URL identifier)</label>
                  <input
                    type="text"
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                    placeholder="auto-generated-if-empty"
                  />
                </div>
              </div>

              {/* SERVICE SPECIFIC FIELDS */}
              {modalType === 'service' && (
                <>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Tagline</label>
                    <input
                      type="text"
                      required
                      value={formData.tagline || ''}
                      onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      placeholder="e.g. Scalable Enterprise Web Engineering"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      required
                      value={formData.shortDescription || ''}
                      onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Client Problem</label>
                      <textarea
                        rows={2}
                        value={formData.problem || ''}
                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Riyadvi Solution</label>
                      <textarea
                        rows={2}
                        value={formData.solution || ''}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Tech Stack (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.techStack || ''}
                      onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                      placeholder="Next.js, Three.js, Node.js, MongoDB"
                    />
                  </div>
                </>
              )}

              {/* PROJECT SPECIFIC FIELDS */}
              {modalType === 'project' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Client Name</label>
                      <input
                        type="text"
                        required
                        value={formData.client || ''}
                        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Industry</label>
                      <input
                        type="text"
                        required
                        value={formData.industry || ''}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      required
                      value={formData.shortDesc || ''}
                      onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div className="flex items-center gap-6 py-2">
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input
                        type="checkbox"
                        checked={!!formData.has3DExperience}
                        onChange={(e) => setFormData({ ...formData, has3DExperience: e.target.checked })}
                        className="w-4 h-4 text-[#D4AF37] rounded"
                      />
                      <span>Has 3D Experience</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">3D Type:</span>
                      <select
                        value={formData.interactive3DType || 'none'}
                        onChange={(e) => setFormData({ ...formData, interactive3DType: e.target.value })}
                        className="bg-black border border-white/20 rounded-lg px-2 py-1 text-white"
                      >
                        <option value="none">None</option>
                        <option value="perfume-bottle-3d">Perfume Bottle 3D</option>
                        <option value="architectural-cube-3d">Architectural Tower 3D</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.technologies || ''}
                      onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </>
              )}

              {/* ARTICLE SPECIFIC FIELDS */}
              {modalType === 'article' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Category</label>
                      <input
                        type="text"
                        required
                        value={formData.category || ''}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Read Time</label>
                      <input
                        type="text"
                        value={formData.readTime || ''}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="e.g. 6 min read"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Excerpt</label>
                    <textarea
                      rows={2}
                      required
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Article Content</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                      placeholder="Use markdown headers and paragraphs..."
                    />
                  </div>
                </>
              )}

              {/* JOB SPECIFIC FIELDS */}
              {modalType === 'job' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Department</label>
                      <input
                        type="text"
                        required
                        value={formData.department || ''}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="Engineering, Design, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Designation</label>
                      <input
                        type="text"
                        value={formData.designation || ''}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="e.g. Frontend Engineer"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Experience Level</label>
                      <input
                        type="text"
                        required
                        value={formData.experience || ''}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="Senior (5+ yrs)"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Location</label>
                      <input
                        type="text"
                        value={formData.location || ''}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Salary Range</label>
                      <input
                        type="text"
                        value={formData.salaryRange || ''}
                        onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Role Overview</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.overview || ''}
                      onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </>
              )}

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#D4AF37] text-black font-bold hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
                >
                  {modalMode === 'create' ? 'Create & Save' : 'Save Changes'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
