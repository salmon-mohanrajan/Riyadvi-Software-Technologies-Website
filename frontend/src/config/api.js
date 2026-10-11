/**
 * API Configuration Module
 * Centralizes the backend REST API base URL.
 * Automatically falls back to local development (http://127.0.0.1:5000)
 * if NEXT_PUBLIC_API_URL environment variable is not defined.
 *
 * Normalizes trailing slashes and redundant '/api' suffixes so requests
 * never accidentally produce duplicate paths like '/api/api/...'.
 */

const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

export const API_BASE_URL = rawUrl
  .trim()
  .replace(/\/+$/, '')
  .replace(/\/api$/, '');
