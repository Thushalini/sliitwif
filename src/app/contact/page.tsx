'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-300 to-purple-200 py-16">
        <h1 className="text-5xl font-bold text-center text-purple-700">
          Get In Touch
        </h1>
      </div>

      {/* Subtitle */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-lg text-purple-700 text-left">
          Fill up the form and our Team will get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-purple-50 border-2 border-purple-400 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Address
            </h3>
            <p className="text-purple-600 text-lg">SLIIT MALABE</p>
          </div>

          {/* Call Us Card */}
          <div className="bg-purple-50 border-2 border-purple-400 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Call Us
            </h3>
            <p className="text-purple-600 text-lg">+94 74 178 9977</p>
          </div>

          {/* Email Card */}
          <div className="bg-purple-50 border-2 border-purple-400 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Email Us
            </h3>
            <p className="text-purple-600 text-lg">infowifsliit@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Form Section with Avatar */}
      <div className="max-w-6xl mx-auto px-4 py-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Avatar Image */}
          <div className="flex justify-center">
            <Image
              src="/sliitwif/assets/avatar.png"
              alt="Contact Avatar"
              width={500}
              height={500}
              className="w-full max-w-md object-cover"
              priority
            />
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-6 py-4 bg-purple-50 border-2 border-purple-300 rounded-xl text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-6 py-4 bg-purple-50 border-2 border-purple-300 rounded-xl text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full px-6 py-4 bg-purple-50 border-2 border-purple-300 rounded-xl text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
