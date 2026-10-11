import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Article title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: true,
      default: 'General',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: String,
      default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    author: {
      name: {
        type: String,
        default: 'Riyadvi Engineering Team',
      },
      role: {
        type: String,
        default: 'Technical Architecture Lead',
      },
    },
    excerpt: {
      type: String,
      required: true,
    },
    tags: [String],
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
