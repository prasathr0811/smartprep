import React, { useState } from 'react';
import { Play, X, Clock, Users, BookOpen, Star } from 'lucide-react';

const DemoVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "English Language & Comprehension",
      instructor: "Dr. Priya Sharma",
      duration: "45 mins",
      views: "12.5K",
      rating: 4.9,
      description: "Master English comprehension techniques with our expert faculty. Learn effective strategies for reading comprehension and vocabulary enhancement.",
      thumbnail: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ", // YouTube video ID
      topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Writing Skills"]
    },
    {
      id: 2,
      title: "Legal Reasoning Fundamentals",
      instructor: "Adv. Rajesh Kumar",
      duration: "52 mins",
      views: "18.2K",
      rating: 4.8,
      description: "Understand the core concepts of legal reasoning. Learn to analyze legal problems and apply principles effectively in CLAT questions.",
      thumbnail: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      topics: ["Legal Principles", "Case Analysis", "Problem Solving", "Indian Constitution"]
    },
    {
      id: 3,
      title: "Logical Reasoning Mastery",
      instructor: "Prof. Anita Verma",
      duration: "38 mins",
      views: "15.8K",
      rating: 4.9,
      description: "Develop your logical thinking skills. Master different types of logical reasoning questions with proven techniques and shortcuts.",
      thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      topics: ["Critical Reasoning", "Analytical Reasoning", "Verbal Reasoning", "Pattern Recognition"]
    },
    {
      id: 4,
      title: "Current Affairs & GK Strategy",
      instructor: "Mr. Suresh Gupta",
      duration: "41 mins",
      views: "22.1K",
      rating: 4.7,
      description: "Stay updated with current affairs and build strong general knowledge foundation. Learn effective retention techniques.",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      topics: ["Current Events", "Indian History", "Geography", "Politics"]
    },
    {
      id: 5,
      title: "Quantitative Techniques",
      instructor: "Dr. Meera Singh",
      duration: "35 mins",
      views: "9.7K",
      rating: 4.8,
      description: "Master mathematical concepts required for CLAT. Learn quick calculation methods and problem-solving techniques.",
      thumbnail: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      topics: ["Basic Mathematics", "Data Interpretation", "Percentages", "Ratios & Proportions"]
    },
    {
      id: 6,
      title: "Mock Test Analysis Session",
      instructor: "Team CLAT NLTI",
      duration: "60 mins",
      views: "25.3K",
      rating: 4.9,
      description: "Learn how to analyze your mock test performance effectively. Understand common mistakes and improvement strategies.",
      thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ",
      topics: ["Performance Analysis", "Time Management", "Error Analysis", "Strategy Planning"]
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="demo-videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 text-purple-700 font-medium mb-4">
            <Play className="w-4 h-4" />
            <span>Demo Classes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Our
            <span className="block text-purple-600">Teaching Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our expert faculty in action. Get a taste of our comprehensive teaching methodology and see why thousands of students choose us for CLAT preparation.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => openVideoModal(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 hover:bg-white rounded-full p-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {video.instructor.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="text-gray-700 font-medium">{video.instructor}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{video.rating}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {video.topics.slice(0, 2).map((topic, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                  {video.topics.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{video.topics.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Full Classes?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These demo videos are just a glimpse of our comprehensive CLAT preparation program. Join us for complete access to all our courses and resources.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold text-lg">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <p className="text-gray-600">by {selectedVideo.instructor}</p>
              </div>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-b-2xl"
              ></iframe>
            </div>

            {/* Video Details */}
            <div className="p-6">
              <p className="text-gray-700 mb-6">{selectedVideo.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVideo.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Video Stats</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Views: {selectedVideo.views}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>Rating: {selectedVideo.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => {
                    closeVideoModal();
                    // You can add enrollment logic here
                    alert('Enrollment feature will be implemented with payment gateway integration');
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold">
                  Enroll in Full Course
                </button>
                <button 
                  onClick={() => {
                    // Simulate download
                    const link = document.createElement('a');
                    link.href = 'data:text/plain;charset=utf-8,CLAT Study Material - Sample Content\n\nThis is a sample study material for CLAT preparation.\n\nTopics covered:\n- English Language\n- Legal Reasoning\n- Logical Reasoning\n- Current Affairs\n- Quantitative Techniques\n\nFor complete study material, please enroll in our courses.';
                    link.download = `${selectedVideo.title}_Study_Material.txt`;
                    link.click();
                  }}
                  className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold">
                  Download Study Material
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DemoVideos;