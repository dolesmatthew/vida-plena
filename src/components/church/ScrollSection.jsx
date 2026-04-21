import React, { useEffect, useState } from 'react';

export default function ScrollPath() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setHeight(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-0 bottom-0 z-30 pointer-events-none hidden lg:block" style={{ transform: 'translateX(-50%)' }}>
      <div className="w-px h-full bg-border/30 relative">
        <div
          className="w-px bg-terracotta/40 absolute top-0 left-0 transition-all duration-100"
          style={{ height: `${height}%` }}
        />
      </div>
    </div>
  );
}