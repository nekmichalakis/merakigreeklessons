import { LogoSvg } from '@/assets/logoSvg.tsx';
import { cn } from '@/lib/utils.ts';
import { useEffect, useRef, useState } from 'react';

const Logo = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector('#hero');

    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <a
      href="/"
      className="fixed hidden md:block top-4 left-6 z-50"
      aria-label="Home"
    >
      <LogoSvg
        className={cn('h-32', {
          'text-chart-4': isHeroVisible,
          'text-chart-3': !isHeroVisible,
        })}
      />
    </a>
  );
};

export default Logo;
