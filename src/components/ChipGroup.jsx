import './ChipGroup.css';

export function ChipGroup({ label, options, value, onChange, multiple, mandatory = [] }) {
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
    </div>
  );
}
