import React from 'react';
import { useState } from 'react';
import { Clock, Users, BookOpen, Award, ArrowRight, Star } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';
import DemoModal from './DemoModal';

const Courses = () => {
  const [enrollmentModal, setEnrollmentModal] = useState({ isOpen: false, course: null });
  const [demoModal, setDemoModal] = useState({ isOpen: false, course: null });

  const openEnrollmentModal = (course) => {
    setEnrollmentModal({ isOpen: true, course });
  };

  const openDemoModal = (course) => {
    setDemoModal({ isOpen: true, course });
  };

  const courses = [
    {
      id: 1,
      title: "Comprehensive CLAT Course",
      duration: "12 Months",
      batchSize: "50 Students",
      price: "₹85,000",
      originalPrice: "₹1,00,000",
      rating: 4.9,
      reviews: 1250,
      features: [
        "Complete syllabus coverage",
        "500+ Practice questions",
        "Weekly mock tests",
        "Personal mentor assigned",
        "Doubt clearing sessions",
        "Current affairs updates"
      ],
      image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      popular: true
    },
    {
      id: 2,
      title: "CLAT Online Classes",
      duration: "10 Months",
      batchSize: "100 Students",
      price: "₹65,000",
      originalPrice: "₹80,000",
      rating: 4.8,
      reviews: 890,
      features: [
        "Live interactive classes",
        "Recorded sessions access",
        "Digital study material",
        "Online mock tests",
        "24/7 doubt support",
        "Mobile app access"
      ],
      image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: 3,
      title: "CLAT Test Series",
      duration: "6 Months",
      batchSize: "Unlimited",
      price: "₹15,000",
      originalPrice: "₹20,000",
      rating: 4.7,
      reviews: 2100,
      features: [
        "100+ Mock tests",
        "Section-wise tests",
        "All India ranking",
        "Detailed analysis",
        "Performance tracking",
        "Previous year papers"
      ],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 text-green-700 font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Our Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="block text-green-600">CLAT Preparation Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible learning options designed to fit your schedule and learning preferences. All courses come with expert guidance and proven results.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden ${
                course.popular ? 'border-green-400' : 'border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-900 font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews} reviews)</span>
                </div>

                {/* Course Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>

                {/* Course Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.batchSize}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
                    Save {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group ${
                    course.popular
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                  }`}
                    onClick={() => openEnrollmentModal(course)}
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  <button 
                    className="w-full py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => openDemoModal(course)}
                  >
                    Get Free Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Talk to our expert counselors who will help you choose the perfect course based on your current preparation level and goals.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg">
              Get Personal Counseling
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EnrollmentModal
        isOpen={enrollmentModal.isOpen}
        onClose={() => setEnrollmentModal({ isOpen: false, course: null })}
        course={enrollmentModal.course || { title: '', price: '', duration: '' }}
      />
      
      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, course: null })}
        course={demoModal.course}
      />
    </section>
  );
};

export default Courses;