import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  href?: string;
  download?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  href,
  download,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-xl',
  };

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97]',
    secondary:
      'bg-white/10 text-text hover:bg-white/15 border border-white/10 hover:border-white/20 active:scale-[0.97]',
    ghost:
      'text-text-muted hover:text-text hover:bg-white/5 active:scale-[0.97]',
    outline:
      'border border-border hover:border-primary/40 text-text-muted hover:text-text hover:bg-primary/5 active:scale-[0.97]',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
