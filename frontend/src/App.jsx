import { useEffect, useMemo, useState } from 'react';
import './App.css';

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
  { value: 'AUTO', label: 'Aleatorio' },
  { value: 'CUSTOM', label: 'Personalizado' }
];

const formulaShapeOptions = [
  { value: 'F1', label: 'Prefijo + Sufijo' },
  { value: 'F2', label: 'Prefijo + Conector + Sufijo' },
  { value: 'F3', label: 'Prefijo + Infijo + Sufijo' },
  { value: 'F4', label: 'Prefijo + Conector + Infijo + Sufijo' },
  { value: 'F5', label: 'Prefijo + Infijo + Conector + Sufijo' },
  { value: 'F6', label: 'Prefijo + Conector + Infijo + Conector + Sufijo' }
];

function buildQuery(params) {
  const query = new URLSearchParams();
  query.set('count', '4');
  if (params.style) query.set('style', params.style);
  if (params.gender) query.set('gender', params.gender);
  if (params.formulaMode) query.set('formulaMode', params.formulaMode);
  if (params.formula) query.set('formula', params.formula);
  if (params.root) {
    query.set('root', params.root);
  }
  if (params.suffix) {
    query.set('suffix', params.suffix);
  }
  if (params.connector1) {
    query.set('connector1', params.connector1);
  }
  if (params.infix) {
    query.set('infix', params.infix);
  }
  if (params.connector2) {
    query.set('connector2', params.connector2);
  }
  return query.toString();
}

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
  
  // Custom personalized mode: lists of components
  const [customRoots, setCustomRoots] = useState([]);
  const [customConnectors1, setCustomConnectors1] = useState([]);
  const [customInfixes, setCustomInfixes] = useState([]);
  const [customConnectors2, setCustomConnectors2] = useState([]);
  const [customSuffixes, setCustomSuffixes] = useState([]);
  
  // Temporary input fields for custom mode
  const [tempRoot, setTempRoot] = useState('');
  const [tempConnector1, setTempConnector1] = useState('');
  const [tempInfix, setTempInfix] = useState('');
  const [tempConnector2, setTempConnector2] = useState('');
  const [tempSuffix, setTempSuffix] = useState('');
  
  const [availableConnectors, setAvailableConnectors] = useState({ roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
  const [names, setNames] = useState([]);
  const [components, setComponents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const selectedStyleLabel = useMemo(
    () => styleOptions.find((option) => option.value === style)?.label ?? 'Griego',
    [style]
  );

  // Helper to pick random item from array, or empty string if none
  const pickRandom = (arr) => {
    if (!arr || arr.length === 0) return '';
    return arr[Math.floor(Math.random() * arr.length)];
  };


  const normalizeNames = (data) => {
    if (!Array.isArray(data)) return [];
    return data.map((item, index) => ({
      id: `${item?.name ?? 'name'}-${index}`,
      name: item?.name ?? 'Nombre desconocido',
      gender: item?.gender ?? 'DESCONOCIDO',
      meaning: item?.meaning ?? '',
      formula: item?.formula ?? ''
    }));
  };

  const normalizeComponents = (data) => {
    if (!data || typeof data !== 'object') return null;
    return {
      roots: Array.isArray(data.roots) ? data.roots : [],
      simpleConnectors: Array.isArray(data.simpleConnectors) ? data.simpleConnectors : [],
      complexInfixes: Array.isArray(data.complexInfixes) ? data.complexInfixes : [],
      suffixes: Array.isArray(data.suffixes) ? data.suffixes : []
    };
  };

  useEffect(() => {
    if (style === 'CUSTOM') {
      setAvailableConnectors({ roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
      return;
    }

    const loadConnectorOptions = async () => {
      try {
        const styleQuery = style === 'RANDOM' ? 'RANDOM' : style;
        const response = await fetch(`/api/names/components?style=${styleQuery}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const normalized = normalizeComponents(data);
        setAvailableConnectors(normalized || { roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
      } catch (error) {
        setAvailableConnectors({ roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
      }
    };

    loadConnectorOptions();
  }, [style]);

  const fetchNames = async () => {
    setLoading(true);
    setStatus('');
    setComponents(null);
    try {
      // When in custom style, pick random components from the lists
      let finalRoot = root;
      let finalConnector1 = connector1;
      let finalInfix = infix;
      let finalConnector2 = connector2;
      let finalSuffix = suffix;
      
      if (style === 'CUSTOM') {
        finalRoot = pickRandom(customRoots);
        finalConnector1 = pickRandom(customConnectors1);
        finalInfix = pickRandom(customInfixes);
        finalConnector2 = pickRandom(customConnectors2);
        finalSuffix = pickRandom(customSuffixes);
      }
      
      const query = buildQuery({ 
        style, 
        gender, 
        formulaMode, 
        formula, 
        root: finalRoot, 
        suffix: finalSuffix, 
        connector1: finalConnector1, 
        infix: finalInfix, 
        connector2: finalConnector2 
      });
      const response = await fetch(`/api/names/generate?${query}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      const normalized = normalizeNames(data);
      setNames(normalized);
      if (normalized.length === 0) {
        setStatus('No se encontraron nombres para los filtros seleccionados.');
      }
    } catch (error) {
      setStatus('Error cargando nombres: ' + error.message);
      setNames([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchComponents = async () => {
    setLoading(true);
    setStatus('');
    setNames([]);
    try {
      const styleQuery = style === 'RANDOM' ? 'RANDOM' : style;
      const response = await fetch(`/api/names/components?style=${styleQuery}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      const normalized = normalizeComponents(data);
      setComponents(normalized);
      if (!normalized || Object.values(normalized).every((list) => list.length === 0)) {
        setStatus('No hay componentes disponibles para ese estilo.');
      }
    } catch (error) {
      setStatus('Error cargando componentes: ' + error.message);
      setComponents(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Generador de nombres</p>
          <h1>Generador de {selectedStyleLabel}</h1>
          <p>Selecciona estilo, género y conectores para generar nombres con libertad creativa.</p>

          <div className="controls-row">
            <label>
              Estilo
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
                // Reset custom components
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
            </label>
            {style !== 'CUSTOM' && (
              <>
                <label>
                  Género
                  <select value={gender} onChange={(e) => {
                    setGender(e.target.value);
                    setSuffix('');
                  }}>
                    {genderOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Modo de fórmula
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
                </label>
              </>
            )}
            {(formulaMode === 'CUSTOM' || style === 'CUSTOM') && (
              <label>
                Tipo de fórmula
                <select value={formula} onChange={(e) => {
                  setFormula(e.target.value);
                  setConnector1('');
                  setInfix('');
                  setConnector2('');
                  // Reset custom components that are no longer needed
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
              </label>
            )}
          </div>

          {style === 'CUSTOM' && (
            <>
              {(customRoots.length > 0 || customConnectors1.length > 0 || customInfixes.length > 0 || customConnectors2.length > 0 || customSuffixes.length > 0) && (
                <div className="saved-components-panel">
                  <h3>Componentes personalizados guardados</h3>
                  <div className="saved-components-row">
                    {customRoots.length > 0 && (
                      <div className="saved-component-group">
                        <span className="component-label">Raíces</span>
                        <div className="saved-chips">
                          {customRoots.map((item, idx) => (
                            <span key={`saved-root-${idx}`} className="saved-chip">
                              {item}
                              <button
                                type="button"
                                className="chip-remove"
                                onClick={() => setCustomRoots(customRoots.filter((_, i) => i !== idx))}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {customConnectors1.length > 0 && (
                      <div className="saved-component-group">
                        <span className="component-label">Conectores 1</span>
                        <div className="saved-chips">
                          {customConnectors1.map((item, idx) => (
                            <span key={`saved-conn1-${idx}`} className="saved-chip">
                              {item}
                              <button
                                type="button"
                                className="chip-remove"
                                onClick={() => setCustomConnectors1(customConnectors1.filter((_, i) => i !== idx))}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {customInfixes.length > 0 && (
                      <div className="saved-component-group">
                        <span className="component-label">Infijos</span>
                        <div className="saved-chips">
                          {customInfixes.map((item, idx) => (
                            <span key={`saved-infix-${idx}`} className="saved-chip">
                              {item}
                              <button
                                type="button"
                                className="chip-remove"
                                onClick={() => setCustomInfixes(customInfixes.filter((_, i) => i !== idx))}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {customConnectors2.length > 0 && (
                      <div className="saved-component-group">
                        <span className="component-label">Conectores 2</span>
                        <div className="saved-chips">
                          {customConnectors2.map((item, idx) => (
                            <span key={`saved-conn2-${idx}`} className="saved-chip">
                              {item}
                              <button
                                type="button"
                                className="chip-remove"
                                onClick={() => setCustomConnectors2(customConnectors2.filter((_, i) => i !== idx))}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {customSuffixes.length > 0 && (
                      <div className="saved-component-group">
                        <span className="component-label">Sufijos</span>
                        <div className="saved-chips">
                          {customSuffixes.map((item, idx) => (
                            <span key={`saved-suffix-${idx}`} className="saved-chip">
                              {item}
                              <button
                                type="button"
                                className="chip-remove"
                                onClick={() => setCustomSuffixes(customSuffixes.filter((_, i) => i !== idx))}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="custom-panel">
                <div className="custom-row">
                <div className="custom-input-group">
                  <label>
                    Raíz
                    <div className="input-with-button">
                      <input
                        type="text"
                        placeholder="Escribe una raíz"
                        value={tempRoot}
                        onChange={(e) => setTempRoot(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && tempRoot.trim()) {
                            setCustomRoots([...customRoots, tempRoot.trim()]);
                            setTempRoot('');
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="small-btn"
                        onClick={() => {
                          if (tempRoot.trim()) {
                            setCustomRoots([...customRoots, tempRoot.trim()]);
                            setTempRoot('');
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </label>
                  {customRoots.length > 0 && (
                    <div className="chips-container">
                      {customRoots.map((item, idx) => (
                        <span key={`root-chip-${idx}`} className="chip">
                          {item}
                          <button
                            type="button"
                            className="chip-remove"
                            onClick={() => setCustomRoots(customRoots.filter((_, i) => i !== idx))}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {['F2', 'F4', 'F5', 'F6'].includes(formula) && (
                  <div className="custom-input-group">
                    <label>
                      Conector 1
                      <div className="input-with-button">
                        <input
                          type="text"
                          placeholder="Escribe un conector"
                          value={tempConnector1}
                          onChange={(e) => setTempConnector1(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && tempConnector1.trim()) {
                              setCustomConnectors1([...customConnectors1, tempConnector1.trim()]);
                              setTempConnector1('');
                            }
                          }}
                        />
                        <button
                          type="button"
                          className="small-btn"
                          onClick={() => {
                            if (tempConnector1.trim()) {
                              setCustomConnectors1([...customConnectors1, tempConnector1.trim()]);
                              setTempConnector1('');
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    </label>
                    {customConnectors1.length > 0 && (
                      <div className="chips-container">
                        {customConnectors1.map((item, idx) => (
                          <span key={`conn1-chip-${idx}`} className="chip">
                            {item}
                            <button
                              type="button"
                              className="chip-remove"
                              onClick={() => setCustomConnectors1(customConnectors1.filter((_, i) => i !== idx))}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {['F3', 'F4', 'F5', 'F6'].includes(formula) && (
                  <div className="custom-input-group">
                    <label>
                      Infijo
                      <div className="input-with-button">
                        <input
                          type="text"
                          placeholder="Escribe un infijo"
                          value={tempInfix}
                          onChange={(e) => setTempInfix(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && tempInfix.trim()) {
                              setCustomInfixes([...customInfixes, tempInfix.trim()]);
                              setTempInfix('');
                            }
                          }}
                        />
                        <button
                          type="button"
                          className="small-btn"
                          onClick={() => {
                            if (tempInfix.trim()) {
                              setCustomInfixes([...customInfixes, tempInfix.trim()]);
                              setTempInfix('');
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    </label>
                    {customInfixes.length > 0 && (
                      <div className="chips-container">
                        {customInfixes.map((item, idx) => (
                          <span key={`infix-chip-${idx}`} className="chip">
                            {item}
                            <button
                              type="button"
                              className="chip-remove"
                              onClick={() => setCustomInfixes(customInfixes.filter((_, i) => i !== idx))}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {formula === 'F6' && (
                  <div className="custom-input-group">
                    <label>
                      Conector 2
                      <div className="input-with-button">
                        <input
                          type="text"
                          placeholder="Escribe un conector"
                          value={tempConnector2}
                          onChange={(e) => setTempConnector2(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && tempConnector2.trim()) {
                              setCustomConnectors2([...customConnectors2, tempConnector2.trim()]);
                              setTempConnector2('');
                            }
                          }}
                        />
                        <button
                          type="button"
                          className="small-btn"
                          onClick={() => {
                            if (tempConnector2.trim()) {
                              setCustomConnectors2([...customConnectors2, tempConnector2.trim()]);
                              setTempConnector2('');
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    </label>
                    {customConnectors2.length > 0 && (
                      <div className="chips-container">
                        {customConnectors2.map((item, idx) => (
                          <span key={`conn2-chip-${idx}`} className="chip">
                            {item}
                            <button
                              type="button"
                              className="chip-remove"
                              onClick={() => setCustomConnectors2(customConnectors2.filter((_, i) => i !== idx))}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="custom-input-group">
                  <label>
                    Sufijo
                    <div className="input-with-button">
                      <input
                        type="text"
                        placeholder="Escribe un sufijo"
                        value={tempSuffix}
                        onChange={(e) => setTempSuffix(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && tempSuffix.trim()) {
                            setCustomSuffixes([...customSuffixes, tempSuffix.trim()]);
                            setTempSuffix('');
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="small-btn"
                        onClick={() => {
                          if (tempSuffix.trim()) {
                            setCustomSuffixes([...customSuffixes, tempSuffix.trim()]);
                            setTempSuffix('');
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </label>
                  {customSuffixes.length > 0 && (
                    <div className="chips-container">
                      {customSuffixes.map((item, idx) => (
                        <span key={`suffix-chip-${idx}`} className="chip">
                          {item}
                          <button
                            type="button"
                            className="chip-remove"
                            onClick={() => setCustomSuffixes(customSuffixes.filter((_, i) => i !== idx))}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            </>
          )}
          {style !== 'CUSTOM' && formulaMode === 'CUSTOM' ? (
            <div className="controls-row">
              <label>
                Raíz
                <select value={root} onChange={(e) => setRoot(e.target.value)}>
                  <option value="">Aleatorio</option>
                  {availableConnectors.roots.map((item, index) => (
                    <option key={`root-${index}`} value={item.text}>{item.text}</option>
                  ))}
                </select>
              </label>

              {['F2', 'F4', 'F5', 'F6'].includes(formula) && (
                <label>
                  Conector 1
                  <select value={connector1} onChange={(e) => setConnector1(e.target.value)}>
                    <option value="">Aleatorio</option>
                    {availableConnectors.simpleConnectors.map((item, index) => (
                      <option key={`connector1-${index}`} value={item.text}>{item.text}</option>
                    ))}
                  </select>
                </label>
              )}

              {['F3', 'F4', 'F5', 'F6'].includes(formula) && (
                <label>
                  Infijo
                  <select value={infix} onChange={(e) => setInfix(e.target.value)}>
                    <option value="">Aleatorio</option>
                    {availableConnectors.complexInfixes.map((item, index) => (
                      <option key={`infix-${index}`} value={item.text}>{item.text}</option>
                    ))}
                  </select>
                </label>
              )}

              {formula === 'F6' && (
                <label>
                  Conector 2
                  <select value={connector2} onChange={(e) => setConnector2(e.target.value)}>
                    <option value="">Aleatorio</option>
                    {availableConnectors.simpleConnectors.map((item, index) => (
                      <option key={`connector2-${index}`} value={item.text}>{item.text}</option>
                    ))}
                  </select>
                </label>
              )}

              <label>
                Sufijo
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
              </label>
            </div>
          ) : null}

          <div className="buttons-row">
            <button type="button" onClick={fetchNames} disabled={loading}>
              Generar nombres
            </button>
            <button type="button" className="secondary" onClick={fetchComponents} disabled={loading}>
              Ver componentes
            </button>
          </div>

          {status && <p className="message">{status}</p>}
        </div>

        <aside className="hero-preview">
          <div className="preview-card">
            <span className="preview-label">Estilo</span>
            <strong>{selectedStyleLabel}</strong>
            <span className="preview-label">Cantidad fija</span>
            <strong>4 nombres</strong>
          </div>
        </aside>
      </section>

      <section className="results-section">
        {loading && <p className="status">Cargando resultados...</p>}

        {!loading && names.length > 0 && (
          <>
            <h2 className="section-title">Nombres generados</h2>
            <div className="cards-grid">
              {names.map((item) => (
                <article key={item.id} className="name-card">
                  <span className="name-title">{item.name}</span>
                  <small>{item.gender} · {item.formula}</small>
                  <p>{item.meaning}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {!loading && components && (
          <>
            <h2 className="section-title">Componentes del generador</h2>
            <div className="components-grid">
              {Object.entries(components).map(([section, items]) => (
                <article key={section} className="component-card">
                  <h3>{section.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())}</h3>
                  <div className="component-list">
                    {items.map((item, idx) => (
                      <span key={`${section}-${idx}`}>{item?.text ?? item?.name ?? JSON.stringify(item)}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
