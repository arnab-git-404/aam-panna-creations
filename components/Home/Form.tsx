'use client';

import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (

     <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
            
            {/* Left Side - Enhanced Contact Information */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-6 lg:p-8 text-white overflow-hidden">
              {
              /* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-50"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">

                {/* Header Section */}
                <div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-opacity-20 rounded-xl mb-4 backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    Let's Start a<br />
                    <span className="text-yellow-300">Conversation</span>
                  </h2>
                  <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                    We're here to help and answer any questions you might have.
                  </p>
                </div>


                {/* Contact Information */}
                <div className="space-y-4">

                  <div className="group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start space-x-4">

                      <div className="flex-shrink-0 w-10 h-10  bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 text-white">Visit Our Office</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          123 Business Avenue<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10  bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 text-white">Call Us</h3>
                        <p className="text-blue-100 font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10  bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 text-white">Email Us</h3>
                        <p className="text-blue-100 font-medium">hello@company.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-6 lg:p-8">
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Send us a Message</h2>
                  <p className="text-gray-600">We'd love to hear from you.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      What's your email address?
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project"
                      rows={3}
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300 bg-transparent resize-none placeholder-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className=" hover:cursor-pointer w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Form;