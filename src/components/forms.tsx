'use client';

import { useState } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { DEMO_USER, VIDEOS } from '@/lib/data';

interface CreateEntityFormProps {
  // No props for now
}

export function CreateEntityForm({}: CreateEntityFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [duration, setDuration] = useState(0);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [errors, setErrors] = useState({ title: '', description: '', status: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = { title: '', description: '', status: '' };

    if (!title) {
      newErrors.title = 'Title is required';
    }

    if (!description) {
      newErrors.description = 'Description is required';
    }

    if (!status) {
      newErrors.status = 'Status is required';
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      // Simulate API call
      console.log('Entity created successfully!');
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setStatus('');
    setDuration(0);
    setViews(0);
    setLikes(0);
    setErrors({ title: '', description: '', status: '' });
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Title</label>
        <Input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={clsx('mt-1', errors.title && 'border-red-500')}
        />
        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Description</label>
        <Input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className={clsx('mt-1', errors.description && 'border-red-500')}
        />
        {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Status</label>
        <Input
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className={clsx('mt-1', errors.status && 'border-red-500')}
        />
        {errors.status && <p className="text-red-600 text-sm mt-1">{errors.status}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Duration</label>
        <Input type="number" value={duration} onChange={(event) => setDuration(Number(event.target.value))} className="mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Views</label>
        <Input type="number" value={views} onChange={(event) => setViews(Number(event.target.value))} className="mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-zinc-600">Likes</label>
        <Input type="number" value={likes} onChange={(event) => setLikes(Number(event.target.value))} className="mt-1" />
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="bg-zinc-900 text-white hover:bg-zinc-700">
          Create Entity
        </Button>
        <Button type="button" className="ml-2 bg-zinc-900 text-white hover:bg-zinc-700" onClick={handleReset}>
          Reset
        </Button>
      </div>
      {submitted && (
        <div className="bg-emerald-50 border-emerald-200 border p-4 mb-4 mt-4 text-emerald-600 rounded-lg">
          <p className="text-emerald-600">Entity created successfully!</p>
        </div>
      )}
    </form>
  );
}

interface SearchAndFilterProps {
  onChange: (filters: { search: string; status: string; dateRange: string; sortBy: string; sortDir: 'asc' | 'desc' }) => void;
}

export function SearchAndFilter({ onChange }: SearchAndFilterProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange({ search: event.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
    onChange({ search, status: event.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(event.target.value);
    onChange({ search, status, dateRange: event.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    onChange({ search, status, dateRange, sortBy: event.target.value, sortDir });
  };

  const handleSortDirChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDir(event.target.value as 'asc' | 'desc');
    onChange({ search, status, dateRange, sortBy, sortDir: event.target.value as 'asc' | 'desc' });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div className="flex flex-wrap justify-end mb-4">
      <div className="mr-4">
        <label className="block text-sm font-medium text-zinc-600">Search</label>
        <Input
          type="search"
          value={search}
          onChange={handleSearchChange}
          className="mt-1"
          placeholder="Search..."
        />
      </div>
      <div className="mr-4">
        <label className="block text-sm font-medium text-zinc-600">Status</label>
        <select
          value={status}
          onChange={handleStatusChange}
          className="mt-1 block w-full pl-10 py-2 text-base text-zinc-600 border border-zinc-200 rounded-lg focus:outline-none focus:ring-zinc-900"
        >
          <option value="">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="mr-4">
        <label className="block text-sm font-medium text-zinc-600">Date Range</label>
        <Input type="date" value={dateRange} onChange={handleDateRangeChange} className="mt-1" />
      </div>
      <div className="mr-4">
        <label className="block text-sm font-medium text-zinc-600">Sort By</label>
        <select
          value={sortBy}
          onChange={handleSortByChange}
          className="mt-1 block w-full pl-10 py-2 text-base text-zinc-600 border border-zinc-200 rounded-lg focus:outline-none focus:ring-zinc-900"
        >
          <option value="">Relevance</option>
          <option value="title">Title</option>
          <option value="createdAt">Creation Date</option>
        </select>
      </div>
      <div className="mr-4">
        <label className="block text-sm font-medium text-zinc-600">Sort Direction</label>
        <select
          value={sortDir}
          onChange={handleSortDirChange}
          className="mt-1 block w-full pl-10 py-2 text-base text-zinc-600 border border-zinc-200 rounded-lg focus:outline-none focus:ring-zinc-900"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Button type="button" className="bg-zinc-900 text-white hover:bg-zinc-700" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}

interface ExportButtonProps {
  data: any[];
  onClick: () => void;
}

export function ExportButton({ data, onClick }: ExportButtonProps) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((row) => Object.values(row)).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.csv';
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => {
      setExported(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="button" className="bg-zinc-900 text-white hover:bg-zinc-700" onClick={handleExport}>
        Export to CSV
      </Button>
      {exported && <p className="text-emerald-600 mt-1">Exported!</p>}
    </div>
  );
}