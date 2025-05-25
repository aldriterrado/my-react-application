import React from 'react'
import { ArrowUpRight } from 'lucide-react'
export function ProjectCard({
  title,
  category,
  description,
  image,
  year,
  index,
}) {
  return (
    <div className="group relative grid grid-cols-2 gap-8 items-center py-20">
      {/* Image Section */}
      <div
        className={`relative h-[600px] overflow-hidden rounded-3xl ${index % 2 === 1 ? 'order-2' : ''}`}
      >
        {/* Background Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        {/* Image */}
        <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      {/* Content Section */}
      <div
        className={`space-y-8 px-12 ${index % 2 === 1 ? 'order-1 text-right' : ''}`}
      >
        {/* Category & Year */}
        <div
          className={`flex items-center gap-4 text-sm ${index % 2 === 1 ? 'justify-end' : ''}`}
        >
          <div className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-blue-600 font-medium">{category}</span>
          </div>
          <span className="text-gray-500 font-medium">{year}</span>
        </div>
        {/* Title */}
        <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        {/* Button */}
        <button
          className={`group/btn inline-flex items-center gap-3 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
        >
          <span className="relative font-medium text-gray-900">
            Explore Project
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
          </span>
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center transform transition-all duration-500 group-hover/btn:scale-95">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </div>
  )
}
