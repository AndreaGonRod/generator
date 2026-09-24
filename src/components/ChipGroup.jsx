import { useState, useEffect } from 'react';
import './ChipGroup.css';

export function ChipGroup({ label, options, value, onChange, multiple, mandatory = [] }) {
  const [expandedGroup, setExpandedGroup] = useState(() => {
    if (options[0]?.options) {
      const activeIdx = options.findIndex(g => g.options.some(o => (multiple ? value.includes(o.value) : value === o.value)));
      return activeIdx !== -1 ? activeIdx : null;
    }
    return null;
  });

  // Automatically expand group if value changes externally
  useEffect(() => {
    if (options[0]?.options) {
      const activeIdx = options.findIndex(g => g.options.some(o => (multiple ? value.includes(o.value) : value === o.value)));
      if (activeIdx !== -1) {
        setExpandedGroup(activeIdx);
      }
    }
  }, [value, options, multiple]); // Removed expandedGroup from deps to not force it open

  const handleToggle = (optValue) => {
    if (multiple) {
      if (value.includes(optValue)) {
        if (mandatory.includes(optValue)) return; // Prevent toggling off mandatory items
        if (value.length > 1) { // Prevent deselecting the last option
          onChange(value.filter(v => v !== optValue));
        }
      } else {
        onChange([...value, optValue]);
      }
    } else {
      onChange(optValue);
    }
  };

  return (
    <div className="chip-group-wrapper">
      {label && <label className="chip-group-label">{label}</label>}
      {options[0]?.options ? (
        <div className="chip-group-sections">
          {options.map((group, gIdx) => {
            const isExpanded = expandedGroup === gIdx;
            return (
              <div key={gIdx} className={`chip-group-section ${isExpanded ? 'expanded' : ''}`}>
                <div 
                  className="chip-group-section-label" 
                  onClick={() => setExpandedGroup(isExpanded ? null : gIdx)}
                  style={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '4px 0'
                  }}
                >
                  <span>{group.label}</span>
                  <span style={{ fontSize: '0.6rem', opacity: 0.6, transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                    ▼
                  </span>
                </div>
                {isExpanded && (
                  <div className="chip-group" style={{ marginTop: '8px' }}>
                    {group.options.map((option) => {
                      const isActive = multiple ? value.includes(option.value) : value === option.value;
                      const isMandatory = multiple && mandatory.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          className={`chip-button ${isActive ? 'active' : ''} ${isMandatory ? 'mandatory' : ''}`}
                          onClick={() => handleToggle(option.value)}
                          style={isMandatory ? { cursor: 'default' } : {}}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="chip-group">
          {options.map((option) => {
            const isActive = multiple ? value.includes(option.value) : value === option.value;
            const isMandatory = multiple && mandatory.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                className={`chip-button ${isActive ? 'active' : ''} ${isMandatory ? 'mandatory' : ''}`}
                onClick={() => handleToggle(option.value)}
                style={isMandatory ? { cursor: 'default' } : {}}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
