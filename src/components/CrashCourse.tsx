import React, { useState, useEffect } from 'react';
import { Clock, Users, BookOpen, Award, ArrowRight, Star, Calendar, Zap, CheckCircle } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const CrashCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [crashFormData, setCrashFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batchTime: ''
  });
  const [isCrashFormSubmitted, setIsCrashFormSubmitted] = useState(false);

  const handleCrashFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsCrashFormSubmitted(true);
      setTimeout(() => {
        setIsCrashFormSubmitted(false);
        setCrashFormData({ name: '', email: '', phone: '', batchTime: '' });
      }, 4000);
    }, 1000);
  };

  const handleCrashInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCrashFormData({
      ...crashFormData,
      [e.target.name]: e.target.value
    });
  };

  const crashCourse = {
    title: "CLAT Crash Course 2026",
    price: "₹45,000",
    duration: "3 Months"
  };

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    "2 intensive classes per subject daily",
    "Expert faculty with 15+ years experience",
    "50+ Mock tests with detailed analysis",
    "Personal mentorship & doubt clearing",
    "Current affairs & GK updates",
    "Strategy sessions for time management",
    "Previous year papers solutions",
    "All India test series ranking"
  ];

  const schedule = [
    { day: "Monday", subjects: ["English", "Legal Reasoning"], time: "9:00 AM - 1:00 PM" },
    { day: "Tuesday", subjects: ["Logical Reasoning", "Mathematics"], time: "9:00 AM - 1:00 PM" },
    { day: "Wednesday", subjects: ["General Knowledge", "Current Affairs"], time: "9:00 AM - 1:00 PM" },
    { day: "Thursday", subjects: ["Mock Test", "Analysis Session"], time: "9:00 AM - 1:00 PM" },
    { day: "Friday", subjects: ["Revision", "Doubt Clearing"], time: "9:00 AM - 1:00 PM" },
    { day: "Saturday", subjects: ["Strategy Session", "Practice Tests"], time: "9:00 AM - 1:00 PM" }
  ];

  return (
    <section id="crash-course" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Limited Time Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 mb-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-bold">LIMITED TIME OFFER - EARLY BIRD DISCOUNT!</span>
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            
            <div className="flex justify-center space-x-8 text-2xl font-bold">
              <div className="text-center">
                <div>{timeLeft.days}</div>
                <div className="text-sm opacity-80">DAYS</div>
              </div>
              <div className="text-center">
                <div>{timeLeft.hours}</div>
                <div className="text-sm opacity-80">HOURS</div>
              </div>
              <div className="text-center">
                <div>{timeLeft.minutes}</div>
                <div className="text-sm opacity-80">MINS</div>
              </div>
              <div className="text-center">
                <div>{timeLeft.seconds}</div>
                <div className="text-sm opacity-80">SECS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Course Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 text-orange-700 font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Crash Course 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                CLAT Crash Course
                <span className="block text-orange-600">Last Minute Success</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Intensive 3-month program designed for rapid CLAT preparation. Perfect for students who want focused, high-impact coaching in limited time.
              </p>
              
              <div className="flex items-center space-x-1 mb-8">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-900 font-semibold ml-2">4.9/5</span>
                <span className="text-gray-500">(450+ reviews)</span>
              </div>
            </div>

            {/* Course Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Calendar className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Course Duration</h3>
                <p className="text-gray-600">3 Months Intensive Program</p>
                <p className="text-sm text-orange-600 font-medium">Starts: 15th January 2026</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Batch Size</h3>
                <p className="text-gray-600">Limited to 30 Students</p>
                <p className="text-sm text-blue-600 font-medium">Only 8 seats left!</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Clock className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Class Schedule</h3>
                <p className="text-gray-600">6 days/week, 4 hours/day</p>
                <p className="text-sm text-green-600 font-medium">Morning & Evening batches</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Award className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Success Rate</h3>
                <p className="text-gray-600">92% Selection Rate</p>
                <p className="text-sm text-purple-600 font-medium">In top NLUs</p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Registration */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Early Bird Special</h3>
                <p className="opacity-90">Save ₹25,000 - Limited Time Only!</p>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">₹45,000</span>
                    <span className="text-xl text-gray-500 line-through">₹70,000</span>
                  </div>
                  <p className="text-green-600 font-semibold mt-2">Save 36% - Limited Time</p>
                </div>

                {/* Registration Form */}
                {!isCrashFormSubmitted ? (
                  <form onSubmit={handleCrashFormSubmit} className="space-y-4 mb-6">
                    <input
                      type="text"
                      name="name"
                      value={crashFormData.name}
                      onChange={handleCrashInputChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={crashFormData.email}
                      onChange={handleCrashInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={crashFormData.phone}
                      onChange={handleCrashInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                    <select 
                      name="batchTime"
                      value={crashFormData.batchTime}
                      onChange={handleCrashInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Preferred Batch Time</option>
                      <option value="morning">Morning Batch (9 AM - 1 PM)</option>
                      <option value="evening">Evening Batch (2 PM - 6 PM)</option>
                    </select>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg mb-4 flex items-center justify-center group"
                    >
                      Secure Your Seat Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6 mb-6">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Seat Reserved!</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Your seat has been reserved. Our team will call you shortly to complete the enrollment.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm text-orange-700">
                        📞 Expect a call within 30 minutes
                      </p>
                    </div>
                  </div>
                )}


                <button 
                  onClick={() => setEnrollmentModal(true)}
                  className="w-full border-2 border-gray-300 py-3 rounded-lg hover:border-orange-500 hover:text-orange-600 transition-colors duration-200 font-semibold">
                  Download Detailed Syllabus
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    💳 Easy EMI options available | 🔒 100% secure payment
                  </p>
                </div>
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Schedule</h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{item.day}</div>
                      <div className="text-sm text-gray-600">{item.subjects.join(', ')}</div>
                    </div>
                    <div className="text-sm text-orange-600 font-medium">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={enrollmentModal}
        onClose={() => setEnrollmentModal(false)}
        course={crashCourse}
      />
    </section>
  );
};

export default CrashCourse;