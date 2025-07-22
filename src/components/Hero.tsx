import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Trophy, BookOpen } from 'lucide-react';
import CounselingModal from './CounselingModal';
import DemoModal from './DemoModal';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counselingModal, setCounselingModal] = useState(false);
  const [demoModal, setDemoModal] = useState(false);
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [isHeroFormSubmitted, setIsHeroFormSubmitted] = useState(false);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsHeroFormSubmitted(true);
      setTimeout(() => {
        setIsHeroFormSubmitted(false);
        setHeroFormData({ name: '', email: '', phone: '', course: '' });
      }, 3000);
    }, 1000);
  };

  const handleHeroInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setHeroFormData({
      ...heroFormData,
      [e.target.name]: e.target.value
    });
  };

  const slides = [
    {
      title: "Crack CLAT 2026 with India's #1 Coaching",
      subtitle: "Join 50,000+ successful students who cleared CLAT with our expert guidance",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    },
    {
      title: "Comprehensive CLAT Preparation Program",
      subtitle: "Expert faculty, proven methodology, and personalized mentorship for guaranteed success",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    },
    {
      title: "Online & Offline Classes Available",
      subtitle: "Flexible learning options with live classes, recorded sessions, and doubt resolution",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const quickStats = [
    { icon: <Users className="w-6 h-6" />, value: "50,000+", label: "Students Enrolled" },
    { icon: <Trophy className="w-6 h-6" />, value: "95%", label: "Success Rate" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Student Rating" },
    { icon: <BookOpen className="w-6 h-6" />, value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-orange-300">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">India's Most Trusted CLAT Coaching</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setCounselingModal(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl font-semibold text-lg flex items-center justify-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={() => setDemoModal(true)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo Class
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <div className="flex justify-center text-orange-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            {!isHeroFormSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Free Counseling</h3>
                  <p className="text-gray-600">Start your CLAT preparation journey today</p>
                </div>

                <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={heroFormData.name}
                      onChange={handleHeroInputChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={heroFormData.email}
                      onChange={handleHeroInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={heroFormData.phone}
                      onChange={handleHeroInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <select 
                      name="course"
                      value={heroFormData.course}
                      onChange={handleHeroInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Course</option>
                      <option value="comprehensive">Comprehensive CLAT Course</option>
                      <option value="crash">Crash Course 2026</option>
                      <option value="online">Online Classes</option>
                      <option value="test-series">Test Series</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg"
                  >
                    Get Free Counseling Call
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    🔒 Your information is secure with us
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you! Our counselor will call you within 2 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700">
                    📞 Expect a call from +91 98765 43210
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Modals */}
      <CounselingModal
        isOpen={counselingModal}
        onClose={() => setCounselingModal(false)}
      />
      
      <DemoModal
        isOpen={demoModal}
        onClose={() => setDemoModal(false)}
      />
    </section>
  );
};

export default Hero;