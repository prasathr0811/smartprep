import React from 'react';
import { useState } from 'react';
import { Users, BookOpen, Award, Clock, Target, HeadphonesIcon, Video, FileText } from 'lucide-react';
import CounselingModal from './CounselingModal';

const Features = () => {
  const [counselingModal, setCounselingModal] = useState(false);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced faculty with 15+ years of CLAT coaching expertise",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Study Material",
      description: "Updated study material covering all CLAT sections with practice questions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live & Recorded Classes",
      description: "Attend live interactive sessions or access recorded classes anytime",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mock Tests & Analysis",
      description: "Regular mock tests with detailed performance analysis and improvement tips",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "24/7 Doubt Support",
      description: "Get your doubts resolved instantly through our dedicated support system",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personal Mentorship",
      description: "One-on-one guidance from mentors to track your progress and motivation",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Management",
      description: "Learn effective time management techniques for CLAT exam success",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Current Affairs Updates",
      description: "Daily current affairs updates specifically curated for CLAT aspirants",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700 font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-blue-600">Crack CLAT 2026</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines expert teaching, advanced technology, and personalized support to ensure your success in CLAT
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => setCounselingModal(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg">
            Explore All Features
          </button>
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

export default Features;