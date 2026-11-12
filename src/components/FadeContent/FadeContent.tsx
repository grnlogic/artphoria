'use client';

import {
  useRef,
  useSyncExternalStore,
  useEffect,
  useLayoutEffect,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FadeContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  container?: Element | string | null;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  trigger?: 'scroll' | 'mount';
  once?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
  className?: string;
  style?: CSSProperties;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const toSeconds = (value: number) => (typeof value === 'number' && value > 10 ? value / 1000 : value);

// Hook using useSyncExternalStore for prefers-reduced-motion
const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const getReducedMotionServerSnapshot = () => false;

export const FadeContent = ({
  children,
  container,
  duration = 0.8,
  ease = 'power2.out',
  delay = 0,
  initialOpacity = 0,
  trigger = 'scroll',
  once = true,
  onStart,
  onComplete,
  className,
  style,
  ...props
}: FadeContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const callbacksRef = useRef({ onStart, onComplete });
  useEffect(() => {
    callbacksRef.current = { onStart, onComplete };
  }, [onStart, onComplete]);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const ctx = gsap.context(() => {
      const scroller =
        container instanceof Element ? container : typeof container === 'string' ? document.querySelector(container) : null;

      const targets = el.children.length > 0 ? Array.from(el.children) : [el];
      const seconds = Math.max(toSeconds(duration) || 0, 0.01);

      gsap.set(el, { visibility: 'visible' });
      gsap.set(targets, { opacity: initialOpacity });

      const tl = gsap.timeline({
        paused: true,
        onStart: () => callbacksRef.current.onStart?.(),
        onComplete: () => {
          callbacksRef.current.onComplete?.();
          gsap.set(targets, { clearProps: 'opacity,transform' });
        },
      });

      tl.to(
        targets,
        {
          opacity: 1,
          duration: seconds,
          ease,
        },
        toSeconds(delay)
      );

      if (trigger === 'mount') {
        tl.play();
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        scroller: scroller || undefined,
        start: 'top 85%',
        once,
        onEnter: () => tl.play(),
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    reducedMotion,
    container,
    duration,
    ease,
    delay,
    initialOpacity,
    trigger,
    once,
  ]);

  // If reduced motion is requested, render immediately without animations
  if (reducedMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={['invisible', className].filter(Boolean).join(' ')} style={style} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
