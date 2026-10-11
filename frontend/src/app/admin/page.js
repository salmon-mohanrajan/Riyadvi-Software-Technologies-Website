'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  Activity,
  FileText,
  Briefcase,
  Calendar,
  RefreshCw,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    inquiries: 0,
    consultations: 0,
    healthCheckups: 0,
    leadMagnets: 0,
    applications: 0,
  });

  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [healthCheckups, setHealthCheckups] = useState([]);
  const [applications, setApplications] = useState([]);
  const [leadMagnets, setLeadMagnets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch metrics and active tab records from backend
  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch KPI Metrics (Section 28)
      const metricsRes = await fetch('http://127.0.0.1:5000/api/admin/metrics');
      const metricsJson = await metricsRes.json();
      if (metricsJson.success) {
        setMetrics(metricsJson.data);
      }

      // 2. Fetch Inquiries
      const inqRes = await fetch('http://127.0.0.1:5000/api/admin/inquiries');
      const inqJson = await inqRes.json();
      if (inqJson.success) setInquiries(inqJson.data);

      // 3. Fetch Health Checkups
      const hcRes = await fetch('http://127.0.0.1:5000/api/admin/health-checkups');
      const hcJson = await hcRes.json();
      if (hcJson.success) setHealthCheckups(hcJson.data);

      // 4. Fetch Applications
      const appRes = await fetch('http://127.0.0.1:5000/api/admin/applications');
      const appJson = await appRes.json();
      if (appJson.success) setApplications(appJson.data);

      // 5. Fetch Lead Magnets
      const lmRes = await fetch('http://127.0.0.1:5000/api/admin/lead-magnets');
      const lmJson = await lmRes.json();
      if (lmJson.success) setLeadMagnets(lmJson.data);
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
      const res = await fetch(`http://127.0.0.1:5000/api/admin/inquiries/${id}/status`, {
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

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Enterprise Lead Management Portal
            </h1>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Section 28 • Connected Live to Express & MongoDB API (`http://127.0.0.1:5000`)
          </p>
        </div>

        <button
          onClick={fetchData}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#D4AF37] ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* 5 KPI Metric Cards (Section 28) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          {
            label: 'Total Enquiries',
            count: metrics.inquiries,
            icon: Mail,
            color: 'text-amber-400',
            bg: 'bg-amber-400/10',
          },
          {
            label: 'Consultation Calls',
            count: metrics.consultations,
            icon: Calendar,
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
          },
          {
            label: 'Health Checkups',
            count: metrics.healthCheckups,
            icon: Activity,
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10',
          },
          {
            label: 'Planning Guides',
            count: metrics.leadMagnets,
            icon: FileText,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
          },
          {
            label: 'Job Applications',
            count: metrics.applications,
            icon: Briefcase,
            color: 'text-cyan-400',
            bg: 'bg-cyan-400/10',
          },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400">{kpi.label}</span>
                <div className={`w-7 h-7 rounded-lg ${kpi.bg} flex items-center justify-center ${kpi.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-white font-mono">{kpi.count}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-white/10 gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {[
          { id: 'inquiries', label: `Contact Enquiries (${inquiries.length})` },
          { id: 'health-checkups', label: `Health Checkups (${healthCheckups.length})` },
          { id: 'applications', label: `Job Applications (${applications.length})` },
          { id: 'lead-magnets', label: `Planning Guide Downloads (${leadMagnets.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#121520] text-[#D4AF37] border-t-2 border-x border-[#D4AF37]/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Data Views */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden">
        {/* ---------------------------------------------------- */}
        {/* TAB 1: Contact Enquiries Table (Section 28)          */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'inquiries' && (
          <div className="overflow-x-auto">
            {inquiries.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-10">No inquiries recorded yet.</p>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-mono">
                    <th className="pb-3 px-3">Name</th>
                    <th className="pb-3 px-3">Email & Phone</th>
                    <th className="pb-3 px-3">Company</th>
                    <th className="pb-3 px-3">Requirement</th>
                    <th className="pb-3 px-3">Date</th>
                    <th className="pb-3 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {inquiries.map((inq) => (
                    <tr key={inq._id} className="hover:bg-white/5">
                      <td className="py-3.5 px-3 font-bold text-white">{inq.name}</td>
                      <td className="py-3.5 px-3 text-gray-300">
                        <p>{inq.email}</p>
                        <p className="text-[11px] text-gray-500">{inq.phone || 'No phone'}</p>
                      </td>
                      <td className="py-3.5 px-3 text-gray-300">{inq.company || '—'}</td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] font-semibold text-[10px]">
                          {inq.requirement}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-gray-400 font-mono text-[11px]">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-3">
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq._id, e.target.value)}
                          className="bg-[#050608] border border-white/20 rounded-lg px-2 py-1 text-[11px] text-gray-200 focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="new">new</option>
                          <option value="contacted">contacted</option>
                          <option value="in-discussion">in-discussion</option>
                          <option value="closed">closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 2: Health Checkups Table (Section 28)            */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'health-checkups' && (
          <div className="overflow-x-auto">
            {healthCheckups.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-10">No health checkup leads yet.</p>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-mono">
                    <th className="pb-3 px-3">Business</th>
                    <th className="pb-3 px-3">Contact</th>
                    <th className="pb-3 px-3">Industry & Size</th>
                    <th className="pb-3 px-3 text-center">Calculated Score</th>
                    <th className="pb-3 px-3">Timeline</th>
                    <th className="pb-3 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {healthCheckups.map((hc) => (
                    <tr key={hc._id} className="hover:bg-white/5">
                      <td className="py-3.5 px-3 font-bold text-white">{hc.businessName}</td>
                      <td className="py-3.5 px-3 text-gray-300">
                        <p>{hc.contactName}</p>
                        <p className="text-[11px] text-gray-500">{hc.email}</p>
                      </td>
                      <td className="py-3.5 px-3 text-gray-300">
                        <p>{hc.industry}</p>
                        <p className="text-[11px] text-gray-500">{hc.companySize}</p>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] font-bold font-mono">
                          {hc.calculatedScore} / 100
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-gray-300 text-[11px]">{hc.targetTimeline}</td>
                      <td className="py-3.5 px-3 text-gray-400 font-mono text-[11px]">
                        {new Date(hc.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 3: Job Applications Table (Section 28)           */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'applications' && (
          <div className="overflow-x-auto">
            {applications.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-10">No job applications yet.</p>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-mono">
                    <th className="pb-3 px-3">Candidate</th>
                    <th className="pb-3 px-3">Position Applied</th>
                    <th className="pb-3 px-3">Email & Phone</th>
                    <th className="pb-3 px-3">Resume Link</th>
                    <th className="pb-3 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {applications.map((app) => (
                    <tr key={app._id} className="hover:bg-white/5">
                      <td className="py-3.5 px-3 font-bold text-white">{app.name}</td>
                      <td className="py-3.5 px-3 text-[#D4AF37] font-semibold">{app.position}</td>
                      <td className="py-3.5 px-3 text-gray-300">
                        <p>{app.email}</p>
                        <p className="text-[11px] text-gray-500">{app.phone}</p>
                      </td>
                      <td className="py-3.5 px-3">
                        {app.resumeUrl ? (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D4AF37] hover:underline inline-flex items-center gap-1 font-mono text-[11px]"
                          >
                            <span>View Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-gray-400 font-mono text-[11px]">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 4: Lead Magnets Table (Section 28)               */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'lead-magnets' && (
          <div className="overflow-x-auto">
            {leadMagnets.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-10">No lead magnet downloads yet.</p>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-mono">
                    <th className="pb-3 px-3">Lead Name</th>
                    <th className="pb-3 px-3">Company</th>
                    <th className="pb-3 px-3">Contact</th>
                    <th className="pb-3 px-3">Resource</th>
                    <th className="pb-3 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leadMagnets.map((lm) => (
                    <tr key={lm._id} className="hover:bg-white/5">
                      <td className="py-3.5 px-3 font-bold text-white">{lm.name}</td>
                      <td className="py-3.5 px-3 text-gray-300">{lm.company}</td>
                      <td className="py-3.5 px-3 text-gray-300">
                        <p>{lm.email}</p>
                        <p className="text-[11px] text-gray-500">{lm.phone}</p>
                      </td>
                      <td className="py-3.5 px-3 text-[#D4AF37] font-mono text-[11px]">
                        {lm.resourceRequested}
                      </td>
                      <td className="py-3.5 px-3 text-gray-400 font-mono text-[11px]">
                        {new Date(lm.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
