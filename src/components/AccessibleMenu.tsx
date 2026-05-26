'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  ariaLabel?: string;
}

interface AccessibleMenuProps {
  items: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: (href: string) => void;
  ariaLabel?: string;
  className?: string;
}

const AccessibleMenu = React.forwardRef<HTMLElement, AccessibleMenuProps>(
  (
    {
      items,
      orientation = 'horizontal',
      onItemClick,
      ariaLabel = 'Navigation menu',
      className = '',
    },
    ref,
  ) => {
    const menuRef = useRef<HTMLElement>(null);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      const key = e.key;
      const length = items.length;

      if (length === 0) return;

      let newIndex = focusedIndex;

      if (orientation === 'horizontal') {
        if (key === 'ArrowRight' || key === 'ArrowDown') {
          e.preventDefault();
          newIndex = focusedIndex === null ? 0 : (focusedIndex + 1) % length;
        } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
          e.preventDefault();
          newIndex = focusedIndex === null ? length - 1 : (focusedIndex - 1 + length) % length;
        } else if (key === 'Home') {
          e.preventDefault();
          newIndex = 0;
        } else if (key === 'End') {
          e.preventDefault();
          newIndex = length - 1;
        }
      } else {
        if (key === 'ArrowDown') {
          e.preventDefault();
          newIndex = focusedIndex === null ? 0 : (focusedIndex + 1) % length;
        } else if (key === 'ArrowUp') {
          e.preventDefault();
          newIndex = focusedIndex === null ? length - 1 : (focusedIndex - 1 + length) % length;
        } else if (key === 'Home') {
          e.preventDefault();
          newIndex = 0;
        } else if (key === 'End') {
          e.preventDefault();
          newIndex = length - 1;
        }
      }

      if (newIndex !== null && newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        menuItemRefs.current[newIndex]?.focus();
      }
    }, [focusedIndex, items.length, orientation]);

    useEffect(() => {
      const menu = menuRef.current;
      if (!menu) return;

      menu.addEventListener('keydown', handleKeyDown);
      return () => menu.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handleItemClick = (href: string) => {
      setFocusedIndex(null);
      onItemClick?.(href);
    };

    return (
      <nav
        ref={ref || menuRef}
        aria-label={ariaLabel}
        role="navigation"
        className={`
          ${orientation === 'horizontal' ? 'flex items-center gap-1' : 'flex flex-col gap-1'}
          ${className}
        `}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              ref={(el) => {
                menuItemRefs.current[index] = el;
              }}
              href={item.href}
              onClick={() => handleItemClick(item.href)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              aria-label={item.ariaLabel || item.label}
              role="menuitem"
              className={`
                px-3.5 py-2 rounded-xl text-sm font-medium
                transition-all duration-200
                flex items-center gap-2
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500
                hover:text-navy-900 hover:bg-navy-50/60
                ${focusedIndex === index ? 'bg-navy-100/80 text-navy-900' : 'text-gray-600'}
              `}
            >
              {Icon && <Icon size={16} aria-hidden="true" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    );
  },
);

AccessibleMenu.displayName = 'AccessibleMenu';

export default AccessibleMenu;
