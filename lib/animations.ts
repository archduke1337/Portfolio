'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Stagger animations for floating elements
    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export const animateTitle = (element: HTMLElement | null) => {
  if (!element) return;

  const text = element.textContent || '';
  element.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    element.appendChild(span);

    gsap.fromTo(
      span,
      {
        opacity: 0,
        y: 20,
        rotateZ: Math.random() * 10 - 5,
      },
      {
        opacity: 1,
        y: 0,
        rotateZ: 0,
        duration: 0.6,
        delay: index * 0.02,
        ease: 'back.out',
      }
    );
  });
};

export const createGlowEffect = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: '0 0 40px rgba(0, 238, 255, 0.6)',
      duration: 0.3,
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: '0 0 20px rgba(0, 238, 255, 0.3)',
      duration: 0.3,
    });
  });
};
