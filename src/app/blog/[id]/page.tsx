"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { ArrowLeft, Share2, Eye } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ConvexClientProvider from '../../ConvexClientProvider';
import BrxFooter from '@/components/BrxFooter';
import { Id } from '../../../../convex/_generated/dataModel';
import SubscribeNewsletter from '@/components/SubscribeNewsletter';

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function BlogPostContent() {
  const params = useParams();
  const id = params.id as string;
  
  const post = useQuery(api.posts.getPostBySlug, { slug: id });
  const recentPosts = useQuery(api.posts.getRecentPublishedPosts, { limit: 4 });
  const incrementViews = useMutation(api.posts.incrementViews);
  const viewLogged = useRef(false);

  useEffect(() => {
    if (post && post._id && !viewLogged.current) {
      incrementViews({ id: post._id });
      viewLogged.current = true;
    }
  }, [post, incrementViews]);

  if (post === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="animate-pulse text-[#0052FF] text-xl">Loading article...</div>
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black flex-col gap-4">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <Link href="/blog" className="text-[#0052FF] flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = `https://www.brixs.space/blog/${id}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title || "");

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Sidebar (Sticky tags & share) */}
          <aside className="lg:w-1/4 flex flex-col gap-8 hidden lg:block sticky top-32 self-start">
            <Link href="/blog" className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wide font-semibold mb-12">
              <ArrowLeft size={16} /> All Posts
            </Link>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-wider rounded-full text-gray-700">
                BLOG
              </span>
              {post.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-wider rounded-full text-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Share</p>
              <div className="flex items-center gap-4 text-gray-500">
                <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#000000] transition-colors" title="Share on Twitter/X">
                  <TwitterIcon size={20} />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors" title="Share on LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1877f2] transition-colors" title="Share on Facebook">
                  <FacebookIcon size={20} />
                </a>
              </div>
            </div>

            {post.showNewsletter !== false && (
              <div className="mt-8">
                <SubscribeNewsletter fullWidth />
              </div>
            )}
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 flex flex-col">
            <Link href="/blog" className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wide font-semibold mb-6 lg:hidden">
              <ArrowLeft size={16} /> All Posts
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/full_logo_black_on_white.png" alt="Author" className="h-4 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">{post.author}</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest mt-1 flex items-center gap-2">
                  {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 5 MIN READ 
                  <span className="flex items-center gap-1 text-gray-400 ml-2"><Eye size={14} /> {post.views || 0}</span>
                </span>
              </div>
            </div>

            <div className="w-full aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-12 border border-gray-200">
              <img src={post.templateImage} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Rich Text Rendered */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0052FF] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-gray-200 prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 lg:hidden">
               <div className="flex items-center gap-4 text-gray-500">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Share</p>
                <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#000000] transition-colors" title="Share on Twitter/X">
                  <TwitterIcon size={20} />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors" title="Share on LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1877f2] transition-colors" title="Share on Facebook">
                  <FacebookIcon size={20} />
                </a>
              </div>
              {post.showNewsletter !== false && (
                <SubscribeNewsletter />
              )}
            </div>
          </article>
        </div>
      </main>

      {/* Previous Articles Section */}
      {recentPosts && recentPosts.length > 1 && (
        <section className="bg-gray-50 border-t border-gray-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0052FF] mb-8">
              Previous Articles.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts
                .filter(p => p._id !== post._id)
                .slice(0, 3)
                .map((prevPost) => (
                  <Link 
                    href={`/blog/${prevPost.slug || prevPost._id}`} 
                    key={prevPost._id}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col"
                  >
                    <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-100">
                      <img 
                        src={prevPost.templateImage} 
                        alt={prevPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#0052FF] transition-colors line-clamp-2">
                        {prevPost.title}
                      </h3>
                      <div 
                        className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow"
                        dangerouslySetInnerHTML={{ __html: prevPost.content.substring(0, 150) + '...' }}
                      />
                      <span className="text-xs font-semibold text-gray-400 mt-auto uppercase tracking-wider">
                        {new Date(prevPost.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
      
      <BrxFooter />
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <ConvexClientProvider>
      <BlogPostContent />
    </ConvexClientProvider>
  );
}
