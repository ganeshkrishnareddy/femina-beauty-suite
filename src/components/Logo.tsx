import { Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const isLight = variant === 'light';
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Link to="/" onClick={handleClick} className="flex items-center gap-3 group">
      {/* Icon mark */}
      <div className="relative w-11 h-11 md:w-12 md:h-12 flex items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary to-gold opacity-90 group-hover:opacity-100 transition-opacity shadow-md" />
        {/* Inner circle */}
        <div className="absolute inset-1 rounded-full bg-background/95" />
        {/* Center icon */}
        <Sparkles className="relative w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-gold transition-colors" />
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors ${
          isLight 
            ? 'text-background group-hover:text-gold' 
            : 'text-foreground group-hover:text-primary'
        }`}>
          Femina
        </span>
        <span className={`text-[10px] md:text-xs font-body uppercase tracking-[0.15em] mt-1 font-medium ${
          isLight 
            ? 'text-background/80' 
            : 'text-primary'
        }`}>
          Beauty & Academy
        </span>
      </div>
    </Link>
  );
};

export default Logo;
