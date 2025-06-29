'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreeToContact: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
            Get In Touch
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-grey text-black"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-grey text-black"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-grey text-black"
                placeholder="Enter your email address"
              />
            </div>

            {/* What brings you here - Textarea */}
            <div>
              <label htmlFor="reason" className="block text-lg font-semibold text-gray-700 mb-2">
                What brings you here?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-vertical placeholder-grey text-black"
                placeholder="Please describe what brings you to seek therapy..."
              />
            </div>

            {/* Preferred time to reach you */}
            <div>
              <label htmlFor="preferredTime" className="block text-lg font-semibold text-gray-700 mb-2">
                Preferred time to reach you
              </label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-grey text-black"
                placeholder="e.g., Weekday mornings, evenings after 6 PM"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToContact"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleInputChange}
                required
                className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="agreeToContact" className="text-lg text-gray-700">
                I agree to be contacted
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Contact:
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
                  <p className="text-lg text-indigo-600 font-medium">(323) 555-0192</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
                  <p className="text-lg text-indigo-600 font-medium">serena@blakepsychology.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Office Hours:
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">In-person:</h3>
                  <p className="text-lg text-gray-600">Tue & Thu, 10 AM–6 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Virtual via Zoom:</h3>
                  <p className="text-lg text-gray-600">Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
