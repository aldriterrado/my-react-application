import React from 'react'
import {
  Building2Icon,
  GlobeIcon,
  BarChart3Icon,
  CalendarIcon,
  ArrowRightIcon,
  TrophyIcon,
  UsersIcon,
  ChevronRightIcon,
} from 'lucide-react'
export const AboutSection = () => {
  const stats = [
    {
      icon: <Building2Icon className="h-6 w-6 text-blue-600" />,
      number: '20+',
      label: 'Years of Experience',
      description: 'Delivering excellence since 1993',
    },
    {
      icon: <GlobeIcon className="h-6 w-6 text-blue-600" />,
      number: '4',
      label: 'Key Markets',
      description: 'Strategic presence in Asia Pacific',
    },
    {
      icon: <BarChart3Icon className="h-6 w-6 text-blue-600" />,
      number: '4',
      label: 'Core Segments',
      description: 'Diverse business portfolio',
    },
  ]
  const achievements = [
    {
      icon: <TrophyIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Industry Leadership',
      description:
        'Leading construction and specialised engineering group in Singapore',
      highlight: '#1 in market share',
    },
    {
      icon: <UsersIcon className="h-6 w-6 text-green-500" />,
      title: 'Regional Presence',
      description:
        'Operations across Singapore, Malaysia, Thailand and the Philippines',
      highlight: '4 countries and growing',
    },
  ]
  const news = [
    {
      date: '02 May 2025',
      title:
        'Change - Announcement Of Appointment Of Executive Deputy Chairman',
      category: 'New',
    },
    {
      date: '02 May 2025',
      title:
        'BBR Holdings Appoints Real Estate Capital Markets Veteran Adrian Seow As New Chief Executive Officer',
      category: 'New',
    },
    {
        date: '02 May 2025',
        title:
          'BBR Holdings Appoints Real Estate Capital Markets Veteran Adrian Seow As New Chief Executive Officer',
        category: 'New',
    }
  ]
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* About Section with Achievements */}
          <div className="relative space-y-12">
            {/* About Us Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-8">
                <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 animate-pulse"></div>
                <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Building Tomorrow's{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Infrastructure
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 -rotate-2 transform -skew-x-12"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                BBR Holdings (S) Ltd is one of Singapore's leading construction
                and specialised engineering groups with more than 20 years of
                industry experience. We currently operate across four core
                business segments: General Construction, Specialised
                Engineering, Property Development and Green Technology.
              </p>
              
              {/* Achievements */}
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                            {achievement.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Latest Updates Section */}
          <div className="relative">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-4">
                <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 animate-pulse"></div>
                <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                  Latest News
                </span>
              </div>
              {news.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                      Read More
                      <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
