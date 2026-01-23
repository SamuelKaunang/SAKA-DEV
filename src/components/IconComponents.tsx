import React from 'react';
import { 
  Code, 
  Palette, 
  Zap, 
  Star, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink 
} from 'lucide-react';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'danger';
  onClick?: () => void;
}

/**
 * IconButton Component
 * A Neo-Brutalism styled button with Lucide icons
 */
export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  label, 
  variant = 'default',
  onClick 
}) => {
  const variantClasses = {
    default: 'bg-brutal-yellow text-brutal-black',
    primary: 'bg-brutal-blue text-white',
    success: 'bg-brutal-green text-brutal-black',
    danger: 'bg-brutal-red text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-6 py-3
        font-display text-sm uppercase tracking-wider
        brutal-border hard-shadow-sm
        transition-all duration-150
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[2px] active:translate-y-[2px]
        active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        ${variantClasses[variant]}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

/**
 * SocialLinks Component
 * Social media links with Lucide icons
 */
export const SocialLinks: React.FC = () => {
  const links = [
    { icon: <Github size={24} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: '#', label: 'Email' },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="
            w-12 h-12 flex items-center justify-center
            bg-white brutal-border hard-shadow-sm
            transition-all duration-150
            hover:bg-brutal-yellow
            hover:translate-x-[-2px] hover:translate-y-[-2px]
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          "
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

/**
 * FeatureCard Component
 * Feature card with icon for showcasing skills/services
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  tag?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = 'var(--color-brutal-pink)',
  tag,
}) => {
  return (
    <div className="brutal-card p-6 bg-white">
      <div 
        className="w-16 h-16 brutal-border flex items-center justify-center mb-4 hard-shadow-sm"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <h3 className="font-display text-xl uppercase mb-2">{title}</h3>
      <p className="font-body text-base">{description}</p>
      {tag && (
        <div className="mt-4">
          <span className="brutal-tag">{tag}</span>
        </div>
      )}
    </div>
  );
};

/**
 * Export all icons for easy access
 */
export const Icons = {
  Code,
  Palette,
  Zap,
  Star,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
};

export default {
  IconButton,
  SocialLinks,
  FeatureCard,
  Icons,
};
