'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  careersData,
  careerDepartments,
  careerExperienceLevels,
} from '@/data/careersData';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
} from 'lucide-react';

export default function CareersIndexPage() {
  const [jobs, setJobs] = useState(careersData);
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/content/jobs')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data?.length > 0) {
          setJobs(json.data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchDept = selectedDept === 'All' || job.department === selectedDept;
    const matchExp =
      selectedExp === 'All' ||
      job.experience?.toLowerCase().includes(selectedExp.toLowerCase().split(' ')[0]);
    return matchDept && matchExp;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Talent & Engineering Culture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Join the Architects of <span className="text-gradient-gold">Digital Transformation</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          At Riyadvi, we combine full-stack engineering with real-time 3D WebGL experiences and
          enterprise AI. We are building the next generation of spatial and cloud products.
        </p>
      </div>

      {/* Filter Control Bar (Section 22) */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-wider">
          <Filter className="w-4 h-4 text-[#D4AF37]" />
          <span>Filter Opportunities</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          {/* Department Filter */}
          <div className="space-y-1.5 w-full sm:w-auto">
            <span className="text-[11px] text-gray-400 font-medium">Department</span>
            <div className="flex flex-wrap gap-2">
              {careerDepartments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedDept === dept
                      ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Filter */}
          <div className="space-y-1.5 w-full sm:w-auto">
            <span className="text-[11px] text-gray-400 font-medium">Experience Level</span>
            <div className="flex flex-wrap gap-2">
              {careerExperienceLevels.map((exp) => (
                <button
                  key={exp}
                  onClick={() => setSelectedExp(exp)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedExp === exp
                      ? 'bg-white/20 text-white border border-[#D4AF37]/40'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings (Section 22) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-gray-400 px-2 font-mono">
          <span>Showing {filteredJobs.length} Open Positions</span>
          <span>Bengaluru & Remote</span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium">
                    {job.experience}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-medium">
                    {job.salaryRange}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {job.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {job.overview}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {job.type}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <Link
                  href={`/careers/${job.slug}`}
                  className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Role & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
