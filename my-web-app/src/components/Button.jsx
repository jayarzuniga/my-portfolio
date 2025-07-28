import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  href, 
  onClick, 
  className = '', 
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out';
  
  const variants = {
    primary: 'bg-primary text-background-darker hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow',
    secondary: 'bg-transparent border border-ui-border text-text-primary hover:bg-ui-hover hover:border-ui-hover',
    link: 'bg-transparent text-primary hover:text-primary-dark underline-offset-4 hover:underline',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-small',
    medium: 'px-6 py-3 text-base rounded-medium',
    large: 'px-8 py-4 text-lg rounded-large',
  };
  
  const iconMargin = iconPosition === 'left' ? 'ml-2' : 'mr-2';
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={iconMargin}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconMargin}>{icon}</span>}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;