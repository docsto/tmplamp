import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

type CursorMode = 'default' | 'hover' | 'input' | 'pointer';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    const target = e.target as HTMLElement;
    if (!target) return;

    // Check if hovering over a nav menu item
    if (target.closest('[data-cursor-hover]')) {
      setMode('hover');
      return;
    }

    // Check if hovering over an input/textarea
    if (
      target.closest('input') ||
      target.closest('textarea') ||
      target.closest('select') ||
      target.closest('[contenteditable="true"]')
    ) {
      setMode('input');
      return;
    }

    // Check if hovering over clickable elements (buttons, links, etc.)
    if (
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]') ||
      target.closest('[onclick]') ||
      target.closest('label[for]') ||
      target.closest('summary') ||
      (window.getComputedStyle(target).cursor === 'pointer')
    ) {
      setMode('pointer');
      return;
    }

    setMode('default');
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // Cursor sizes per mode
  const getSize = () => {
    switch (mode) {
      case 'hover': return 40;
      case 'pointer': return 0; // hidden, use native pointer
      case 'input': return 0;   // hidden, use native text cursor
      default: return 10;
    }
  };

  const size = getSize();
  const hidden = mode === 'pointer' || mode === 'input';

  return (
    <>
      {/* Global cursor style overrides */}
      <style>{`
        * { cursor: none !important; }
        input, textarea, select, [contenteditable="true"] { cursor: text !important; }
        button, a, [role="button"], label[for], summary { cursor: pointer !important; }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
          width: size,
          height: size,
          opacity: isVisible && !hidden ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
          opacity: { duration: 0.15 },
        }}
        style={{
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />
    </>
  );
};

export default CustomCursor;
