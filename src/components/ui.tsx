'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({ children, variant = 'primary', size = 'md', loading = false, disabled = false, onClick, className, href }: ButtonProps) {
  const classes = twMerge(
    'flex items-center justify-center rounded-lg py-2 px-4 text-sm font-medium',
    {
      primary: 'bg-zinc-900 text-white hover:bg-zinc-700',
      secondary: 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200',
      outline: 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50',
      ghost: 'bg-transparent text-zinc-600 hover:bg-zinc-50',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    }[variant],
    {
      sm: 'py-1 px-2 text-xs',
      md: 'py-2 px-4 text-sm',
      lg: 'py-3 px-6 text-base',
    }[size],
    loading ? 'pointer-events-none opacity-50' : '',
    disabled ? 'pointer-events-none opacity-50' : '',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function cn(...inputs: Parameters<typeof clsx>) {
  return clsx(...inputs);
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>{children}</div>;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('px-4 py-2 border-b border-zinc-200', className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h2 className={cn('text-lg font-bold text-zinc-900', className)}>{children}</h2>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('px-4 py-2', className)}>{children}</div>;
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const classes = cn(
    'px-2 py-1 text-sm font-medium rounded-md',
    {
      default: 'bg-zinc-100 text-zinc-600',
      success: 'bg-emerald-50 text-emerald-600',
      warning: 'bg-amber-50 text-amber-600',
      error: 'bg-red-50 text-red-600',
      info: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
    }[variant]
  );

  return <div className={classes}>{children}</div>;
}

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'password';
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Input({ label, placeholder, value, onChange, error, type = 'text', icon, disabled = false, className }: InputProps) {
  const classes = cn(
    'block w-full rounded-md shadow-sm',
    {
      error: 'border-red-500',
    },
    className
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-zinc-600">{label}</label>
      <div className="relative mt-1">
        {icon && <div className="absolute left-0 top-1/2 -translate-y-1/2 ml-3">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn('block w-full rounded-md pl-10 py-2 text-sm text-zinc-600 shadow-sm', classes)}
        />
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
}

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin h-5 w-5 border-4 border-zinc-100 rounded-full border-t-zinc-200', className)}
      viewBox="0 0 24 24"
    />
  );
}

interface AvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  const initials = name.split(' ').map((word) => word[0]).join('');
  const color = `hsl(${name.charCodeAt(0) % 360}, 70%, 60%)`;

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        {
          xs: 'h-6 w-6 text-xs',
          sm: 'h-8 w-8 text-sm',
          md: 'h-10 w-10 text-base',
          lg: 'h-12 w-12 text-lg',
        }[size],
        `bg-${color}`,
        className
      )}
    >
      <span className="text-white">{initials}</span>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number | string;
  change: number;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({ title, value, change, changeType = 'neutral', icon, sparkline }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-zinc-900">{value}</div>
          <div
            className={cn(
              'text-sm font-medium',
              {
                up: 'text-emerald-600',
                down: 'text-red-500',
                neutral: 'text-zinc-500',
              }[changeType]
            )}
          >
            {change > 0 ? <Lucide icon="arrow-up" /> : <Lucide icon="arrow-down" />} {change}%
          </div>
        </div>
        {sparkline && (
          <div className="mt-4">
            <svg width={40} height={20} viewBox="0 0 40 20">
              <polyline
                points={sparkline.map((value, index) => `${index * 10},${20 - value}`).join(' ')}
                stroke="#6366f1"
                strokeWidth={1.5}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={cn('bg-white rounded-2xl shadow-xl animate-slideup', size === 'sm' ? 'w-full max-w-sm' : 'w-full max-w-lg')}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
          <Button variant="ghost" onClick={onClose}>
            <Lucide icon="x" />
          </Button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="rounded-lg bg-zinc-100 p-4">{icon}</div>
      <h2 className="mt-4 text-lg font-bold text-zinc-900">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

interface TableProps<T> {
  columns: { key: string; label: string; render?: (row: T) => React.ReactNode }[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T>({ columns, data, onRowClick }: TableProps<T>) {
  return (
    <table className="w-full table-auto">
      <thead className="bg-zinc-100">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 text-sm font-medium text-zinc-600">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={cn('hover:bg-zinc-50', onRowClick && 'cursor-pointer')} onClick={() => onRowClick && onRowClick(row)}>
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-2 text-sm text-zinc-600">
                {column.render ? column.render(row) : row[column.key as keyof T]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}