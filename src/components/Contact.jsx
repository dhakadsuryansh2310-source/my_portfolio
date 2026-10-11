import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import emailjs from '@emailjs/browser';


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    sound.playPop();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.message) return;

  sound.playLaser();
  setIsSubmitting(true);

  emailjs.send(
    'service_7n8u00o',    // 👈 paste your Service ID
    'template_68wk37b',   // 👈 paste your Template ID
    {
      from_name: formData.name,
      reply_to:  formData.email,
      message:   formData.message,
    },
    'PeFT7kvxCPdVFxqNG'     // 👈 paste your Public Key
  )
  .then(() => {
    setIsSubmitting(false);
    setSubmitted(true);
    sound.playSuccess();

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F294C8', '#F2C230', '#F27830', '#000000']
    });

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  })
  .catch((error) => {
    setIsSubmitting(false);
    console.error('EmailJS Error:', error);
    alert('Something went wrong. Please try emailing directly at dhakadsuryanshu2310@gmail.com');
  });
};

  return (
    <section 
      id="contact" 
      className="relative w-full bg-[#F294C8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#121212] overflow-hidden"
    >
      {/* Background Comic Dots */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-30"></div>

      {/* Floating Doodles */}
      <div className="absolute top-10 left-10 text-3xl font-black select-none pointer-events-none animate-comic-float">
        ✦
      </div>
      <div className="absolute bottom-14 right-10 text-4xl font-black select-none pointer-events-none animate-bounce">
        ★
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-[#FFFDF0] rounded-full border-comic-sm shadow-comic-sm font-mono text-xs font-bold uppercase mb-3 text-black">
            <Sparkles className="w-3.5 h-3.5 text-[#F27830]" />
            <span>DROP A LINE</span>
          </div>

          <h2 className="bubble-heading-white text-5xl sm:text-6xl md:text-7xl">
            GET IN TOUCH!
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-black font-semibold">
            Have a project in mind, an internship opportunity, or just want to talk tech and memes? Let's connect!
          </p>
        </div>

        {/* 2-Column Layout: Direct Details Left + Chunky Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FFFEEA] rounded-3xl p-6 sm:p-8 border-comic-thick shadow-comic-xl">
              <h3 className="font-bubble text-2xl font-black text-black mb-4 flex items-center space-x-2">
                <span>📫</span>
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border-comic shadow-comic-sm flex items-center justify-between">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-[#F2C230] border-2 border-black">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono font-bold text-gray-600">EMAIL</div>
                      <div className="font-mono text-xs sm:text-sm font-bold text-black truncate">
                        dhakadsuryanshu2310@gmail.com
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('dhakadsuryanshu2310@gmail.com', 'email')}
                    title="Copy Email"
                    className="p-2 rounded-xl bg-white border border-black hover:bg-[#F27830] transition-colors cursor-pointer shrink-0"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border-comic shadow-comic-sm flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-[#F294C8] border-2 border-black">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold text-gray-600">PHONE</div>
                      <div className="font-mono text-xs sm:text-sm font-bold text-black">
                        +91-7747995284
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('+91-7747995284', 'phone')}
                    title="Copy Phone Number"
                    className="p-2 rounded-xl bg-white border border-black hover:bg-[#F27830] transition-colors cursor-pointer shrink-0"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="bg-[#FFFDF0] p-4 rounded-2xl border-comic shadow-comic-sm flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#F27830] border-2 border-black">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-gray-600">LOCATION</div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-black">
                      Bhopal / Raisen, Madhya Pradesh, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link Capsules */}
              <div className="mt-6 pt-4 border-t-2 border-black/15 flex items-center space-x-3">
                <a
                  href="https://github.com/dhakadsuryansh2310-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playPop()}
                  className="btn-comic flex-1 py-2.5 rounded-xl bg-white text-black font-bubble text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/suryanshu-dhakad"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playPop()}
                  className="btn-comic flex-1 py-2.5 rounded-xl bg-[#F2C230] text-black font-bubble text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Chunky Border Contact Box labeled "LET’S CHAT!" */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFEEA] rounded-3xl p-6 sm:p-10 border-comic-thick shadow-comic-xl relative">
              
              {/* Box Title Banner */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-black/15">
                <h3 className="font-bubble text-3xl sm:text-4xl font-black text-black">
                  LET’S CHAT! 💬
                </h3>
                <span className="font-mono text-xs font-bold text-gray-700 bg-white px-2.5 py-1 rounded-md border border-black">
                  STATUS: AVAILABLE
                </span>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 bg-emerald-100 border-comic p-4 rounded-2xl flex items-center space-x-3 animate-fadeIn">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <h4 className="font-bubble font-bold text-emerald-900">Message Received!</h4>
                    <p className="font-sans text-xs text-emerald-800">
                      Thanks for reaching out! Suryanshu will get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Form with prominent heavy input lines */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block font-bubble text-sm sm:text-base font-bold text-black mb-1.5">
                    YOUR NAME <span className="text-[#F27830]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tony Stark"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFFDF0] text-black font-sans text-base font-semibold border-comic shadow-comic-sm focus:outline-none focus:ring-4 focus:ring-[#F2C230] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-bubble text-sm sm:text-base font-bold text-black mb-1.5">
                    YOUR EMAIL <span className="text-[#F27830]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tony@starkindustries.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFFDF0] text-black font-sans text-base font-semibold border-comic shadow-comic-sm focus:outline-none focus:ring-4 focus:ring-[#F2C230] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-bubble text-sm sm:text-base font-bold text-black mb-1.5">
                    YOUR MESSAGE <span className="text-[#F27830]">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hey Suryanshu! We loved your SafePath and Farm2Home projects..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFFDF0] text-black font-sans text-base font-semibold border-comic shadow-comic-sm focus:outline-none focus:ring-4 focus:ring-[#F2C230] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Offset "SEND MESSAGE" Orange Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-comic w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#F27830] text-black font-bubble text-lg sm:text-xl font-black tracking-wide"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE 🚀'}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
