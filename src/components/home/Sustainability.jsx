import React from 'react'
import {
  Download,
  LeafIcon,
  TreesIcon,
  GlobeIcon,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react'
export function Sustainability() {
  const metrics = [
    {
      label: 'Carbon Reduction',
      value: '45%',
      description: 'Decrease in carbon emissions since 2020',
      icon: LeafIcon,
      color: 'from-emerald-400 to-green-500',
    },
    {
      label: 'Green Buildings',
      value: '32',
      description: 'LEED-certified projects completed',
      icon: TreesIcon,
      color: 'from-teal-400 to-emerald-500',
    },
    {
      label: 'Energy Efficiency',
      value: '38%',
      description: 'Average energy savings in our buildings',
      icon: GlobeIcon,
      color: 'from-cyan-400 to-teal-500',
    },
  ]
  const reports = [
    {
      title: '2023 Sustainability Report',
      description:
        'Comprehensive overview of our environmental initiatives and achievements',
      size: '4.2 MB',
      date: 'Dec 2023',
    },
    {
      title: 'Environmental Impact Assessment',
      description:
        'Detailed analysis of our carbon footprint and reduction strategies',
      size: '2.8 MB',
      date: 'Nov 2023',
    },
  ]
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-gray-50">
      </div>
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Enhanced Header Section */}
        <div className="flex flex-col lg:flex-row items-start gap-20 mb-32">
          <div className="lg:w-1/2 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-800 tracking-wider">
                  SUSTAINABILITY VISION
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Building a</span>
                <div className="relative mt-2">
                  <span className="relative bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Sustainable Future
                  </span>
                </div>
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pt-16 relative">          
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to sustainable development goes beyond
                construction. We're dedicated to creating environmentally
                responsible structures that benefit communities and protect our
                planet for generations to come.
              </p>
            </div>
          </div>
        </div>
        {/* Enhanced Metrics Section */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative p-1">
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      '--tw-gradient-from': '#34d399',
                      '--tw-gradient-to': '#14b8a6',
                    }}
                  ></div>
                  <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-20 blur-lg`}
                        ></div>
                        <div
                          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
                        >
                          <metric.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            {metric.value}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                          {metric.label}
                        </h3>
                        <p className="text-gray-500">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Enhanced Reports Section */}
        <div className="relative">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-2xl font-bold text-gray-900">
              Sustainability Reports
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="group relative transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 transform rotate-45 translate-x-16 -translate-y-16"></div>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                          {report.title}
                        </h4>
                        <p className="text-gray-500 mb-6">
                          {report.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span>{report.date}</span>
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            <span>{report.size}</span>
                          </div>
                        </div>
                      </div>
                      <button className="relative group/btn flex items-center justify-center w-14 h-14">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-10 group-hover/btn:opacity-20 blur-lg transition-opacity"></div>
                        <div className="relative w-12 h-12 rounded-xl border-2 border-emerald-500/30 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/50">
                          <ArrowUpRight className="w-6 h-6 text-emerald-600 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
