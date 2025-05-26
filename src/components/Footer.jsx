import React from 'react'
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'
export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  BBR Building
                  <br />
                  50 Changi South Street 1
                  <br />
                  Singapore 486126
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-600" />
                <span>Tel: +65 6546 2280</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-600" />
                <span>Fax: +65 6546 2268</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-blue-600" />
                <a
                  href="mailto:info@bbrengineering.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  info@bbrengineering.com
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Businesses',
                'Investor Relations',
                'Projects',
                'Careers',               
                'Contact',
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal & Policies */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2">
              {[
                'Terms of Service',
                'Privacy Policy',
                'Cookie Policy',
                'Sustainability Policy',
                'Corporate Governance',
              ].map((policy) => (
                <li key={policy}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="mb-4 text-gray-600">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: LinkedinIcon,
                    label: 'LinkedIn',
                  },
                  {
                    icon: FacebookIcon,
                    label: 'Facebook',
                  },
                  {
                    icon: TwitterIcon,
                    label: 'Twitter',
                  },
                  {
                    icon: YoutubeIcon,
                    label: 'YouTube',
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BBR Holdings (S) Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
