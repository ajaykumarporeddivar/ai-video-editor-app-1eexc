'use client';

import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';

interface EntityDetailModalProps {
  item: Record<string, unknown> | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function EntityDetailModal({ item, open, onClose, title }: EntityDetailModalProps) {
  if (!item) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="p-4">
        <h2 className="text-zinc-900 text-lg font-bold mb-2">{title}</h2>
        <Badge className="bg-emerald-50 border-emerald-200 text-emerald-600 mb-2">{item.status}</Badge>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(item).map(([key, value], index) => {
            if (key === 'id') return null;
            return (
              <div key={index} className="flex flex-col">
                <p className="text-zinc-600 text-sm font-medium mb-1">{key}</p>
                <p className="text-zinc-900 text-base">{value}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
          <Button type="button" className="bg-emerald-600 text-white hover:bg-emerald-700 mr-2" onClick={handleClose}>
            Approve
          </Button>
          <Button type="button" className="bg-zinc-900 text-white hover:bg-zinc-700 mr-2" onClick={handleClose}>
            Archive
          </Button>
          <Button type="button" className="bg-red-600 text-white hover:bg-red-700" onClick={handleClose}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps) {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="p-4">
        <h2 className="text-zinc-900 text-lg font-bold mb-2">{title}</h2>
        <p className="text-zinc-600 text-sm mb-4">{message}</p>
        <div className="flex justify-end">
          {variant === 'danger' ? (
            <Button type="button" className="bg-red-600 text-white hover:bg-red-700" onClick={handleConfirm}>
              {confirmLabel}
            </Button>
          ) : (
            <Button type="button" className="bg-zinc-900 text-white hover:bg-zinc-700" onClick={handleConfirm}>
              {confirmLabel}
            </Button>
          )}
          <Button type="button" className="bg-zinc-900 text-white hover:bg-zinc-700 ml-2" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string; icon?: React.ReactNode; description?: string }[];
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp') {
      // Handle up arrow key press
    } else if (event.key === 'ArrowDown') {
      // Handle down arrow key press
    } else if (event.key === 'Enter') {
      // Handle enter key press
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          className="block w-full p-2 pl-10 text-sm text-zinc-600 border border-zinc-200 rounded-lg focus:outline-none focus:ring-zinc-900"
          placeholder="Search..."
          autoFocus
          onKeyDown={handleKeyDown}
        />
        <ul className="mt-4">
          {filteredItems.map((item, index) => (
            <li key={index} className="py-2">
              <a href={item.href} className="flex items-center">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span className="text-zinc-900 text-base">{item.label}</span>
                {item.description && <p className="text-zinc-600 text-sm">{item.description}</p>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}