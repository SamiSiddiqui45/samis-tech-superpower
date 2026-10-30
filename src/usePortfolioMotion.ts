import { useEffect, useRef } from 'react';

/** One-shot entrances leave content visible if animation or observation is unavailable. */
export function usePortfolioMotion(reduced: boolean | null, filter: string) {
  const revealed = useRef(new WeakSet<Element>());
  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        revealed.current.add(element);
        const stagger = element.matches('.skill-card, .project-card')
          ? Array.from(element.parentElement?.children ?? []).indexOf(element) % 3 * 70
          : 0;
        animations.push(element.animate(
          [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 620, delay: stagger, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' },
        ));
        observer.unobserve(element);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .about > div, .skill-card, .project-card, .command-grid > div, .timeline article, .learning-card, .contact-section > h2, .contact-bottom')
      .forEach(element => { if (!revealed.current.has(element)) observer.observe(element); });
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [reduced, filter]);
}
