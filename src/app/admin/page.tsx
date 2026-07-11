"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TiptapLink from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import ConvexClientProvider from '../ConvexClientProvider';
import BrxFooter from '@/components/BrxFooter';
import {
  Bold, Italic, Underline as UIcon, Strikethrough, Highlighter,
  Heading1, Heading2, Heading3, List, ListOrdered, Quote,
  ImagePlus, Link as LinkIcon, Undo, Redo, Trash2,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Minus, Subscript as SubIcon, Superscript as SupIcon,
  Type, Scissors, ClipboardCopy, Clipboard, X, Unlink,
  Palette, LayoutDashboard, FileText, PenTool, Edit3, Eye, LogOut
} from 'lucide-react';
import { Id } from '../../../convex/_generated/dataModel';

import './editor.css';

/* ─── Login ─── */
function AdminLoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === 'SONISHRIYASH@GMAIL' && loginPassword === 'Soni#2023') onSuccess();
    else setError('Invalid ID or Password');
  };
  return (
    <div className="pt-32 pb-20 px-6 max-w-md mx-auto min-h-screen text-black">
      <h1 className="text-3xl font-bold text-[#0052FF] mb-8 text-center">Admin Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Login ID</label>
          <input type="text" value={loginId} onChange={e => setLoginId(e.target.value)} placeholder="Enter your login ID" className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Password</label>
          <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Enter your password" className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" required />
        </div>
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        <button type="submit" className="mt-4 p-4 bg-[#0052FF] text-white font-bold text-lg rounded shadow-sm cursor-pointer hover:bg-blue-700 transition-all">Login</button>
      </form>
    </div>
  );
}

