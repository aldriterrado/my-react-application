import React, { Component } from 'react'
import {
  Building2,
  Users2,
  Globe2,
  Award,
  MoveUpRight,
  CalendarDays,
  Clock,
  ChevronRight,
  ArrowUpRight,
  Newspaper,
} from 'lucide-react'
import { Link } from 'react-router-dom'
const stats = [
  {
    number: '20+',
    label: 'Years of Experience',
    icon: Award,
    color: 'from-amber-500 to-amber-600',
  },
  {
    number: '4',
    label: 'Core Business Segments',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '1000+',
    label: 'Skilled Professionals',
    icon: Users2,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    number: '4',
    label: 'Countries Present',
    icon: Globe2,
    color: 'from-purple-500 to-purple-600',
  },
]
const news = [
  {
    date: '02 May 2025',
    title:
      'BBR Holdings Appoints Real Estate Capital Markets Veteran Adrian Seow As New Chief Executive Officer',
    description:
      'Strategic appointment to strengthen leadership team and drive future growth initiatives',
    link: '/news/ceo-appointment',
    isLatest: false,
  },
  {
    date: '02 May 202',
    title: 'Change - Announcement Of Appointment Of Executive Deputy Chairman',
    description:
      'Organizational restructuring to enhance operational efficiency and market positioning',
    link: '/news/chairman-appointment',
    isLatest: false,
  },
  {
    date: '02 May 202',
    title: 'Change - Announcement Of Appointment Of Executive Deputy Chairman',
    description:
      'Organizational restructuring to enhance operational efficiency and market positioning',
    link: '/news/chairman-appointment',
    isLatest: false,
  },
]
function AboutNews() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50/80 py-15">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24">
          {/* About Section with Stats */}
          <div className="relative space-y-12">
            <div>
              <div className="inline-flex items-center gap-4 mb-8 bg-blue-50/50 px-4 py-2 rounded-full">
                <div className="w-12 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <span className="text-blue-600 text-sm tracking-wider uppercase font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-center lg:text-left text-3xl md:text-4xl sm:text-center font-bold text-gray-900 mb-8">
                Building Tomorrow with
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  Innovation & Excellence
                </span>
              </h2>
              <div className="relative rounded-2xl p-8 bg-white shadow-xl shadow-gray-100/50 border border-gray-100">
                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-br-3xl"></div>
                <div className="relative z-10">
                  <p className="text-gray-600 leading-relaxed">
                    BBR Holdings (S) Ltd ("BBR") is one of Singapore's leading
                    construction and specialised engineering groups with more
                    than 20 years of industry experience. It currently comprises
                    four core business segments spanning across General
                    Construction, Specialised Engineering, Property Development
                    and Green Technology.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      The BBR Group is well-positioned to meet the urbanisation
                      challenge in South East Asia with its ability and proven
                      track record to combine innovative engineering with
                      specialist know-how in the built-environment. It has
                      business presence in key markets in Singapore, Malaysia,
                      Thailand and the Philippines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100
                      hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} 
                        flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tracking-tight">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* News Section - Redesigned */}
          <div className="relative">
            <div className="mt-12 lg:mt-0 flex items-center justify-between mb-8">
              <div className="inline-flex items-center gap-4 bg-blue-50/50 px-4 py-2 rounded-full">
                <div className="w-12 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <span className="text-blue-600 text-sm tracking-wider uppercase font-medium">
                  Latest News
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {news.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 
                    hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-2xl ${item.isLatest ? 'bg-blue-50' : 'bg-gray-50'} 
                      flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105`}
                    >
                      {item.isLatest ? (
                        <Clock className="w-8 h-8 text-blue-500" />
                      ) : (
                        <CalendarDays className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-sm font-medium ${item.isLatest ? 'text-blue-600' : 'text-gray-500'}`}
                        >
                          {item.date}
                        </span>
                        {item.isLatest && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                            Latest
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="shrink-0 self-center">
                      <div className="p-2 rounded-full border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="relative mt-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">Stay Updated</h4>
                  <p className="text-sm text-blue-100">
                    Check our latest news and updates
                  </p>
                </div>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50  transition-colors duration-300"
                >
                  <span className="text-sm font-medium">Click here</span>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutNews