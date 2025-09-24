import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: Array<{ text: string; color: string }>;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <span className={`relative inline-block ${className}`}>
      {texts.map((item, index) => (
        <span
          key={index}
          className={`absolute inset-0 transition-all duration-500 ${
            index === currentIndex
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{ color: item.color }}
        >
          {item.text}
        </span>
      ))}
      <span className="opacity-0">{texts[0].text}</span>
    </span>
  );
};

export default AnimatedText;