/* ─── Toolbar Button ─── */
function TBtn({ onClick, active, children, title }: { onClick: () => void; active?: boolean; children: React.ReactNode; title?: string }) {
  return <button type="button" onClick={onClick} title={title} className={`p-1.5 rounded transition-colors ${active ? 'bg-[#0052FF] text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{children}</button>;
}

/* ─── Context Menu ─── */
function ContextMenu({ x, y, editor, onClose, onInsertImage, onInsertLink }: any) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const items = [
    { icon: <Scissors size={14}/>, label: 'Cut', shortcut: 'Ctrl+X', action: () => { document.execCommand('cut'); onClose(); }},
    { icon: <ClipboardCopy size={14}/>, label: 'Copy', shortcut: 'Ctrl+C', action: () => { document.execCommand('copy'); onClose(); }},
    { icon: <Clipboard size={14}/>, label: 'Paste', shortcut: 'Ctrl+V', action: () => { navigator.clipboard.readText().then(t => editor?.commands.insertContent(t)); onClose(); }},
    { icon: <Trash2 size={14}/>, label: 'Delete', action: () => { editor?.commands.deleteSelection(); onClose(); }},
    'sep',
    { icon: <Bold size={14}/>, label: 'Bold', shortcut: 'Ctrl+B', action: () => { editor?.chain().focus().toggleBold().run(); onClose(); }},
    { icon: <Italic size={14}/>, label: 'Italic', shortcut: 'Ctrl+I', action: () => { editor?.chain().focus().toggleItalic().run(); onClose(); }},
    { icon: <UIcon size={14}/>, label: 'Underline', shortcut: 'Ctrl+U', action: () => { editor?.chain().focus().toggleUnderline().run(); onClose(); }},
    'sep',
    { icon: <LinkIcon size={14}/>, label: 'Insert link', shortcut: 'Ctrl+K', action: () => { onInsertLink(); onClose(); }},
    { icon: <ImagePlus size={14}/>, label: 'Insert image', action: () => { onInsertImage(); onClose(); }},
    'sep',
    { icon: <X size={14}/>, label: 'Clear formatting', shortcut: 'Ctrl+\\', action: () => { editor?.chain().focus().clearNodes().unsetAllMarks().run(); onClose(); }},
  ];

  return (
    <div ref={ref} style={{ top: y, left: x }} className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-1 min-w-[220px] text-sm">
      {items.map((item, i) => item === 'sep' ? <div key={i} className="my-1 border-t border-gray-100" /> : (
        <button key={i} type="button" onClick={(item as any).action} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700 text-left">
          <span className="w-5 flex justify-center text-gray-400">{(item as any).icon}</span>
          <span className="flex-1">{(item as any).label}</span>
          {(item as any).shortcut && <span className="text-xs text-gray-400">{(item as any).shortcut}</span>}
        </button>
      ))}
    </div>
  );
}

/* ─── Editor Component ─── */
function PostEditor({ postToEdit, onSuccess }: { postToEdit?: any, onSuccess: () => void }) {
  const [title, setTitle] = useState(postToEdit?.title || '');
  const [templateImage, setTemplateImage] = useState(postToEdit?.templateImage || '');
  const [author, setAuthor] = useState(postToEdit?.author || '');
  const [seoTitle, setSeoTitle] = useState(postToEdit?.seoTitle || '');
  const [seoDescription, setSeoDescription] = useState(postToEdit?.seoDescription || '');
  const [tags, setTags] = useState(postToEdit?.tags?.join(', ') || '');
  const [isPublished, setIsPublished] = useState(postToEdit?.isPublished ?? false);
  const [isFeatured, setIsFeatured] = useState(postToEdit?.isFeatured ?? false);
  const [showNewsletter, setShowNewsletter] = useState(postToEdit?.showNewsletter ?? true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [ctxMenu, setCtxMenu] = useState<{x:number;y:number}|null>(null);

  const createPost = useMutation(api.posts.createPost);
  const updatePost = useMutation(api.posts.updatePost);
  const generateUploadUrl = useMutation(api.posts.generateUploadUrl);
  const getImageUrl = useMutation(api.posts.getImageUrl);

  const uploadFile = useCallback(async (file: File) => {
    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, { method: "POST", headers: { "Content-Type": file.type }, body: file });
    const { storageId } = await result.json();
    return await getImageUrl({ storageId });
  }, [generateUploadUrl, getImageUrl]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TiptapLink.configure({ openOnClick: false }),
      Underline,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start writing your article...' }),
      Subscript, Superscript, HorizontalRule, Color, TextStyle,
    ],
    content: postToEdit?.content || '',
    immediatelyRender: true,
    editorProps: {
      attributes: { class: 'docs-editor prose prose-lg max-w-none min-h-[400px] p-6 focus:outline-none' },
      handleDOMEvents: {
        contextmenu: (view, event) => {
          event.preventDefault();
          setCtxMenu({ x: event.clientX, y: event.clientY });
          return true;
        },
      },
    },
  });

  const handleTemplateImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try { setUploadingImage(true); const url = await uploadFile(file); if (url) setTemplateImage(url); }
    catch (err) { console.error(err); alert('Failed to upload image'); }
    finally { setUploadingImage(false); }
  };

  const insertImage = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/png, image/jpeg'); input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file && editor) {
        try { const url = await uploadFile(file); if (url) editor.chain().focus().setImage({ src: url }).run(); }
        catch (err) { console.error(err); alert('Failed to upload image'); }
      }
    };
  };

  const insertLink = () => {
    const url = window.prompt('Enter URL:');
    if (url && editor) editor.chain().focus().setLink({ href: url }).run();
  };

  const setColor = (color: string) => { editor?.chain().focus().setColor(color).run(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const content = editor?.getHTML() || '';
    if (!title || !content || content === '<p></p>' || !templateImage) { alert("Title, content, and template image are required!"); return; }
    setIsSubmitting(true);
    try {
      const payload = { title, content, templateImage, author, isPublished, isFeatured, showNewsletter, tags: tags.split(',').map(t => t.trim()).filter(Boolean), seoTitle, seoDescription };
      if (postToEdit) {
        await updatePost({ id: postToEdit._id, ...payload });
        alert('Blog post updated successfully!');
      } else {
        await createPost(payload);
        alert('Blog post published successfully!');
        setTitle(''); setTemplateImage(''); setAuthor(''); setSeoTitle(''); setSeoDescription(''); setTags('');
        setIsPublished(false); setIsFeatured(false); setShowNewsletter(true); editor?.commands.clearContent();
      }
      onSuccess();
    } catch (error) { console.error(error); alert('Error saving post'); }
    finally { setIsSubmitting(false); }
  };

  const colors = ['#000000','#434343','#666666','#999999','#E03131','#E8590C','#F59F00','#2F9E44','#1971C2','#6741D9','#0052FF'];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-4xl">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium">Title *</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium">Template Image (Cover Photo) *</label>
        <input type="file" accept="image/png, image/jpeg" onChange={handleTemplateImageUpload} className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm outline-none" />
        {uploadingImage && <span className="text-[#0052FF] text-sm">Uploading...</span>}
        {templateImage && <img src={templateImage} alt="Preview" className="h-40 w-full max-w-sm object-cover mt-2 rounded border border-gray-200" />}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Author</label>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Tags (comma separated)</label>
          <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="Blockchain, DeFi, Update" className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" />
        </div>
      </div>

      {/* Editor */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium">Content *</label>
        <div className="bg-white text-black border border-gray-300 rounded-lg shadow-sm overflow-hidden relative">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-gray-200 bg-[#f8f9fa] sticky top-0 z-10">
            <TBtn onClick={() => editor?.chain().focus().undo().run()} title="Undo (Ctrl+Z)"><Undo size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().redo().run()} title="Redo (Ctrl+Y)"><Redo size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')}><Bold size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')}><Italic size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleUnderline().run()} active={editor?.isActive('underline')}><UIcon size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleStrike().run()} active={editor?.isActive('strike')}><Strikethrough size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleHighlight().run()} active={editor?.isActive('highlight')}><Highlighter size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            {/* Color Picker */}
            <div className="relative group">
              <TBtn onClick={() => {}} title="Text Color"><Palette size={15}/></TBtn>
              <div className="absolute top-full left-0 mt-1 hidden group-hover:flex bg-white border border-gray-200 rounded-lg shadow-lg p-2 gap-1 flex-wrap w-[130px] z-50">
                {colors.map(c => <button key={c} type="button" onClick={() => setColor(c)} className="w-5 h-5 rounded-sm border border-gray-200 hover:scale-125 transition-transform" style={{backgroundColor: c}} />)}
              </div>
            </div>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().toggleSubscript().run()} active={editor?.isActive('subscript')}><SubIcon size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleSuperscript().run()} active={editor?.isActive('superscript')}><SupIcon size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} active={editor?.isActive('heading', { level: 1 })}><Heading1 size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })}><Heading2 size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} active={editor?.isActive('heading', { level: 3 })}><Heading3 size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')}><List size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')}><ListOrdered size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().toggleBlockquote().run()} active={editor?.isActive('blockquote')}><Quote size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().setTextAlign('left').run()} active={editor?.isActive({ textAlign: 'left' })}><AlignLeft size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().setTextAlign('center').run()} active={editor?.isActive({ textAlign: 'center' })}><AlignCenter size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().setTextAlign('right').run()} active={editor?.isActive({ textAlign: 'right' })}><AlignRight size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().setTextAlign('justify').run()} active={editor?.isActive({ textAlign: 'justify' })}><AlignJustify size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={insertLink} active={editor?.isActive('link')}><LinkIcon size={15}/></TBtn>
            {editor?.isActive('link') && <TBtn onClick={() => editor?.chain().focus().unsetLink().run()} title="Remove Link"><Unlink size={15}/></TBtn>}
            <TBtn onClick={insertImage}><ImagePlus size={15}/></TBtn>
            <TBtn onClick={() => editor?.chain().focus().setHorizontalRule().run()}><Minus size={15}/></TBtn>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <TBtn onClick={() => editor?.chain().focus().clearNodes().unsetAllMarks().run()}><Type size={15}/></TBtn>
            <TBtn onClick={() => editor?.commands.clearContent()}><Trash2 size={15}/></TBtn>
          </div>
          <EditorContent editor={editor} className="min-h-[450px]" />
          {ctxMenu && <ContextMenu x={ctxMenu.x} y={ctxMenu.y} editor={editor} onClose={() => setCtxMenu(null)} onInsertImage={insertImage} onInsertLink={insertLink} />}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">SEO Title</label>
          <input type="text" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">SEO Description</label>
          <textarea value={seoDescription} onChange={e => setSeoDescription(e.target.value)} className="p-3 bg-white border border-gray-300 text-black rounded shadow-sm min-h-[48px] focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="font-bold text-lg text-gray-800">Article Settings</h3>
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} className="w-4 h-4 accent-[#0052FF]" /><span className="text-gray-700 font-medium">Feature article</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showNewsletter} onChange={e => setShowNewsletter(e.target.checked)} className="w-4 h-4 accent-[#0052FF]" /><span className="text-gray-700 font-medium">Newsletter box</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="w-4 h-4 accent-[#0052FF]" /><span className="text-gray-700 font-bold">Publish immediately</span></label>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting || uploadingImage} className="mt-2 p-4 bg-[#0052FF] text-white font-bold text-lg rounded shadow-sm cursor-pointer disabled:opacity-70 hover:bg-blue-700 transition-all">
        {isSubmitting ? 'Saving...' : postToEdit ? 'Update Post' : 'Publish Blog Post'}
      </button>
    </form>
  );
}

/* ─── Dashboard Sections ─── */

function DashboardAnalytics() {
  const posts = useQuery(api.posts.getAllPostsNoPagination) || [];
  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
  const totalPublished = posts.filter(p => p.isPublished).length;

  const maxViews = Math.max(...posts.map(p => p.views || 0), 1);

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-900">Analytics Overview</h2>
      
      {/* Top Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
          <p className="text-gray-500 font-medium flex items-center gap-2"><Eye size={18}/> Total Views</p>
          <p className="text-4xl font-bold text-[#0052FF]">{totalViews.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
          <p className="text-gray-500 font-medium flex items-center gap-2"><FileText size={18}/> Total Posts</p>
          <p className="text-4xl font-bold text-gray-900">{posts.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
          <p className="text-gray-500 font-medium flex items-center gap-2"><Eye size={18}/> Published</p>
          <p className="text-4xl font-bold text-green-600">{totalPublished}</p>
        </div>
      </div>

      {/* Individual Post Analysis */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Article Performance</h3>
        <div className="flex flex-col gap-4">
          {posts.map(post => {
            const views = post.views || 0;
            const percentage = Math.round((views / maxViews) * 100);
            
            return (
              <div key={post._id} className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">{post.title}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()} • {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <span className="font-bold text-gray-900">{views.toLocaleString()} views</span>
                </div>
                {/* Visual bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-[#0052FF] h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
          {posts.length === 0 && (
            <p className="text-gray-500 text-center py-4">No articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function PostManager({ onEdit }: { onEdit: (post: any) => void }) {
  const posts = useQuery(api.posts.getAllPostsNoPagination);
  const deletePost = useMutation(api.posts.deletePost);

  if (posts === undefined) return <div className="text-gray-500">Loading posts...</div>;

  const handleDelete = async (id: Id<"posts">) => {
    if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      await deletePost({ id });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-900">Manage Posts</h2>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 text-gray-600 font-medium">Title</th>
              <th className="p-4 text-gray-600 font-medium">Status</th>
              <th className="p-4 text-gray-600 font-medium text-right">Views</th>
              <th className="p-4 text-gray-600 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-semibold text-gray-900">{post.title}</div>
                  <div className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</div>
                </td>
                <td className="p-4">
                  {post.isPublished 
                    ? <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Published</span>
                    : <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Draft</span>
                  }
                </td>
                <td className="p-4 text-right font-medium text-gray-700">{post.views || 0}</td>
                <td className="p-4 text-right">
                  <button onClick={() => onEdit(post)} className="text-[#0052FF] hover:text-blue-800 p-2"><Edit3 size={18} /></button>
                  <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-700 p-2 ml-2"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={4} className="p-6 text-center text-gray-500">No posts found. Create one!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/* ─── Admin Portal Layout ─── */
function AdminPortal() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'manage' | 'create'>('analytics');
  const [editingPost, setEditingPost] = useState<any>(null);

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setActiveTab('create');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between fixed top-20 bottom-0 left-0">
        <div className="p-6 flex flex-col gap-2">
          <button 
            onClick={() => { setActiveTab('analytics'); setEditingPost(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${activeTab === 'analytics' ? 'bg-[#0052FF] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <LayoutDashboard size={20} /> Analytics
          </button>
          <button 
            onClick={() => { setActiveTab('manage'); setEditingPost(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${activeTab === 'manage' ? 'bg-[#0052FF] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FileText size={20} /> Manage Posts
          </button>
          <button 
            onClick={() => { setActiveTab('create'); setEditingPost(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${activeTab === 'create' ? 'bg-[#0052FF] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <PenTool size={20} /> {editingPost ? 'Edit Post' : 'Create Post'}
          </button>
        </div>
        <div className="p-6">
          <button onClick={() => window.location.reload()} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-10 flex-1 w-full flex justify-center text-black">
        {activeTab === 'analytics' && <DashboardAnalytics />}
        {activeTab === 'manage' && <PostManager onEdit={handleEdit} />}
        {activeTab === 'create' && (
          <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 self-start max-w-4xl w-full mb-6">
              {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <PostEditor postToEdit={editingPost} onSuccess={() => { setEditingPost(null); setActiveTab('manage'); }} />
          </div>
        )}
      </main>
    </div>
  );
}

/* ─── Page Entry ─── */
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  if (!isAuthenticated) return <AdminLoginForm onSuccess={() => setIsAuthenticated(true)} />;
  
  return (
    <ConvexClientProvider>
      <AdminPortal />
    </ConvexClientProvider>
  );
}
