import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor with a small dot and a trailing ring.
 * The ring expands and the dot hides when hovering interactive
 * elements (links, buttons, images with [data-cursor="hover"]).
 * Hidden on touch devices via CSS pointer media query.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;

      // update CSS vars for the page-wide cursor glow
      document.documentElement.style.setProperty('--cursor-x', `${mx}px`);
      document.documentElement.style.setProperty('--cursor-y', `${my}px`);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [data-cursor="hover"], input, textarea, [role="button"]'
      );
      ring.dataset.hover = interactive ? 'true' : 'false';
    };

    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-copper-200 mix-blend-difference"
        style={{ transition: 'opacity 0.2s' }}
      />
      <div
        ref={ringRef}
        data-hover="false"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-copper-300/70 transition-[width,height,opacity,background-color] duration-300 ease-out data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:border-copper-300/40 data-[hover=true]:bg-copper-300/5"
      />
    </>
  );
}
