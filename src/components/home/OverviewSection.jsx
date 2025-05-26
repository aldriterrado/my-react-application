import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BuildingIcon,
  CogIcon,
  HomeIcon,
  LeafIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from 'lucide-react'
const businessVerticals = [
  {
    id: 'general-construction',
    title: 'General Construction',
    icon: BuildingIcon,
    image:
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1200',
    description:
      'Delivering excellence in construction with innovative design-build solutions for commercial, residential, and infrastructure projects.',
    stats: [
      '98% Client Satisfaction',
      '250+ Projects Completed',
      '15+ Years Experience',
    ],
    path: '/general-construction'
  },
  {
    id: 'specialised-engineering',
    title: 'Specialised Engineering',
    icon: CogIcon,
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    description:
      'Advanced engineering solutions utilizing cutting-edge technology in post-tensioning, cable systems, and precision construction.',
    stats: ['ISO 9001 Certified', '100+ Expert Engineers', '30+ Patents'],
    path: '/specialised-engineering'
  },
  {
    id: 'property-development',
    title: 'Property Development',
    icon: HomeIcon,
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    description:
      "Creating sustainable, modern living spaces that blend innovative design with practical functionality for tomorrow's communities.",
    stats: ['1M+ sqft Developed', '20+ Prime Locations', '40+ Awards'],
    path: '/property-development'
  },
  {
    id: 'green-technology',
    title: 'Green Technology',
    icon: LeafIcon,
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200',
    description:
      'Pioneering sustainable construction practices with innovative green technologies and renewable energy solutions.',
    stats: ['30% Energy Savings', 'Zero Carbon Goals', 'LEED Certified'],
    path: '/green-technology'
  },
]
function OverviewSection() {
  const [activeTab, setActiveTab] = useState('general-construction')
  const activeService =
    businessVerticals.find((v) => v.id === activeTab) || businessVerticals[0]
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50 py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 text-sm font-medium uppercase">
              Discover Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
            Our Core{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Expertise
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/20 to-sky-500/20 rounded-full"></div>
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Building tomorrow's world with innovative solutions and sustainable
            practices
          </p>
        </div>
        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="bg-white/50 backdrop-blur-sm p-2 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {businessVerticals.map((vertical) => (
                <button
                  key={vertical.id}
                  onClick={() => setActiveTab(vertical.id)}
                  className={`
                    group relative px-6 py-3 rounded-xl transition-all duration-300
                    ${activeTab === vertical.id ? 'bg-gradient-to-r from-blue-500/10 to-sky-500/10' : 'hover:bg-gray-50'}
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`
                      p-2 rounded-lg transition-all duration-300
                      ${activeTab === vertical.id ? 'bg-white shadow-md shadow-blue-500/10' : 'bg-gray-50 group-hover:bg-white'}
                    `}
                    >
                      <vertical.icon
                        className={`w-5 h-5 transition-colors ${activeTab === vertical.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                      />
                    </div>
                    <span
                      className={`font-medium transition-colors ${activeTab === vertical.id ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}
                    >
                      {vertical.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Left Content */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-sky-500/5 rounded-3xl blur"></div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-200/50">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              {/* Enhanced Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeService.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 transform transition-all duration-500 hover:-translate-y-1 border border-white/10"
                    >
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 mb-1">
                        {stat.split(' ')[0]}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {stat.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced Right Content */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl blur opacity-30"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center relative">
                    <activeService.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  {activeService.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeService.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm">
                  <h4 className="flex items-center text-gray-900 font-semibold mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    Leading-edge solutions and advanced methodologies
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm">
                  <h4 className="flex items-center text-gray-900 font-semibold mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    Excellence
                  </h4>
                  <p className="text-gray-600">
                    Commitment to quality and sustainable practices
                  </p>
                </div>
              </div> 
              {activeService && (
                <div className='mt-8'>
                <Link to={activeService.path} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition"></div>
                    <span className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 rounded-xl text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
                    <span>Learn more</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>
                </div>
              )}           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewSection
