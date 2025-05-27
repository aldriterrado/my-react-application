import React, { useState } from 'react'
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false)
  const [isBusinessMenuOpen, setIsBusinessMenuOpen] = useState(false)
  const [isInvestorMenuOpen, setIsInvenstorMenuOpen] = useState(false)
  const aboutSubMenu = {
    'Company Overview': [
      {
        name: 'Who We Aare',
        path: '/about/profile',
      },
      {
        name: 'Group Structure',
        path: '/about/group-structure',
      },
       {
        name: 'Board Directors',
        path: '/about/board-directors',
      },
    ],
    'Our Achievement': [
      {
        name: 'Historical Moments',
        path: '/about/historical-moments',
      },
      {
        name: 'Awards & Recognition',
        path: '/about/awards',
      },
    ],
    'Social Responsibility': [
      {
        name: 'CSR (BBR CARE)',
        path: '/about/csr',
      },
    ],
  }
  const businessSubMenu = {
    'General Construction': [
      {
        name: 'Singapore Engineering & Construction Pte. Ltd.',
        path: '/business/general-construction/sec',
      },
      {
        name: 'Singa Development Pte. Ltd.',
        path: '/business/general-construction/singa',
      },
    ],
    'Specialized Engineering': [
      {
        name: 'BBR Construction System Pte. Ltd.',
        path: '/business/specialized-engineering/bbrcs',
      },
      {
        name: 'BBR Piling Pte. Ltd.',
        path: '/business/specialized-engineering/bbrp',
      },
      {
        name: 'Moderna Homes Pte. Ltd.',
        path: '/business/specialized-engineering/mh',
      },
    ],
    'Property Development': [
      {
        name: 'BBR Development Pte. Ltd.',
        path: '/business/property-development/bbr-d',
      },
    ],
    'Green Technology': [
      {
        name: 'BBR Greentech Pte. Ltd.',
        path: '/business/green-technology/bbrgt',
      },
      {
        name: 'Angels Medical Pte. Ltd.',
        path: '/business/green-technology/angels-medical',
      },
    ],
  }

  const menuItems = [
    {
      name: 'Investor Relations',
      path: '/investor-relations',
    },
    {
      name: `What We've Built`,
      path: '/projects',
    },
    {
      name: 'Careers',
      path: '/careers',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
  ]
  // Update the desktop About Us dropdown menu items
  const renderAboutDropdown = () => (
    <div className="flex gap-8">
      {Object.entries(aboutSubMenu).map(([category, items], index) => (
        <div
          key={category}
          className={`flex-1 ${index !== 0 ? '' : ''}`}
        >
          <div className="px-4 mb-3">
            <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent uppercase tracking-wider">
              {category}
            </div>
          </div>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200
                  ${activeItem === `About Us - ${item.name}` ? 'bg-blue-50/80 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gradient-to-r from-blue-600 to-blue-800 hover:text-white'}`}
                onClick={() => {
                  setActiveItem(`About Us - ${item.name}`)
                  setIsAboutMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  // Update the desktop Business dropdown menu items
  const renderBusinessDropdown = () => (
    <div className="grid grid-cols-2 gap-8">
      {Object.entries(businessSubMenu).map(([category, items], index) => (
        <div
          key={category}
          className={`${index % 2 !== 0 ? '' : ''}`}
        >
          <div className="px-4 mb-3">
            <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent uppercase tracking-wider">
              {category}
            </div>
          </div>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200
                  ${activeItem === `Business - ${item.name}` ? 'bg-blue-50/80 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gradient-to-r from-blue-600 to-blue-800 hover:text-white'}`}
                onClick={() => {
                  setActiveItem(`Business - ${item.name}`)
                  setIsBusinessMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <header className="w-full fixed top-0 left-0 shadow-md bg-white/95 backdrop-blur-lg border-b border-gray-100/50 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Text */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-5">
            <img
              src="https://www.bbrnetwork.com/fileadmin/templates/images/logo.jpg"
              alt="BBR"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-gray-900 font-semibold tracking-tight text-md">
                HOLDINGS (S) LTD
              </span>
              <span className="text-xs text-gray-500 tracking-wide">
                Excellence in Engineering
              </span>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-10">
            <div className="flex items-center gap-1">
              {/* About Us Dropdown */}
              <div className="relative group px-2">
                <button
                  onMouseEnter={() => setIsAboutMenuOpen(true)}
                  onMouseLeave={() => setIsAboutMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200
                    rounded-lg hover:bg-gray-50/80 
                    ${activeItem.includes('About') ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  About Us
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  onMouseEnter={() => setIsAboutMenuOpen(true)}
                  onMouseLeave={() => setIsAboutMenuOpen(false)}
                  className={`absolute top-14 -left-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100/50
                    transition-all duration-300 transform origin-top-left
                    ${isAboutMenuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                    w-[720px] p-6 mt-1`}
                >
                  {renderAboutDropdown()}
                </div>
              </div>
              {/* Our Business Dropdown */}
              <div className="relative group px-2">
                <button
                  onMouseEnter={() => setIsBusinessMenuOpen(true)}
                  onMouseLeave={() => setIsBusinessMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200
                    rounded-lg hover:bg-gray-50/80 
                    ${activeItem.includes('Business') ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  Our Businesses
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${isBusinessMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  onMouseEnter={() => setIsBusinessMenuOpen(true)}
                  onMouseLeave={() => setIsBusinessMenuOpen(false)}
                  className={`absolute top-14 -left-30 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100/50
                    transition-all duration-300 transform origin-top-left
                    ${isBusinessMenuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                    w-[800px] p-6 mt-1`}
                >
                  {renderBusinessDropdown()}
                </div>
              </div>
              {/* Other Menu Items */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg
                    ${activeItem === item.name ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:bg-gray-50/80'}`}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-auto border-t border-gray-100/50 bg-white/95 backdrop-blur-md`}
        >
          <div className="px-4 py-10 space-y-3">
            {/* About Us Mobile Menu */}
            <div className="space-y-3">
              <button
                onClick={() => {
                    setIsAboutMenuOpen(!isAboutMenuOpen);
                    setIsBusinessMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center justify-between
                  rounded-lg transition-all duration-200
                  ${activeItem.includes('About') ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:bg-gray-50/80'}`}
              >
                About Us
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`space-y-6 ${isAboutMenuOpen ? 'block' : 'hidden'}`}
              >
                {Object.entries(aboutSubMenu).map(([category, items]) => (
                  <div key={category} className="px-4">
                    <div className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent uppercase tracking-wider mb-3">
                      {category}
                    </div>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200
                            ${activeItem === `About Us - ${item.name}` ? 'bg-blue-50/80 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Business Mobile Menu */}
            <div className="space-y-3">
              <button
                onClick={() => {
                    setIsBusinessMenuOpen(!isBusinessMenuOpen);
                    setIsAboutMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center justify-between
                  rounded-lg transition-all duration-200
                  ${activeItem.includes('Business') ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:bg-gray-50/80'}`}
              >
                Our Businesses
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${isBusinessMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`space-y-6 ${isBusinessMenuOpen ? 'block' : 'hidden'}`}
              >
                {Object.entries(businessSubMenu).map(([category, items]) => (
                  <div key={category} className="px-4">
                    <div className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent uppercase tracking-wider mb-3">
                      {category}
                    </div>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200
                            ${activeItem === `Business - ${item.name}` ? 'bg-blue-50/80 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Rest of mobile menu items */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`w-full flex flex-col text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                  ${activeItem === item.name ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:bg-gray-50/80'}`}
                onClick={() => {
                  setActiveItem(item.name)
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/subsidiaries"
              className="w-full mt-7 px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-800
                text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/20"
            >
              Main Subsidiaries
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;