import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award, MapPin } from 'lucide-react';
import CounselingModal from './CounselingModal';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [counselingModal, setCounselingModal] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Comprehensive CLAT Course",
      university: "NLSIU Bangalore",
      rank: "AIR 23",
      year: "2024",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "CLAT NLTI transformed my preparation completely. The faculty's expertise and personalized attention helped me secure admission to my dream college. The mock tests were incredibly helpful in building my confidence.",
      achievement: "Top 50 in CLAT 2024"
    },
    {
      id: 2,
      name: "Arjun Kumar",
      course: "Crash Course 2024",
      university: "NALSAR Hyderabad",
      rank: "AIR 45",
      year: "2024",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "Despite starting late, the crash course at CLAT NLTI helped me achieve my goal. The intensive program and expert guidance made all the difference. Highly recommend their crash course program!",
      achievement: "Cleared CLAT in first attempt"
    },
    {
      id: 3,
      name: "Sneha Patel",
      course: "Online Classes",
      university: "GNLU Gandhinagar",
      rank: "AIR 67",
      year: "2024",
      image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "The online classes were perfectly structured and interactive. Being from a small town, CLAT NLTI's online program gave me access to quality education. The faculty support was exceptional throughout my journey.",
      achievement: "State Topper - Gujarat"
    },
    {
      id: 4,
      name: "Rahul Singh",
      course: "Test Series",
      university: "NUJS Kolkata",
      rank: "AIR 89",
      year: "2024",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "The test series analysis helped me identify my weak areas and improve significantly. The detailed performance reports and comparison with other students motivated me to work harder and smarter.",
      achievement: "Improved score by 40 points"
    },
    {
      id: 5,
      name: "Ananya Gupta",
      course: "Comprehensive CLAT Course",
      university: "RMLNLU Lucknow",
      rank: "AIR 112",
      year: "2024",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "The mentorship program was incredible. My mentor guided me through every challenge and kept me motivated during tough times. The study material was comprehensive and up-to-date.",
      achievement: "First generation law student"
    },
    {
      id: 6,
      name: "Vikash Mehta",
      course: "Crash Course 2024",
      university: "HNLU Raipur",
      rank: "AIR 156",
      year: "2024",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      testimonial: "Coming from a non-English medium background, I was initially hesitant. But CLAT NLTI's supportive environment and excellent faculty helped me overcome my weaknesses and achieve my goal.",
      achievement: "Rural background success story"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 text-green-700 font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Students
            <span className="block text-green-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our successful students who cracked CLAT and are now studying in top National Law Universities across India.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mx-4">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Student Info */}
                      <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover shadow-xl"
                          />
                          <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2">
                            <Award className="w-5 h-5" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {testimonial.name}
                        </h3>
                        
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600">
                            <MapPin className="w-4 h-4" />
                            <span className="font-semibold">{testimonial.university}</span>
                          </div>
                          <div className="text-gray-600">
                            Course: {testimonial.course}
                          </div>
                          <div className="text-green-600 font-semibold">
                            {testimonial.rank} • CLAT {testimonial.year}
                          </div>
                        </div>

                        {/* Achievement Badge */}
                        <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-full px-4 py-2 mb-6">
                          <span className="text-sm font-semibold text-green-700">
                            🏆 {testimonial.achievement}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start space-x-1">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="relative">
                        <Quote className="w-12 h-12 text-blue-200 absolute -top-4 -left-2" />
                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic pl-8">
                          "{testimonial.testimonial}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Students rate us 5 stars</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">8500+</div>
            <div className="text-gray-600">NLU selections since 2010</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average student rating</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Your success story could be next. Join thousands of students who have achieved their dreams with CLAT NLTI's expert guidance and proven methodology.
            </p>
            <button 
              onClick={() => setCounselingModal(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg">
              Start Your Success Journey
            </button>
          </div>
        </div>
      </div>

      {/* Counseling Modal */}
      <CounselingModal
        isOpen={counselingModal}
        onClose={() => setCounselingModal(false)}
      />
    </section>
  );
};

export default Testimonials;