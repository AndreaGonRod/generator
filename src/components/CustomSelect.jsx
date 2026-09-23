import { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

export function CustomSelect({ value, onChange, options, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    onChange({ target: { value: val } });
    setIsOpen(false);
  };

  return (
    <div 
      className={`custom-select ${disabled ? 'disabled' : ''} ${isOpen ? 'open' : ''}`} 
      ref={containerRef}
    >
      <div 
        className="custom-select-button" 
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || value}</span>
        <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {isOpen && (
        <div className="custom-select-menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-option ${opt.value === value ? 'selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
