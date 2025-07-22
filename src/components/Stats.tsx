import React, { useState, useEffect, useRef } from 'react';
import { Users, Trophy, BookOpen, Star, Target, Award } from 'lucide-react';
import CounselingModal from './CounselingModal';

const Stats = () => {
  const [counselingModal, setCounselingModal] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    successRate: 0,
    experience: 0,
    mockTests: 0,
    rating: 0,
    selections: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const finalValues = {
    students: 50000,
    successRate: 95,
    experience: 15,
    mockTests: 500,
    rating: 4.9,
    selections: 8500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        students: Math.floor(finalValues.students * progress),
        successRate: Math.floor(finalValues.successRate * progress),
        experience: Math.floor(finalValues.experience * progress),
        mockTests: Math.floor(finalValues.mockTests * progress),
        rating: Math.min(finalValues.rating, (finalValues.rating * progress)),
        selections: Math.floor(finalValues.selections * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(finalValues);
      }
    }, stepTime);
  };

  const statsData = [
    {
      icon: <Users className="w-8 h-8" />,
      value: `${counters.students.toLocaleString()}+`,
      label: "Students Enrolled",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: `${counters.successRate}%`,
      label: "Success Rate",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: `${counters.experience}+`,
      label: "Years Experience",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: `${counters.mockTests}+`,
      label: "Mock Tests",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: counters.rating.toFixed(1),
      label: "Student Rating",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: `${counters.selections.toLocaleString()}+`,
      label: "NLU Selections",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Our Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Numbers That Speak
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Success
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Over the years, we've helped thousands of students achieve their dream of studying law in India's top National Law Universities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {stat.value}
              </div>
              
              <div className="text-lg text-blue-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Success Story
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These numbers represent real students who trusted us with their CLAT preparation and achieved their goals. Be the next success story!
            </p>
            <button 
              onClick={() => setCounselingModal(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg">
              Start Your Journey Today
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

export default Stats;