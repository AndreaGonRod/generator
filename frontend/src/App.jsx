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
      const query = buildQuery({ style, gender, formulaMode, formula, root, suffix, connector1, infix, connector2 });
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
              }}>
                {styleOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
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
              <select value={formulaMode} disabled={style === 'CUSTOM'} onChange={(e) => {
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
            {(formulaMode === 'CUSTOM' || style === 'CUSTOM') && (
              <label>
                Tipo de fórmula
                <select value={formula} onChange={(e) => {
                  setFormula(e.target.value);
                  setConnector1('');
                  setInfix('');
                  setConnector2('');
                }}>
                  {formulaShapeOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            )}
          </div>

          {style === 'CUSTOM' ? (
            <div className="controls-row">
              <label>
                Raíz
                <input
                  type="text"
                  placeholder="Escribe tu propia raíz"
                  value={root}
                  onChange={(e) => setRoot(e.target.value)}
                />
              </label>

              {['F2', 'F4', 'F5', 'F6'].includes(formula) && (
                <label>
                  Conector 1
                  <input
                    type="text"
                    placeholder="Escribe tu propio conector"
                    value={connector1}
                    onChange={(e) => setConnector1(e.target.value)}
                  />
                </label>
              )}

              {['F3', 'F4', 'F5', 'F6'].includes(formula) && (
                <label>
                  Infijo
                  <input
                    type="text"
                    placeholder="Escribe tu propio infijo"
                    value={infix}
                    onChange={(e) => setInfix(e.target.value)}
                  />
                </label>
              )}

              {formula === 'F6' && (
                <label>
                  Conector 2
                  <input
                    type="text"
                    placeholder="Escribe tu propio conector"
                    value={connector2}
                    onChange={(e) => setConnector2(e.target.value)}
                  />
                </label>
              )}

              <label>
                Sufijo
                <input
                  type="text"
                  placeholder="Escribe tu propio sufijo"
                  value={suffix}
                  onChange={(e) => setSuffix(e.target.value)}
                />
              </label>
            </div>
          ) : formulaMode === 'CUSTOM' ? (
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
