import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function StatsCounter({ endValue, suffix = '', label, description, duration = 2, className = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = endValue / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, endValue, duration]);

  return (
    <div ref={ref} className={`${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-black-600 mb-2">
        {count.toLocaleString('pt-PT')}{suffix}
      </div>
      <div className="text-lg font-semibold text-green-400 mb-1">{label}</div>
      <div className="text-black-600 text-sm">{description}</div>
    </div>
  );
}