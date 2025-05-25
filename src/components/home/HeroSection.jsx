import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'
export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const backgroundImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  ]
  // Auto-advance background
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % backgroundImages.length)
  }
  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length,
    )
  }
  return (
    <section className="relative min-h-0.5 w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform 
              ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] transform scale-110"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-900/70 to-gray-900/40"></div>
            </div>
          </div>
        ))}
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>
      {/* Static Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center min-h-[90vh]">
          <div className="relative z-10 max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 border border-blue-500/10 backdrop-blur-sm">
              <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white text-xs font-semibold">
                Featured
              </span>
              <span className="ml-3 text-gray-100 text-sm">
                Expanding across Asia Pacific
              </span>
            </div>
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white !leading-tight">
                Engineering Excellence.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                  Building the Future.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Transforming skylines and communities with innovative
                construction and engineering solutions since 1993.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-medium inline-flex items-center group transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                Explore Projects
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 rounded-lg border border-white/10 hover:border-white/20 text-white font-medium inline-flex items-center group transition-colors duration-300 hover:bg-white/5">
                Learn More
                <ChevronRightIcon className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
            {/* Slide Indicators */}
            <div className="flex items-center space-x-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 
                    ${index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
