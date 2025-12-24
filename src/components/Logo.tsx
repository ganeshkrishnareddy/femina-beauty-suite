import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center">
        {/* Icon mark */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/60 group-hover:border-primary transition-colors" />
          {/* Inner decorative element */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/20 to-gold/20" />
          {/* Center letter */}
          <span className="relative font-display text-xl md:text-2xl font-bold text-primary group-hover:text-gold transition-colors">
            F
          </span>
          {/* Decorative dots */}
          <div className="absolute -top-0.5 right-0 w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="absolute -bottom-0.5 left-0 w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
        
        {/* Text */}
        <div className="ml-2 md:ml-3 flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-wide">
            Femina
          </span>
          <span className="text-[8px] md:text-[10px] font-body text-muted-foreground uppercase tracking-[0.2em] mt-0.5">
            Beauty & Academy
          </span>
        </div>
        
        {/* Underline accent */}
        <span className="absolute -bottom-1 left-12 md:left-14 right-0 h-0.5 bg-gradient-to-r from-primary to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </div>
    </Link>
  );
};

export default Logo;
