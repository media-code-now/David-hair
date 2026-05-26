'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface AccessibleDropdownMenuProps {
  label: string;
  items: DropdownItem[];
  onItemClick?: (href: string) => void;
  ariaLabel?: string;
  className?: string;
}

const AccessibleDropdownMenu = React.forwardRef<HTMLDivElement, AccessibleDropdownMenuProps>(
  (
    {
      label,
      items,
      onItemClick,
      ariaLabel,
      className = '',
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [isOpen, setIsOpen] = React.useState(false);

    const closeMenu = useCallback(() => {
      setIsOpen(false);
      buttonRef.current?.focus();
    }, []);

    const openMenu = useCallback(() => {
      setIsOpen(true);
      setTimeout(() => itemRefs.current[0]?.focus(), 0);
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          openMenu();
        }
        return;
      }

      const length = items.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          itemRefs.current[0]?.focus();
          break;

        case 'ArrowUp':
          e.preventDefault();
          itemRefs.current[length - 1]?.focus();
          break;

        case 'Home':
          e.preventDefault();
          itemRefs.current[0]?.focus();
          break;

        case 'End':
          e.preventDefault();
          itemRefs.current[length - 1]?.focus();
          break;

        case 'Escape':
          e.preventDefault();
          closeMenu();
          break;

        case 'Tab':
          closeMenu();
          break;
      }
    }, [isOpen, items.length, openMenu, closeMenu]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
          closeMenu();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen, closeMenu]);

    return (
      <div
        ref={ref || containerRef}
        className={`relative ${className}`}
      >
        <button
          ref={buttonRef}
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          aria-label={ariaLabel || `${label}, button`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className="
            px-3.5 py-2 rounded-xl text-sm font-medium text-gray-600
            hover:text-navy-900 hover:bg-navy-50/60
            transition-all duration-200
            flex items-center gap-2
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500
          "
        >
          {label}
          {isOpen ? (
            <ChevronUp size={14} aria-hidden="true" />
          ) : (
            <ChevronDown size={14} aria-hidden="true" />
          )}
        </button>

        {isOpen && (
          <div
            ref={menuRef}
            role="menu"
            aria-label={`${label} submenu`}
            className="
              absolute top-full right-0 mt-1
              min-w-[220px] rounded-xl
              bg-white shadow-lg shadow-navy-900/15
              border border-navy-100/50
              overflow-hidden z-50
              animate-in fade-in slide-in-from-top-2 duration-150
            "
          >
            {items.map((item, index) => (
              <Link
                key={item.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                href={item.href}
                role="menuitem"
                aria-label={item.ariaLabel || item.label}
                onClick={() => {
                  onItemClick?.(item.href);
                  closeMenu();
                }}
                className="
                  px-4 py-2.5 text-sm font-medium
                  text-gray-700 hover:text-navy-900
                  hover:bg-navy-50/80
                  transition-colors duration-150
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500
                  block w-full text-right
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  },
);

AccessibleDropdownMenu.displayName = 'AccessibleDropdownMenu';

export default AccessibleDropdownMenu;
