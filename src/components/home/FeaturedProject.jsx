import React from 'react'
import { ProjectCard } from './ProjectCard'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export function FeaturedProjects() {
  const projects = [
    {
      title: 'Skyline Tower Complex',
      category: 'Commercial Development',
      description:
        'A 45-story mixed-use development featuring premium office spaces, luxury retail, and sustainable design innovations.',
      image:
        'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      year: '2023',
    },
    {
      title: 'Green Valley Residences',
      category: 'Residential',
      description:
        'Eco-friendly residential community with smart home technology and extensive green spaces.',
      image:
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      year: '2023',
    },
    {
      title: 'Tech Innovation Hub',
      category: 'Industrial',
      description:
        'State-of-the-art research and development facility with advanced engineering laboratories.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      year: '2022',
    },
  ]
  return (
    <section className="py-30 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-8">
                <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 animate-pulse"></div>
                <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                  FEATURED PROJECTS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-gray-900">Transforming Visions into</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Architectural Excellence
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 -rotate-2 transform -skew-x-12"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our portfolio of innovative projects that redefine
                modern architecture and sustainable development.
              </p>
            </div>
            {/* CTA Button */}
            <Link className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-shadow z-10">
              View All Projects
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          {/* Projects List */}
          <div className="divide-y divide-gray-100">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
