// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white text-xl font-bold">MultiLingo</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of multilingual webcast solutions, connecting global audiences 
              through seamless language interpretation and live event technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/multilingual-webcasts" className="text-gray-400 hover:text-white transition-colors text-sm">Multilingual Webcasts</Link></li>
              <li><Link href="/live-streaming" className="text-gray-400 hover:text-white transition-colors text-sm">Live Streaming</Link></li>
              <li><Link href="/interpretation" className="text-gray-400 hover:text-white transition-colors text-sm">Language Interpretation</Link></li>
              <li><Link href="/event-management" className="text-gray-400 hover:text-white transition-colors text-sm">Event Management</Link></li>
              <li><Link href="/hybrid-events" className="text-gray-400 hover:text-white transition-colors text-sm">Hybrid Events</Link></li>
              <li><Link href="/virtual-events" className="text-gray-400 hover:text-white transition-colors text-sm">Virtual Events</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/corporate" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate Events</Link></li>
              <li><Link href="/conferences" className="text-gray-400 hover:text-white transition-colors text-sm">Conferences</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-white transition-colors text-sm">Training Sessions</Link></li>
              <li><Link href="/webinars" className="text-gray-400 hover:text-white transition-colors text-sm">Webinars</Link></li>
              <li><Link href="/town-halls" className="text-gray-400 hover:text-white transition-colors text-sm">Town Halls</Link></li>
              <li><Link href="/product-launches" className="text-gray-400 hover:text-white transition-colors text-sm">Product Launches</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm">News & Media</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">24/7 Support</p>
                <p className="text-gray-400 text-sm">+1-800-MULTILINGO</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Email Us</p>
                <p className="text-gray-400 text-sm">info@multilingo.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Global Headquarters</p>
                <p className="text-gray-400 text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Language Support */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Languages Supported</h4>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
              <span>English</span>
              <span>•</span>
              <span>Spanish</span>
              <span>•</span>
              <span>French</span>
              <span>•</span>
              <span>German</span>
              <span>•</span>
              <span>Chinese</span>
              <span>•</span>
              <span>Japanese</span>
              <span>•</span>
              <span>Korean</span>
              <span>•</span>
              <span>Arabic</span>
              <span>•</span>
              <span>Portuguese</span>
              <span>•</span>
              <span>Russian</span>
              <span>•</span>
              <span>Italian</span>
              <span>•</span>
              <span>Dutch</span>
              <span>•</span>
              <span>+8 more</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 MultiLingo. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-xs text-gray-500 text-center">
              <div className="mb-1">🔒</div>
              <span>SSL Secured</span>
            </div>
            <div className="text-xs text-gray-500 text-center">
              <div className="mb-1">🛡️</div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="text-xs text-gray-500 text-center">
              <div className="mb-1">🌐</div>
              <span>GDPR Ready</span>
            </div>
            <div className="text-xs text-gray-500 text-center">
              <div className="mb-1">✅</div>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
