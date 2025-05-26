import React, { useEffect, useState } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  MoveUpRightIcon,
  MouseIcon,
  ArrowLeftIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400',
    alt: 'Modern building construction',
    title: 'Building Tomorrow',
  },
  {
    image:
      'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80&w=2400',
    alt: 'Engineering excellence',
    title: 'Engineering Excellence',
  },
  {
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2400',
    alt: 'Sustainable development',
    title: 'Sustainable Future',
  },
]
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-10" />
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-blue-500"></div>
              <span className="text-white/70 text-sm tracking-wider uppercase">
                {slides[currentSlide].title}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[Inter] leading-tight">
              <span className="block mb-2">Trusted Partner in</span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Construction, Engineering & Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Delivering smart, sustainable, and reliable solutions across the
              built environment — from landmark infrastructure and advanced
              engineering to modern property developments and green
              technologies.
            </p>
            <div className="flex flex-wrap gap-6">             
              <Link
                to="/projects"
                className="group relative px-8 py-4 rounded-lg bg-blue-600 text-white font-medium transition-all duration-300 
                  hover:bg-blue-700 overflow-hidden flex items-center gap-3"
              >
                <span className="relative z-10">Explore Our Projects</span>
                <ArrowRightIcon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-transparent"></div>
              </Link>
              <Link
                to="/about"
                className="group relative px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm text-white font-medium transition-all duration-300 
                  hover:bg-white/10 overflow-hidden flex items-center gap-3"
              >
                <span className="relative z-10">Learn More About Us</span>
                <MoveUpRightIcon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Modern Navigation */}
      <div className="absolute z-30 bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <MouseIcon className="w-5 h-5 text-white/50" />
        <span className="text-[10px] text-white/50 uppercase tracking-widest">
          Scroll for more
        </span>
      </div>
      <div className="absolute z-30 bottom-8 left-12">
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center
              hover:bg-white/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={nextSlide}
            className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center
              hover:bg-white/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ArrowRightIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <div className="absolute z-30 bottom-12 right-12">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
              }}
              className={`h-1.5 rounded-full transition-all duration-500 
                ${index === currentSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeroSection