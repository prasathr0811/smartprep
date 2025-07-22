import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsNewsletterSubmitted(true);
      setTimeout(() => {
        setIsNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const handleCallNow = () => {
    window.open('tel:+919876543210', '_self');
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Results', href: '#results' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Comprehensive CLAT Course', href: '#comprehensive' },
    { name: 'CLAT Crash Course 2026', href: '#crash-course' },
    { name: 'Online Classes', href: '#online' },
    { name: 'Test Series', href: '#test-series' },
    { name: 'Mock Tests', href: '#mock-tests' },
    { name: 'Study Material', href: '#material' }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Us',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      value: 'info@clatnlti.com',
      link: 'mailto:info@clatnlti.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Visit Us',
      value: 'Delhi • Mumbai • Bangalore',
      link: '#locations'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#facebook', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#twitter', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#instagram', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#youtube', name: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                C
              </div>
              <div>
                <div className="text-2xl font-bold text-white">CLAT NLTI</div>
                <div className="text-sm text-gray-300">Excellence in Legal Education</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier CLAT coaching institute with 15+ years of experience. We've helped over 8,500 students secure admissions in top NLUs across the country.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              {!isNewsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-center">
                  <p className="text-green-200 text-sm">✅ Subscribed successfully!</p>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {course.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <div className="text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Office Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon - Fri: 9:00 AM - 8:00 PM</div>
                <div>Saturday: 9:00 AM - 6:00 PM</div>
                <div>Sunday: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 CLAT NLTI. All rights reserved. Built with excellence for aspiring lawyers.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#disclaimer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={handleCallNow}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 flex items-center space-x-2 group">
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;