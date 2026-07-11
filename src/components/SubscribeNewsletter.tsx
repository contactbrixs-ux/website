"use client";

import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, X } from 'lucide-react';

export default function SubscribeNewsletter({ fullWidth = false }: { fullWidth?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className={`${fullWidth ? 'w-full' : ''} bg-[#0052FF] text-white font-bold py-3 px-6 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2`}
      >
        <Mail size={16} />
        Subscribe to newsletter
      </button>
    );
  }

  if (status === 'success') {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold py-3 px-6 rounded text-sm flex items-center justify-center gap-2 border border-green-200 dark:border-green-800`}>
        <CheckCircle2 size={16} />
        Successfully Subscribed!
      </div>
    );
  }

  return (
    <div className={`${fullWidth ? 'w-full' : 'w-full sm:w-auto'} flex flex-col gap-2 relative`}>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full relative">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="w-full flex-1 px-4 py-3 rounded text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#12141a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
        />
        <button 
          type="submit"
          disabled={status === 'loading' || !email}
          className="w-full sm:w-auto bg-[#0052FF] text-white font-bold py-3 px-6 rounded text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[120px]"
        >
          {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : 'Subscribe'}
        </button>
        <button 
          type="button"
          onClick={() => { setIsOpen(false); setStatus('idle'); setEmail(''); setErrorMessage(''); }}
          className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-800 text-gray-500 rounded-full p-1 hover:text-black dark:hover:text-white"
        >
          <X size={14} />
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-xs font-semibold">{errorMessage}</p>
      )}
    </div>
  );
}
