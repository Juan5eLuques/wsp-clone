import { useState, useEffect } from 'react';
import { LockIcon } from '../icons/index';
import './Loader.css';

export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 400);
          return 100;
        }
        
        const increment = Math.random() * 12 + 3;
        return Math.min(prev + increment, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-page">
      <div className="loader-content">
        <img
          className="loader-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        <span className="loader-title">WhatsApp</span>
        <div className="loader-bar-container">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loader-encrypted">
          <LockIcon />
          <span>Cifrado de extremo a extremo</span>
        </div>
      </div>
    </div>
  );
};
