"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ConvexClientProvider from '../app/ConvexClientProvider';

function CarouselContent() {
  const posts = useQuery(api.posts.getRecentPublishedPosts, { limit: 10 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [posts]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      // Use setTimeout to check scroll after animation finishes
      setTimeout(checkScroll, 350); 
    }
  };

  if (!posts || posts.length === 0) {
    return null; // Don't show the section if no posts are loaded yet
  }

  return (
    <section className="bg-white text-black py-8 md:py-12 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0052FF]">
            Latest Releases.
          </h2>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug || post._id}`} 
              key={post._id}
              className="group min-w-[300px] max-w-[340px] md:min-w-[400px] md:max-w-[420px] snap-start flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-200">
                <img 
                  src={post.templateImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-[#0052FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div 
                  className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-2 flex-grow"
                  dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}
                />
                <span className="text-xs font-semibold text-gray-400 mt-auto uppercase tracking-wider">
                  {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}

export default function LatestReleasesCarousel() {
  return (
    <ConvexClientProvider>
      <CarouselContent />
    </ConvexClientProvider>
  );
}
