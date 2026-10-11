/**
 * API Configuration Module
 * Centralizes the backend REST API base URL.
 * Automatically falls back to local development (127.0.0.1:5000)
 * if NEXT_PUBLIC_API_URL environment variable is not defined.
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
