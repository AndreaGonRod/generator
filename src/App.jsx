import { useMemo, useState, useEffect } from 'react';
import './App.css';
import { generateLocalNames, getLocalComponents } from './nameGenerator';
import { CustomSelect } from './components/CustomSelect';
import { ChipGroup } from './components/ChipGroup';

const groupedStyleOptions = [
  {
    label: 'Fantasía y Alta Ficción',
    options: [
      { value: 'VALYRIAN', label: 'Alto Valyrio' },
      { value: 'ELVISH', label: 'Élfico' },
      { value: 'KHUZDUL', label: 'Khuzdul' }
    ]
  },
  {
    label: 'Históricos y Antiguos',
    options: [
      { value: 'OLD_ENGLISH', label: 'Anglosajón' },
      { value: 'CELTIC', label: 'Celta' },
      { value: 'EGYPTIAN', label: 'Egipcio' },
      { value: 'SLAVIC', label: 'Eslavo' },
      { value: 'GREEK', label: 'Griego Antiguo' },
      { value: 'LATIN', label: 'Latín' },
      { value: 'NORDIC', label: 'Nórdico Antiguo' },
      { value: 'SUMERIAN', label: 'Sumerio' }
    ]
  },
  {
    label: 'Míticos y Divinos',
    options: [
      { value: 'ABYSSAL', label: 'Abisal' },
      { value: 'CELESTIAL', label: 'Celestial' }
    ]
  },
  {
    label: 'Otros',
    options: [
      { value: 'RANDOM', label: 'Aleatorio' },
      { value: 'MIX', label: 'Mezcla' },
      { value: 'CUSTOM', label: 'Personalizado' }
    ]
  },
  {
    label: 'Regionales y Culturales',
    options: [
      { value: 'JAPANESE', label: 'Japonés' },
      { value: 'SWAHILI', label: 'Swahili' }
    ]
  }
];

