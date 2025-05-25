import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
export function ServiceCard({
  title,
  description,
  image,
  Icon,
  color,
  accent,
  border,
  glow,
}) {
  return (
    <div className="group relative">
      {/* Card Glow Effect */}
      <div
        className={`absolute -inset-0.5 ${glow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/20">
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/60"></div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 mix-blend-soft-light`}
          ></div>
          {/* Content Container */}
          <div className="absolute inset-0 p-8 flex flex-col">
            {/* Service Icon */}
            <div className="mb-auto">
              <div
                className={`${accent} bg-opacity-10 backdrop-blur-xl rounded-xl p-3.5 w-fit transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border ${border}`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
            </div>
            {/* Text Content */}
            <div>
              {/* Title with line effect */}
              <div className="relative mb-4 pb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/30"></div>
              </div>
              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                {description}
              </p>
              {/* CTA Link */}
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white font-medium">
                  Discover More
                </span>
                <div className={`w-px h-4 ${accent} bg-opacity-40`}></div>
                <div className="relative">
                  <Link
                    className={`w-8 h-8 rounded-full ${accent} bg-opacity-20 backdrop-blur-xl flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-2 border ${border}`}
                  >
                    <ArrowRightIcon className="h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
