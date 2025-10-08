import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
}

const TypeWriter = ({ text, delay = 100 }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      }, delay / 2);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
    }
  }, [currentIndex, isDeleting, text, delay]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
