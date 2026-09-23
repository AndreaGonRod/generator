import { useMemo, useState, useEffect } from 'react';
import './App.css';
import { generateLocalNames, getLocalComponents } from './nameGenerator';

const styleOptions = [
  { value: 'GREEK', label: 'Griego' },
  { value: 'NORDIC', label: 'Nórdico' },
  { value: 'CUSTOM', label: 'Personalizado' },
  { value: 'RANDOM', label: 'Aleatorio' }
];

const genderOptions = [
  { value: 'MALE', label: 'Masculino' },
  { value: 'FEMALE', label: 'Femenino' },
  { value: 'NEUTER', label: 'Neutro' },
  { value: 'RANDOM', label: 'Aleatorio' }
];

const formulaModeOptions = [
  { value: 'AUTO', label: 'Automático' },
  { value: 'CUSTOM', label: 'Manual' }
];

const formulaShapeOptions = [
  { value: 'F1', label: 'Prefijo + Sufijo' },
  { value: 'F2', label: 'Prefijo + Conector + Sufijo' },
  { value: 'F3', label: 'Prefijo + Infijo + Sufijo' },
  { value: 'F4', label: 'Prefijo + Conector + Infijo + Sufijo' },
  { value: 'F5', label: 'Prefijo + Infijo + Conector + Sufijo' },
  { value: 'F6', label: 'Prefijo + Conector + Infijo + Conector + Sufijo' }
];

