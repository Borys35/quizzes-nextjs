import { useState, useEffect, useRef } from 'react';

export default function useInView() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) setInView(true);
    else setInView(false);
  });

  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref);
  }, [ref]);

  return [ref, inView];
}
