import { useMemo, useState, useEffect } from 'react';
import './App.css';
import { generateLocalNames, getLocalComponents } from './nameGenerator';
import { CustomSelect } from './components/CustomSelect';
import { ChipGroup } from './components/ChipGroup';

const styleOptions = [
  { value: 'GREEK', label: 'Griego Antiguo' },
  { value: 'NORDIC', label: 'Nórdico Antiguo' },
  { value: 'LATIN', label: 'Latín' },
  { value: 'JAPANESE', label: 'Japonés' },
  { value: 'ELVISH', label: 'Élfico' },
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
  { value: 'ROOT', label: 'Raíz/Prefijo' },
  { value: 'CONNECTOR1', label: 'Conector 1' },
  { value: 'INFIX', label: 'Infijo' },
  { value: 'CONNECTOR2', label: 'Conector 2' },
  { value: 'SUFFIX', label: 'Sufijo' }
];

function App() {
  const [style, setStyle] = useState('GREEK');
  const [gender, setGender] = useState('MALE');
  const [formulaMode, setFormulaMode] = useState('AUTO');
  const [formula, setFormula] = useState(['ROOT', 'SUFFIX']);
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

  const handleStyleChange = (selectedStyle) => {
    setStyle(selectedStyle);
    const isCustomStyle = selectedStyle === 'CUSTOM';
    setFormulaMode(isCustomStyle ? 'CUSTOM' : 'AUTO');
    setFormula(['ROOT', 'SUFFIX']);
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
  };

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
        <ChipGroup 
          label="Origen" 
          value={style} 
          options={styleOptions} 
          onChange={handleStyleChange} 
        />

        <div className="controls-grid">
          
          {style !== 'CUSTOM' && (
            <>
              <ChipGroup 
                label="Género" 
                value={gender} 
                options={genderOptions} 
                onChange={(val) => {
                  setGender(val);
                  setSuffix('');
                }} 
              />
              <ChipGroup 
                label="Fórmula" 
                value={formulaMode} 
                options={formulaModeOptions} 
                onChange={(val) => {
                  setFormulaMode(val);
                  if (val === 'AUTO') {
                    setConnector1('');
                    setInfix('');
                    setConnector2('');
                    setRoot('');
                    setSuffix('');
                  }
                }} 
              />
            </>
          )}

          {(formulaMode === 'CUSTOM' || style === 'CUSTOM') && (
            <ChipGroup 
              label="Estructura" 
              value={formula} 
              options={formulaShapeOptions} 
              multiple={true}
              mandatory={['ROOT', 'SUFFIX']}
              onChange={(val) => {
                setFormula(val);
                if (!val.includes('CONNECTOR1')) {
                  setCustomConnectors1([]);
                  setTempConnector1('');
                }
                if (!val.includes('INFIX')) {
                  setCustomInfixes([]);
                  setTempInfix('');
                }
                if (!val.includes('CONNECTOR2')) {
                  setCustomConnectors2([]);
                  setTempConnector2('');
                }
              }} 
            />
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

              {formula.includes('CONNECTOR1') && (
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

              {formula.includes('INFIX') && (
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

              {formula.includes('CONNECTOR2') && (
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
              <CustomSelect value={root} onChange={(e) => setRoot(e.target.value)} options={[
                { value: '', label: 'Aleatorio' },
                ...availableConnectors.roots.map((item) => ({ value: item.text, label: item.text }))
              ]} />
            </div>

            {formula.includes('CONNECTOR1') && (
              <div className="control-group">
                <label>Conector 1</label>
                <CustomSelect value={connector1} onChange={(e) => setConnector1(e.target.value)} options={[
                  { value: '', label: 'Aleatorio' },
                  ...availableConnectors.simpleConnectors.map((item) => ({ value: item.text, label: item.text }))
                ]} />
              </div>
            )}

            {formula.includes('INFIX') && (
              <div className="control-group">
                <label>Infijo</label>
                <CustomSelect value={infix} onChange={(e) => setInfix(e.target.value)} options={[
                  { value: '', label: 'Aleatorio' },
                  ...availableConnectors.complexInfixes.map((item) => ({ value: item.text, label: item.text }))
                ]} />
              </div>
            )}

            {formula.includes('CONNECTOR2') && (
              <div className="control-group">
                <label>Conector 2</label>
                <CustomSelect value={connector2} onChange={(e) => setConnector2(e.target.value)} options={[
                  { value: '', label: 'Aleatorio' },
                  ...availableConnectors.simpleConnectors.map((item) => ({ value: item.text, label: item.text }))
                ]} />
              </div>
            )}

            <div className="control-group">
              <label>Sufijo</label>
              <CustomSelect value={suffix} onChange={(e) => setSuffix(e.target.value)} options={[
                { value: '', label: 'Aleatorio' },
                ...availableConnectors.suffixes
                  .filter((item) => {
                    const suffixGender = item.gender?.name ?? item.gender;
                    return gender === 'RANDOM' || suffixGender === gender;
                  })
                  .map((item) => ({ value: item.text, label: item.text }))
              ]} />
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
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="skeleton-card" />
              ))
            : names.map((item, index) => (
                <div 
                  key={item.id} 
                  className="card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
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
