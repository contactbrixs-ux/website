"use client";

import React from 'react';
import { usePaginatedQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BrxFooter from '@/components/BrxFooter';
import ConvexClientProvider from '../ConvexClientProvider';

function BlogContent() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.posts.getPublishedPosts,
    {},
    { initialNumItems: 5 }
  );

  return (
      <div className="bg-gray-50 dark:bg-[#0a0a0b] min-h-screen text-black dark:text-white font-sans pb-20 transition-colors">
      
      {/* Hero */}
      <header className="pt-32 pb-8 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Brixs Blog</h1>
        <button className="hidden md:flex items-center gap-2 bg-[#0052FF] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
          View all <ArrowRight size={16} />
        </button>
      </header>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-6">
        {status === 'LoadingFirstPage' && (
          <div className="text-center py-20 text-[#0052FF] dark:text-[#00ffcc] animate-pulse">Loading insights...</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {results.map(post => (
            <Link href={`/blog/${post.slug || post._id}`} key={post._id} className="block group">
              <article className="bg-white dark:bg-[#12141a] border border-gray-200 dark:border-[#1f2229] rounded-xl overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md">
              <div className="h-56 overflow-hidden relative">
                <img src={post.templateImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {post.tags && post.tags[0] && (
                  <span className="absolute top-4 left-4 bg-[#0052FF] dark:bg-[#00ffcc] text-white dark:text-black px-4 py-1 text-xs font-bold rounded-full">
                    {post.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                  {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • By {post.author}
                </div>
                <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-[#0052FF] dark:group-hover:text-[#00ffcc] transition-colors text-black dark:text-white">{post.title}</h2>
                <div 
                  className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.content.substring(0, 300) + '...' }}
                />
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#1f2229]">
                  <span className="text-[#0052FF] dark:text-[#00ffcc] flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              </article>
            </Link>
          ))}
        </div>

        {status === 'CanLoadMore' && (
          <div className="text-center mt-16">
            <button 
              onClick={() => loadMore(5)}
              className="bg-transparent border-2 border-[#0052FF] dark:border-[#00ffcc] text-[#0052FF] dark:text-[#00ffcc] px-10 py-4 text-sm uppercase tracking-wider font-bold rounded-full hover:bg-[#0052FF] dark:hover:bg-[#00ffcc] hover:text-white dark:hover:text-black transition-all"
            >
              Load More
            </button>
          </div>
        )}
        
        {status === 'LoadingMore' && (
          <div className="text-center py-20 text-[#0052FF] dark:text-[#00ffcc] animate-pulse">Loading more...</div>
        )}
      </main>
      <BrxFooter />
      </div>
  );
}

export default function BlogPage() {
  return (
    <ConvexClientProvider>
      <BlogContent />
    </ConvexClientProvider>
  );
}