const styleOptions = groupedStyleOptions.flatMap(g => g.options);

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
  const [mixRoot, setMixRoot] = useState('');
  const [mixConnector1, setMixConnector1] = useState('');
  const [mixInfix, setMixInfix] = useState('');
  const [mixConnector2, setMixConnector2] = useState('');
  const [mixSuffix, setMixSuffix] = useState('');
  
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  
  const [view, setView] = useState('GENERATOR'); // 'GENERATOR' | 'FAVORITES'
  const [copiedId, setCopiedId] = useState(null);
  
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('nomenguard_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('nomenguard_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.name === item.name);
      if (isFav) {
        return prev.filter(f => f.name !== item.name);
      }
      return [...prev, item];
    });
  };

  const copyToClipboard = (item) => {
    const textToCopy = `${item.name}${item.meaning ? ` - ${item.meaning}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id || item.name);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportFavorites = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(favorites));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "nomenguard_favorites.json");
    dlAnchorElem.click();
  };

  const importFavorites = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          setFavorites(prev => {
            const newFavs = [...prev];
            imported.forEach(item => {
              if (!newFavs.some(f => f.name === item.name)) {
                newFavs.push(item);
              }
            });
            return newFavs;
          });
        }
      } catch (err) {
        console.error("Failed to parse JSON", err);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleStyleChange = (selectedStyle) => {
    setStyle(selectedStyle);
    const isCustomStyle = selectedStyle === 'CUSTOM' || selectedStyle === 'MIX';
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
    if (style === 'CUSTOM' || style === 'MIX') {
      return { roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] };
    }
    const styleQuery = style === 'RANDOM' ? 'RANDOM' : style;
    const comps = getLocalComponents(styleQuery);
    if (style === 'RANDOM') {
      comps.simpleConnectors = [];
    }
    return comps;
  }, [style]);

  const buildGenerationParams = () => {
    const params = {
      style,
      gender,
      formulaMode,
      formula,
      count: style === 'CUSTOM' ? undefined : 6
    };

    if (style === 'MIX') {
      params.mixOrigins = {
        root: mixRoot,
        connector1: mixConnector1,
        infix: mixInfix,
        connector2: mixConnector2,
        suffix: mixSuffix
      };
    } else if (style === 'CUSTOM') {
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

  const isMixComplete = () => {
    if (style !== 'MIX') return true;
    if (formulaMode !== 'CUSTOM') return true;
    if (!mixRoot) return false;
    if (formula.includes('INFIX') && !mixInfix) return false;
    if (!mixSuffix) return false;
    return true;
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
        <div className="header-actions">
          <button 
            className={`favorites-toggle ${view === 'FAVORITES' ? 'active' : ''}`}
            onClick={() => setView(view === 'FAVORITES' ? 'GENERATOR' : 'FAVORITES')}
          >
            {view === 'FAVORITES' ? 'Volver al Generador' : `⭐ Favoritos (${favorites.length})`}
          </button>
        </div>
      </header>

      {view === 'GENERATOR' && (
      <section className="form-section">
        <ChipGroup 
          label="Origen" 
          value={style} 
          options={groupedStyleOptions} 
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
              options={formulaShapeOptions.filter(opt => 
                (opt.value !== 'CONNECTOR1' && opt.value !== 'CONNECTOR2') || 
                (availableConnectors.simpleConnectors && availableConnectors.simpleConnectors.length > 0)
              )} 
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

        {style === 'MIX' && formulaMode === 'CUSTOM' && (
          <div className="custom-selections" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div className="control-group" style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Raíz</label>
              <CustomSelect value={mixRoot} onChange={(e) => setMixRoot(e.target.value)} options={[
                { value: '', label: 'Elige...' },
                ...styleOptions.filter(o => o.value !== 'CUSTOM' && o.value !== 'RANDOM' && o.value !== 'MIX')
              ]} />
            </div>

            {formula.includes('INFIX') && (
              <div className="control-group" style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Infijo</label>
                <CustomSelect value={mixInfix} onChange={(e) => setMixInfix(e.target.value)} options={[
                  { value: '', label: 'Elige...' },
                  ...styleOptions.filter(o => o.value !== 'CUSTOM' && o.value !== 'RANDOM' && o.value !== 'MIX')
                ]} />
              </div>
            )}

            <div className="control-group" style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Sufijo</label>
              <CustomSelect value={mixSuffix} onChange={(e) => setMixSuffix(e.target.value)} options={[
                { value: '', label: 'Aleatorio' },
                ...styleOptions.filter(o => o.value !== 'CUSTOM' && o.value !== 'RANDOM' && o.value !== 'MIX')
              ]} />
            </div>
          </div>
        )}

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

        {style !== 'CUSTOM' && style !== 'MIX' && formulaMode === 'CUSTOM' && (
          <div className="custom-selections">
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
          <button type="button" className="btn-primary" onClick={fetchNames} disabled={loading || !isMixComplete()}>
            Descubrir
          </button>
        </div>
      </section>
      )}

      <section className="results">
        {status && <p className="status-message">{status}</p>}
        
        {view === 'FAVORITES' && (
          <div className="favorites-actions">
            <button className="btn-secondary" onClick={exportFavorites}>📤 Exportar JSON</button>
            <label className="btn-secondary">
              📥 Cargar JSON
              <input type="file" accept=".json" onChange={importFavorites} hidden />
            </label>
          </div>
        )}

        <div className="cards">
          {view === 'FAVORITES' && favorites.length === 0 && (
            <div className="empty-state" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p>Aún no has guardado ningún nombre favorito.</p>
            </div>
          )}
          {loading && view === 'GENERATOR'
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="skeleton-card" />
              ))
            : (view === 'FAVORITES' ? favorites : names).map((item, index) => {
                const isFav = favorites.some(f => f.name === item.name);
                return (
                  <div 
                    key={item.id || item.name} 
                    className="card"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="copy-action" style={{ position: 'absolute', top: '8px', left: '8px' }}>
                      <button 
                        className={`copy-btn ${copiedId === (item.id || item.name) ? 'active' : ''}`} 
                        onClick={() => copyToClipboard(item)}
                        title="Copiar al portapapeles"
                      >
                        {copiedId === (item.id || item.name) ? '✓' : '📋'}
                      </button>
                    </div>
                    <div className="card-actions">
                      <button 
                        className={`fav-btn ${isFav ? 'active' : ''}`} 
                        onClick={() => toggleFavorite(item)}
                        title={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
                      >
                        ★
                      </button>
                    </div>
                    <h2>{item.name}</h2>
                    {item.ipa && <span className="ipa">/{item.ipa}/</span>}
                    {item.meaning && <p>{item.meaning}</p>}
                    {item.originMix && <p className="origin-mix" style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>{item.originMix}</p>}
                  </div>
                );
              })}
        </div>
      </section>
    </main>
  );
}

export default App;
