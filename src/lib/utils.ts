import { clsx } from 'clsx';
import { twMerge } from 'wind-merge';
import { formatRelative } from 'date-fns';
import { format } from 'date-fns';

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeTime(iso: string): string {
  return formatRelative(new Date(iso), new Date());
}

export function truncate(str: string, len: number): string {
  if (str.length <= len) {
    return str;
  }
  return str.substring(0, len) + '...';
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateId(): string {
  try {
    return crypto.randomUUID();
  } catch (e) {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}