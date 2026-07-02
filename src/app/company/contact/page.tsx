"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react";
import BrxFooter from "@/components/BrxFooter";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "General Inquiries",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        department: "General Inquiries",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen text-white bg-[#05070A] selection:bg-white/20">
      
      <div className="relative overflow-hidden pt-32 pb-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.03),transparent_40%),linear-gradient(180deg,rgba(255,255,255,.01),transparent_30%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 items-start">
            
            {/* Left Column - Copy & Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/5 border-l-4 border-l-[#005BFF] px-4 py-2 text-xs uppercase tracking-[0.34em] text-white/50 mb-8">
                <Mail size={14} /> Get in touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-semibold leading-[0.9] tracking-[-0.05em] text-white">
                Contact the <span className="block text-white/60">Brixs Team.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/60 max-w-lg">
                Whether you're building a new decentralized application, looking for a strategic partnership, or need technical support, our team is ready to connect with you.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-none border border-white/10 bg-white/5 p-6">
                  <Mail className="text-white/40 mb-4" size={24} />
                  <h3 className="text-sm uppercase tracking-widest font-semibold text-white mb-2">Direct Inquiries</h3>
                  <a href="mailto:hello@brixs.space" className="text-white/70 hover:text-white transition-colors">hello@brixs.space</a>
                </div>
                <div className="rounded-none border border-white/10 bg-white/5 p-6">
                  <MapPin className="text-white/40 mb-4" size={24} />
                  <h3 className="text-sm uppercase tracking-widest font-semibold text-white mb-2">Global Network</h3>
                  <p className="text-white/70">Remote-first,<br/>Decentralized</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,.02)] p-6 sm:p-10 shadow-[0_40px_120px_rgba(0,0,0,.5)] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#005BFF]/20 blur-3xl pointer-events-none" />
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully</h3>
                  <p className="text-white/60 mb-8 max-w-md">
                    Thank you for reaching out to Brixs. We have sent an automated confirmation to your email, and our team will connect with you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 rounded-none bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-white/50 font-semibold">Your Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 p-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors rounded-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-white/50 font-semibold">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 p-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors rounded-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="department" className="text-xs uppercase tracking-wider text-white/50 font-semibold">Department</label>
                    <select 
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 p-3.5 text-white focus:outline-none focus:border-white/40 transition-colors rounded-none appearance-none cursor-pointer"
                    >
                      <option className="bg-[#0A0C10]" value="General Inquiries">General Inquiries</option>
                      <option className="bg-[#0A0C10]" value="Support">Technical Support</option>
                      <option className="bg-[#0A0C10]" value="Partnerships">Partnerships & Ecosystem</option>
                      <option className="bg-[#0A0C10]" value="Legal & Terms">Legal & Terms</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-wider text-white/50 font-semibold">Subject</label>
                    <input 
                      required
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 p-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors rounded-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-white/50 font-semibold">Message</label>
                    <textarea 
                      required
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black/40 border border-white/10 p-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors rounded-none resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm mt-2">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-white text-black py-4 font-bold text-[15px] hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
      
      <BrxFooter />
    </main>
  );
}
