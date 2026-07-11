import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getPosts = query({
  args: {
    paginationOpts: v.any(), // Convex pagination opts
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("posts")
      .withIndex("by_creation")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const getAllPostsNoPagination = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("posts")
      .withIndex("by_creation")
      .order("desc")
      .collect();
  },
});

export const getPublishedPosts = query({
  args: {
    paginationOpts: v.any(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("posts")
      .withIndex("by_creation")
      .filter((q) => q.eq(q.field("isPublished"), true))
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const getRecentPublishedPosts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("posts")
      .withIndex("by_creation")
      .filter((q) => q.eq(q.field("isPublished"), true))
      .order("desc")
      .take(args.limit || 10);
  },
});

export const createPost = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    templateImage: v.string(),
    author: v.optional(v.string()),
    language: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    sourceLinks: v.optional(v.array(v.string())),
    isPublished: v.boolean(),
    isFeatured: v.optional(v.boolean()),
    showNewsletter: v.optional(v.boolean()),
    slug: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let slug = args.slug;
    if (!slug) {
      const baseSlug = args.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      slug = `${baseSlug}-${Math.floor(Math.random() * 10000)}`;
    }
    return await ctx.db.insert("posts", {
      ...args,
      views: 0,
      slug,
      createdAt: Date.now(),
    });
  },
});

export const updatePost = mutation({
  args: {
    id: v.id("posts"),
    title: v.string(),
    content: v.string(),
    templateImage: v.string(),
    author: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    isPublished: v.boolean(),
    isFeatured: v.optional(v.boolean()),
    showNewsletter: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const getImageUrl = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const getPostById = query({
  args: {
    id: v.id("posts"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    let post = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
      
    if (!post) {
      // Fallback for older posts that don't have slugs and were accessed by ID
      try {
        post = await ctx.db.get(args.slug as Id<"posts">);
      } catch (e) {
        // Not a valid ID format
      }
    }
    return post;
  }
});

export const incrementViews = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (post) {
      await ctx.db.patch(args.id, { views: (post.views || 0) + 1 });
    }
  },
});