function App() {
  const [style, setStyle] = useState('GREEK');
  const [gender, setGender] = useState('MALE');
  const [formulaMode, setFormulaMode] = useState('AUTO');
  const [formula, setFormula] = useState('F1');
  const [connector1, setConnector1] = useState('');
  const [infix, setInfix] = useState('');
  const [connector2, setConnector2] = useState('');
  const [root, setRoot] = useState('');
  const [suffix, setSuffix] = useState('');
  
  const [customRoots, setCustomRoots] = useState([]);
  const [customConnectors1, setCustomConnectors1] = useState([]);
  const [customInfixes, setCustomInfixes] = useState([]);
  const [customConnectors2, setCustomConnectors2] = useState([]);
  const [customSuffixes, setCustomSuffixes] = useState([]);
  
  const [tempRoot, setTempRoot] = useState('');
  const [tempConnector1, setTempConnector1] = useState('');
  const [tempInfix, setTempInfix] = useState('');
  const [tempConnector2, setTempConnector2] = useState('');
  const [tempSuffix, setTempSuffix] = useState('');
  
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const availableConnectors = useMemo(() => {
    if (style === 'CUSTOM') {
      return { roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] };
    }
    const styleQuery = style === 'RANDOM' ? 'RANDOM' : style;
    return getLocalComponents(styleQuery);
  }, [style]);

  const buildGenerationParams = () => {
    const params = {
      style,
      gender,
      formulaMode,
      formula,
      count: style === 'CUSTOM' ? undefined : 6
    };

    if (style === 'CUSTOM') {
      if (customRoots.length > 0) params.root = customRoots;
      if (customConnectors1.length > 0) params.connector1 = customConnectors1;
      if (customInfixes.length > 0) params.infix = customInfixes;
      if (customConnectors2.length > 0) params.connector2 = customConnectors2;
      if (customSuffixes.length > 0) params.suffix = customSuffixes;
    } else {
      if (root) params.root = root;
      if (suffix) params.suffix = suffix;
      if (connector1) params.connector1 = connector1;
      if (infix) params.infix = infix;
      if (connector2) params.connector2 = connector2;
    }

    return params;
  };

  const fetchNames = () => {
    setLoading(true);
    setStatus('');
    try {
      const params = buildGenerationParams();
      const results = generateLocalNames(params);
      setNames(results);
      if (results.length === 0) {
        setStatus('No se encontraron resultados.');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
      setNames([]);
    } finally {
      setLoading(false);
    }
  };

  // Generate initial names on load
  useEffect(() => {
    fetchNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="page-shell">
      <header className="header">
        <h1>Nomen</h1>
        <p>Descubre nombres con significado.</p>
      </header>

      <section className="form-section">
        <div className="controls-grid">
          <div className="control-group">
            <label>Origen</label>
            <select value={style} onChange={(e) => {
              const selectedStyle = e.target.value;
              setStyle(selectedStyle);
              const isCustomStyle = selectedStyle === 'CUSTOM';
              setFormulaMode(isCustomStyle ? 'CUSTOM' : 'AUTO');
              setFormula('F1');
              setConnector1('');
              setInfix('');
              setConnector2('');
              setRoot('');
              setSuffix('');
              setCustomRoots([]);
              setCustomConnectors1([]);
              setCustomInfixes([]);
              setCustomConnectors2([]);
              setCustomSuffixes([]);
              setTempRoot('');
              setTempConnector1('');
              setTempInfix('');
              setTempConnector2('');
              setTempSuffix('');
            }}>
              {styleOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          {style !== 'CUSTOM' && (
            <>
              <div className="control-group">
                <label>Género</label>
                <select value={gender} onChange={(e) => {
                  setGender(e.target.value);
                  setSuffix('');
                }}>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="control-group">
                <label>Fórmula</label>
                <select value={formulaMode} onChange={(e) => {
                  setFormulaMode(e.target.value);
                  if (e.target.value === 'AUTO') {
                    setConnector1('');
                    setInfix('');
                    setConnector2('');
                    setRoot('');
                    setSuffix('');
                  }
                }}>
                  {formulaModeOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {(formulaMode === 'CUSTOM' || style === 'CUSTOM') && (
            <div className="control-group">
              <label>Estructura</label>
              <select value={formula} onChange={(e) => {
                setFormula(e.target.value);
                setConnector1('');
                setInfix('');
                setConnector2('');
                if (!['F2', 'F4', 'F5', 'F6'].includes(e.target.value)) {
                  setCustomConnectors1([]);
                  setTempConnector1('');
                }
                if (!['F3', 'F4', 'F5', 'F6'].includes(e.target.value)) {
                  setCustomInfixes([]);
                  setTempInfix('');
                }
                if (e.target.value !== 'F6') {
                  setCustomConnectors2([]);
                  setTempConnector2('');
                }
              }}>
                {formulaShapeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {style === 'CUSTOM' && (
          <div className="custom-components">
            <div className="custom-input-list">
              <div className="custom-input-item">
                <label>Raíces</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Añadir..."
                    value={tempRoot}
                    onChange={(e) => setTempRoot(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && tempRoot.trim()) {
                        setCustomRoots([...customRoots, tempRoot.trim()]);
                        setTempRoot('');
                      }
                    }}
                  />
                  <button type="button" onClick={() => {
                    if (tempRoot.trim()) {
                      setCustomRoots([...customRoots, tempRoot.trim()]);
                      setTempRoot('');
                    }
                  }}>+</button>
                </div>
                <div className="chips">
                  {customRoots.map((item, idx) => (
                    <span key={idx} className="chip" onClick={() => setCustomRoots(customRoots.filter((_, i) => i !== idx))}>{item}</span>
                  ))}
                </div>
              </div>

              {['F2', 'F4', 'F5', 'F6'].includes(formula) && (
                <div className="custom-input-item">
                  <label>Conector 1</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Añadir..."
                      value={tempConnector1}
                      onChange={(e) => setTempConnector1(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && tempConnector1.trim()) {
                          setCustomConnectors1([...customConnectors1, tempConnector1.trim()]);
                          setTempConnector1('');
                        }
                      }}
                    />
                    <button type="button" onClick={() => {
                      if (tempConnector1.trim()) {
                        setCustomConnectors1([...customConnectors1, tempConnector1.trim()]);
                        setTempConnector1('');
                      }
                    }}>+</button>
                  </div>
                  <div className="chips">
                    {customConnectors1.map((item, idx) => (
                      <span key={idx} className="chip" onClick={() => setCustomConnectors1(customConnectors1.filter((_, i) => i !== idx))}>{item}</span>
                    ))}
                  </div>
                </div>
              )}

              {['F3', 'F4', 'F5', 'F6'].includes(formula) && (
                <div className="custom-input-item">
                  <label>Infijo</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Añadir..."
                      value={tempInfix}
                      onChange={(e) => setTempInfix(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && tempInfix.trim()) {
                          setCustomInfixes([...customInfixes, tempInfix.trim()]);
                          setTempInfix('');
                        }
                      }}
                    />
                    <button type="button" onClick={() => {
                      if (tempInfix.trim()) {
                        setCustomInfixes([...customInfixes, tempInfix.trim()]);
                        setTempInfix('');
                      }
                    }}>+</button>
                  </div>
                  <div className="chips">
                    {customInfixes.map((item, idx) => (
                      <span key={idx} className="chip" onClick={() => setCustomInfixes(customInfixes.filter((_, i) => i !== idx))}>{item}</span>
                    ))}
                  </div>
                </div>
              )}

              {formula === 'F6' && (
                <div className="custom-input-item">
                  <label>Conector 2</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Añadir..."
                      value={tempConnector2}
                      onChange={(e) => setTempConnector2(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && tempConnector2.trim()) {
                          setCustomConnectors2([...customConnectors2, tempConnector2.trim()]);
                          setTempConnector2('');
                        }
                      }}
                    />
                    <button type="button" onClick={() => {
                      if (tempConnector2.trim()) {
                        setCustomConnectors2([...customConnectors2, tempConnector2.trim()]);
                        setTempConnector2('');
                      }
                    }}>+</button>
                  </div>
                  <div className="chips">
                    {customConnectors2.map((item, idx) => (
                      <span key={idx} className="chip" onClick={() => setCustomConnectors2(customConnectors2.filter((_, i) => i !== idx))}>{item}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="custom-input-item">
                <label>Sufijos</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Añadir..."
                    value={tempSuffix}
                    onChange={(e) => setTempSuffix(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && tempSuffix.trim()) {
                        setCustomSuffixes([...customSuffixes, tempSuffix.trim()]);
                        setTempSuffix('');
                      }
                    }}
                  />
                  <button type="button" onClick={() => {
                    if (tempSuffix.trim()) {
                      setCustomSuffixes([...customSuffixes, tempSuffix.trim()]);
                      setTempSuffix('');
                    }
                  }}>+</button>
                </div>
                <div className="chips">
                  {customSuffixes.map((item, idx) => (
                    <span key={idx} className="chip" onClick={() => setCustomSuffixes(customSuffixes.filter((_, i) => i !== idx))}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {style !== 'CUSTOM' && formulaMode === 'CUSTOM' && (
          <div className="controls-grid custom-selections">
            <div className="control-group">
              <label>Raíz</label>
              <select value={root} onChange={(e) => setRoot(e.target.value)}>
                <option value="">Aleatorio</option>
                {availableConnectors.roots.map((item, index) => (
                  <option key={`root-${index}`} value={item.text}>{item.text}</option>
                ))}
              </select>
            </div>

            {['F2', 'F4', 'F5', 'F6'].includes(formula) && (
              <div className="control-group">
                <label>Conector 1</label>
                <select value={connector1} onChange={(e) => setConnector1(e.target.value)}>
                  <option value="">Aleatorio</option>
                  {availableConnectors.simpleConnectors.map((item, index) => (
                    <option key={`connector1-${index}`} value={item.text}>{item.text}</option>
                  ))}
                </select>
              </div>
            )}

            {['F3', 'F4', 'F5', 'F6'].includes(formula) && (
              <div className="control-group">
                <label>Infijo</label>
                <select value={infix} onChange={(e) => setInfix(e.target.value)}>
                  <option value="">Aleatorio</option>
                  {availableConnectors.complexInfixes.map((item, index) => (
                    <option key={`infix-${index}`} value={item.text}>{item.text}</option>
                  ))}
                </select>
              </div>
            )}

            {formula === 'F6' && (
              <div className="control-group">
                <label>Conector 2</label>
                <select value={connector2} onChange={(e) => setConnector2(e.target.value)}>
                  <option value="">Aleatorio</option>
                  {availableConnectors.simpleConnectors.map((item, index) => (
                    <option key={`connector2-${index}`} value={item.text}>{item.text}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="control-group">
              <label>Sufijo</label>
              <select value={suffix} onChange={(e) => setSuffix(e.target.value)}>
                <option value="">Aleatorio</option>
                {availableConnectors.suffixes
                  .filter((item) => {
                    const suffixGender = item.gender?.name ?? item.gender;
                    return gender === 'RANDOM' || suffixGender === gender;
                  })
                  .map((item, index) => (
                    <option key={`suffix-${index}`} value={item.text}>{item.text}</option>
                  ))}
              </select>
            </div>
          </div>
        )}

        <div className="action-row">
          <button type="button" className="btn-primary" onClick={fetchNames} disabled={loading}>
            Descubrir
          </button>
        </div>
      </section>

      <section className="results">
        {status && <p className="status-message">{status}</p>}
        <div className="cards">
          {names.map((item) => (
            <div key={item.id} className="card">
              <h2>{item.name}</h2>
              {item.ipa && <span className="ipa">/{item.ipa}/</span>}
              {item.meaning && <p>{item.meaning}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
