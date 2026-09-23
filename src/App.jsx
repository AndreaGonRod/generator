import { useMemo, useState } from 'react';
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

function getNameFontSize(name) {
  if (!name) return '1.4rem';
  if (name.length > 20) return '0.9rem';
  if (name.length > 15) return '1.05rem';
  if (name.length > 12) return '1.2rem';
  return '1.4rem';
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
  const [components, setComponents] = useState(null);
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
      count: style === 'CUSTOM' ? undefined : 4
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

  const selectedStyleLabel = useMemo(
    () => styleOptions.find((option) => option.value === style)?.label ?? 'Griego',
    [style]
  );

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

  const fetchNames = () => {
    setLoading(true);
    setStatus('');
    setComponents(null);
    try {
      const params = buildGenerationParams();
      const localData = generateLocalNames(params);
      const normalized = normalizeNames(localData);
      setNames(normalized);
      if (normalized.length === 0) {
        setStatus('No se encontraron nombres para los filtros seleccionados.');
      }
    } catch (error) {
      setStatus('Error generando nombres: ' + error.message);
      setNames([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchComponents = () => {
    setLoading(true);
    setStatus('');
    setNames([]);
    try {
      const styleQuery = style === 'RANDOM' ? 'RANDOM' : style;
      const data = getLocalComponents(styleQuery);
      setComponents(data);
      if (!data || Object.values(data).every((list) => list.length === 0)) {
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
                  <span className="name-title" style={{ fontSize: getNameFontSize(item.name) }}>{item.name}</span>
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
