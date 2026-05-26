'use client';

import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a';
}

const variantStyles = {
  primary: 'bg-navy-900 text-white hover:bg-navy-800 active:scale-95 shadow-lg shadow-navy-900/25 border border-navy-700/20',
  secondary: 'bg-navy-50/80 text-navy-900 hover:bg-navy-100/80 active:scale-95 border border-navy-200/60',
  ghost: 'text-gray-600 hover:text-navy-900 hover:bg-navy-50/60 active:scale-95',
  success: 'bg-green-50/80 text-green-700 hover:bg-green-100/80 active:scale-95 border border-green-200/60',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs font-medium rounded-lg gap-1.5',
  md: 'px-4 py-2.5 text-sm font-semibold rounded-2xl gap-2',
  lg: 'px-6 py-3 text-base font-bold rounded-2xl gap-2.5',
};

const AccessibleButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, AccessibleButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      ariaLabel,
      isLoading = false,
      fullWidth = false,
      as = 'button',
      className = '',
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center
      transition-all duration-200 font-semibold
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500
      ${fullWidth ? 'w-full' : ''}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `;

    const buttonContent = (
      <>
        {Icon && iconPosition === 'left' && !isLoading && (
          <Icon size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} strokeWidth={2} aria-hidden="true" />
        )}
        
        {isLoading && (
          <svg className="animate-spin" width={size === 'sm' ? 14 : size === 'md' ? 16 : 20} height={size === 'sm' ? 14 : size === 'md' ? 16 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" strokeWidth="2" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
        
        {children && <span>{children}</span>}
        
        {Icon && iconPosition === 'right' && !isLoading && (
          <Icon size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} strokeWidth={2} aria-hidden="true" />
        )}
      </>
    );

    if (as === 'a') {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
          className={`${baseClasses} disabled:opacity-50 disabled:cursor-not-allowed`}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled || isLoading}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        className={`${baseClasses} disabled:opacity-50 disabled:cursor-not-allowed`}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {buttonContent}
      </button>
    );
  },
);

AccessibleButton.displayName = 'AccessibleButton';

export default AccessibleButton;
