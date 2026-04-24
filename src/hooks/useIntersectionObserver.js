import { useState, useEffect, useRef } from 'react';

/**
 * Hook para detetar quando um elemento entra no viewport.
 * @param {Object} options - Opções do IntersectionObserver.
 * @returns {[RefObject, boolean]} - Ref para o elemento e estado de visibilidade.
 */
export const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Uma vez visível, paramos de observar se quisermos animação única
        if (elementRef.current) observer.unobserve(elementRef.current);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
