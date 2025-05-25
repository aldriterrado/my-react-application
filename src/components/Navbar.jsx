import React, { useState } from 'react'
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const menuItems = {
        aboutUs: {
            label: 'About Us',
            items: [
                {
                    label: 'Corporate Profile',
                    items: [
                        {
                            label: 'Our Profile',
                            path: '/our-profile'
                        },
                        {
                            label: 'Milestone',
                            path: '/milestone'
                        },
                        {
                            label: 'Group Structure',
                            path: '/group-structure'
                        }
                    ]
                },
                {
                    label: 'Recognition',
                    items: [
                        {
                            label: 'Awards & Recognition',
                            path: '/awards-recognition'
                        },
                        {
                            label: 'CSR (BBR CARE)',
                            path: '/csr-bbrcare'
                        }
                    ]
                }
            ]
        },
        ourBusiness: {
            label: 'Our Business',
            items: [
                {
                    label: 'General Construction',
                    items: [
                        {
                            label: 'Singapore Engineering & Construction PTE LTD',
                            path: '/sec'
                        },
                        {
                            label: 'Singa Development PTE LTD',
                            path: '/singa'
                        }
                    ]
                },
                {
                    label: 'Specialized Engineering',
                    items: [
                        {
                            label: 'BBR Constructions System PTE LTD',
                            path: '/bbrcs'
                        },
                        {
                            label: 'BBR Piling PTE LTD',
                            path: '/bbrp'
                        },
                        {
                            label: 'Moderna Homes PTE LTD',
                            path: 'moderna-homes'
                        }
                    ]
                },
                {
                    label: 'Property Development',
                    items: [
                        {
                            label: 'BBR Development PTE LTD',
                            path: '/bbrdev'
                        },
                    ]
                },
                {
                    label: 'Green Technology',
                    items: [
                        {
                            label: 'BBR Greentech PTE LTD',
                            path: '/bbrgt'
                        },
                        {
                            label: 'Angels Medical PTE LTD',
                            path: 'angels-medical'
                        }
                    ]
                }
            ]
        }
    }

    return(
        <header className='w-full bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-8 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link to="/" className='flex items-center'>
                            <span className='text-3xl font-bold text-blue-700'>BBR</span>
                            <span className='ml-2 text-gray-700 font-bold'>Holdings (S) LTD</span>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex space-x-10'>
                        {/* About Us Dropdown */}
                        <div className='relative group'>
                            <button className="text-gray-600 group-hover:text-blue-600 flex items-center text-sm font-medium">
                                <span>About Us</span>
                                <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:-translate-x-1/2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-6 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                        {menuItems.aboutUs.items.map((section) => (
                                        <div key={section.label}>
                                            <div className="font-semibold text-gray-900 text-sm mb-2 pb-1 border-b">
                                            {section.label}
                                            </div>
                                            <ul className="mt-3 space-y-3">
                                            {section.items.map((item) => (
                                                <li key={item.label}>
                                                    <Link to={item.path} className='text-gray-600 hover:text-blue-600 text-sm'>
                                                    {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Businesses Dropdown */}
                        <div className='relative group'>
                            <button className="text-gray-600 group-hover:text-blue-600 flex items-center text-sm font-medium">
                                <span>Our Businesses</span>
                                <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl lg:ml-0 lg:-translate-x-1/2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-6 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                        {menuItems.ourBusiness.items.map((section) => (
                                        <div key={section.label}>
                                            <div className="font-semibold text-gray-900 text-sm mb-2 pb-1 border-b">
                                            {section.label}
                                            </div>
                                            <ul className="mt-3 space-y-3">
                                            {section.items.map((item) => (
                                                <li key={item.label}>
                                                    <Link to={item.path} className='text-gray-600 hover:text-blue-600 text-sm'>
                                                    {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Normal Menu Items */}
                        <Link to='/bbr-projects' className='text-sm font-medium text-gray-600 hover:text-blue-700'>
                            Projects
                        </Link>

                        <Link to='/careers' className='text-sm font-medium text-gray-600 hover:text-blue-700'>
                            Careers
                        </Link>

                        <Link to='/contact-us' className='text-sm font-medium text-gray-600 hover:text-blue-700'>
                            Contact Us
                        </Link>
                    </nav>

                </div>
            </div>

        </header>
    );

}

export default Navbar;