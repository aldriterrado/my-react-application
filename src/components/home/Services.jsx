import React from 'react'
import { ServiceCard } from './ServiceCard'
import { Building2, Cog, HomeIcon, Leaf } from 'lucide-react'
export function Services() {
  const services = [
    {
      title: 'General Construction',
      description:
        'Complete construction solutions from residential to commercial buildings. Our expert team handles projects of any scale with precision and quality.',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: Building2,
      color: 'from-blue-600/80 to-blue-500/80',
      accent: 'bg-blue-500',
      border: 'border-blue-100',
      glow: 'bg-blue-500/20',

      
    },
    {
      title: 'Specialized Engineering',
      description:
        'Advanced engineering services with innovative solutions for complex structural challenges. Our engineers bring expertise to every project.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: Cog,
      color: 'from-cyan-600/80 to-cyan-500/80',
      accent: 'bg-cyan-500',
      border: 'border-cyan-100',
      glow: 'bg-cyan-500/20',
    },
    {
      title: 'Property Development',
      description:
        'End-to-end property development services from land acquisition to project completion. We transform visions into valuable real estate assets.',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      icon: HomeIcon,
      color: 'from-violet-600/80 to-violet-500/80',
      accent: 'bg-violet-500',
      border: 'border-violet-100',
      glow: 'bg-violet-500/20',
    },
    {
      title: 'Green Technology',
      description:
        'Sustainable building solutions incorporating the latest green technologies. We help reduce environmental impact while maximizing efficiency.',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: Leaf,
      color: 'from-emerald-600/80 to-emerald-500/80',
      accent: 'bg-emerald-500',
      border: 'border-emerald-100',
      glow: 'bg-emerald-500/20',
    },
  ]
  return (
    <main className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="flex flex-col gap-32">
          {/* Header Section */}
          <div className="relative">
            <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-8">
                <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 animate-pulse"></div>
                <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                  SERVICES OVERVIEW
                </span>
              </div>
              <h2 className="text-7xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                <span className="bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-transparent">
                  Modern Solutions
                </span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    For Tomorrow
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 -rotate-2 transform -skew-x-12"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
                Delivering excellence through innovative engineering and
                sustainable development practices.
              </p>
            </div>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group transform ${index % 2 === 0 ? 'lg:translate-y-12' : ''}`}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  Icon={service.icon}
                  color={service.color}
                  accent={service.accent}
                  border={service.border}
                  glow={service.glow}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
