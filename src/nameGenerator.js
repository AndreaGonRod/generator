const DATA = {
  GREEK: {
    roots: [
      ['Theo', 'la divinidad'],
      ['Astro', 'las estrellas'],
      ['Helio', 'el sol'],
      ['Seleno', 'el brillo lunar'],
      ['Krono', 'el tiempo'],
      ['Geo', 'la tierra'],
      ['Aero', 'el aire y viento'],
      ['Hydro', 'el agua fluida'],
      ['Pyro', 'el fuego ardiente'],
      ['Kalo', 'la belleza'],
      ['Arki', 'el liderazgo'],
      ['Andro', 'la fuerza humana'],
      ['Philo', 'el amor afin'],
      ['Xeno', 'lo misterioso y extranjero'],
      ['Neo', 'lo nuevo y moderno'],
      ['Paleo', 'la sabiduria antigua'],
      ['Mega', 'lo magnifico'],
      ['Kleo', 'el renombre'],
      ['Niko', 'lo triunfante'],
      ['Sofi', 'el conocimiento'],
      ['Aristo', 'lo excelente y mejor'],
      ['Demo', 'el pueblo'],
      ['Irena', 'la paz serena'],
      ['Leon', 'la fuerza del leon'],
      ['Zeno', 'el firmamento de Zeus']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['a', ''],
      ['e', '']
    ],
    complexInfixes: [
      ['and', 'la fuerza de'],
      ['ant', 'el brillo de'],
      ['onit', 'la firmeza de'],
      ['ist', 'el seguidor de'],
      ['althe', 'la curacion de'],
      ['eleu', 'la libertad de'],
      ['io', 'la gracia de'],
      ['opol', 'la ciudad de'],
      ['ast', 'el espacio de']
    ],
    suffixes: [
      ['os', 'MALE', 'aquel que representa'],
      ['is', 'MALE', 'noble guardian de'],
      ['as', 'MALE', 'fuerte como'],
      ['on', 'MALE', 'el gran protector de'],
      ['ander', 'MALE', 'hombre fuerte de'],
      ['crates', 'MALE', 'el que gobierna con'],
      ['a', 'FEMALE', 'aquella que posee gracia de'],
      ['ia', 'FEMALE', 'la esencia mistica de'],
      ['ne', 'FEMALE', 'suave melodia de'],
      ['thea', 'FEMALE', 'divina protectora de'],
      ['dora', 'FEMALE', 'regalo de'],
      ['phila', 'FEMALE', 'amiga de'],
      ['ma', 'NEUTER', 'manifestacion concreta de'],
      ['ax', 'NEUTER', 'fuerza industrial de'],
      ['ox', 'NEUTER', 'vision moderna de'],
      ['ic', 'NEUTER', 'sistema de']
    ]
  },
  NORDIC: {
    roots: [
      ['Thor', 'el trueno'],
      ['Odin', 'la furia y sabiduria'],
      ['Frey', 'la fertilidad'],
      ['As', 'el entorno de los dioses'],
      ['Ing', 'el dios primordial'],
      ['Ragn', 'el destino'],
      ['Bjorn', 'la fuerza bruta'],
      ['Ulf', 'el lobo'],
      ['Arn', 'el aguila'],
      ['Eir', 'la proteccion y paz'],
      ['Frost', 'la escarcha'],
      ['Snae', 'la nieve'],
      ['Fjord', 'el fiordo'],
      ['Sig', 'la victoria'],
      ['Gunn', 'la batalla'],
      ['Hild', 'la guerra'],
      ['Val', 'los caidos en combate'],
      ['Einar', 'el guerrero solitario'],
      ['Brand', 'la espada de fuego']
    ],
    simpleConnectors: [
      ['ar', ''],
      ['ir', ''],
      ['ur', ''],
      ['el', ''],
      ['en', ''],
      ['st', '']
    ],
    complexInfixes: [
      ['ey', 'la herencia de'],
      ['au', 'el destino de'],
      ['va', 'el paso de']
    ],
    suffixes: [
      ['or', 'MALE', 'el ejecutor de'],
      ['ar', 'MALE', 'el ejecutor de'],
      ['ulf', 'MALE', 'el lobo de'],
      ['mund', 'MALE', 'el protector de'],
      ['rik', 'MALE', 'el gobernante de'],
      ['sten', 'MALE', 'la roca inquebrantable de'],
      ['son', 'MALE', 'el hijo de'],
      ['da', 'FEMALE', 'la batalla de'],
      ['hild', 'FEMALE', 'la batalla de'],
      ['borg', 'FEMALE', 'el castillo protector de'],
      ['dis', 'FEMALE', 'la diosa protectora de'],
      ['run', 'FEMALE', 'el secreto runico de'],
      ['a', 'FEMALE', 'la gracia de'],
      ['um', 'NEUTER', 'el hogar de'],
      ['en', 'NEUTER', 'el elemento de'],
      ['ark', 'NEUTER', 'el territorio de'],
      ['k', 'NEUTER', 'el nucleo de']
    ]
  }
};

const FORMULAS = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];
const GENDERS = ['MALE', 'FEMALE', 'NEUTER'];

const toItem = ([text, meaning], style) => ({ text, meaning, style });
const toSuffix = ([text, gender, meaning], style) => ({ text, gender, meaning, style });

export function getLocalComponents(style = 'GREEK') {
  if (style === 'RANDOM') {
    return mergeComponents(['GREEK', 'NORDIC']);
  }

  const source = DATA[style] || DATA.GREEK;
  return {
    roots: source.roots.map((item) => toItem(item, style)),
    simpleConnectors: source.simpleConnectors.map((item) => toItem(item, style)),
    complexInfixes: source.complexInfixes.map((item) => toItem(item, style)),
    suffixes: source.suffixes.map((item) => toSuffix(item, style))
  };
}

export function generateLocalNames(params) {
  if (params.style === 'CUSTOM') {
    return generateCustomNames(params);
  }

  const count = params.count ?? 4;
  const useCustomFormula = params.formulaMode === 'CUSTOM';
  return Array.from({ length: count }, (_, index) => {
    const style = params.style === 'RANDOM' ? pick(['GREEK', 'NORDIC']) : params.style || 'GREEK';
    const gender = params.gender === 'RANDOM' || !params.gender ? pick(GENDERS) : params.gender;
    const formula = useCustomFormula ? (params.formula || 'F1') : pick(FORMULAS);
    const components = getLocalComponents(style);
    const suffixPool = params.suffix
      ? components.suffixes
      : components.suffixes.filter((item) => item.gender === gender);
    return buildName({
      style,
      gender,
      formula,
      root: findOrPick(components.roots, params.root),
      suffix: findOrPick(suffixPool, params.suffix),
      connector1: findOrPick(components.simpleConnectors, params.connector1),
      infix: findOrPick(components.complexInfixes, params.infix),
      connector2: findOrPick(components.simpleConnectors, params.connector2),
      index
    });
  });
}

function generateCustomNames(params) {
  const roots = params.root?.length ? params.root : [];
  const suffixes = params.suffix?.length ? params.suffix : [];
  const connector1 = params.connector1?.length ? params.connector1 : [''];
  const infixes = params.infix?.length ? params.infix : [''];
  const connector2 = params.connector2?.length ? params.connector2 : [''];
  const results = [];

  for (const root of roots) {
    for (const suffix of suffixes) {
      for (const c1 of connector1) {
        for (const infix of infixes) {
          for (const c2 of connector2) {
            if (!customFormulaIsReady(params.formula, c1, infix, c2)) continue;
            results.push(buildName({
              style: 'CUSTOM',
              gender: params.gender === 'RANDOM' ? pick(GENDERS) : params.gender,
              formula: params.formula,
              root: { text: root, meaning: '' },
              suffix: { text: suffix, meaning: '' },
              connector1: { text: c1, meaning: '' },
              infix: { text: infix, meaning: '' },
              connector2: { text: c2, meaning: '' },
              index: results.length
            }));
            if (results.length >= 50) return results;
          }
        }
      }
    }
  }

  return results;
}

function buildName(parts) {
  const formulaParts = {
    F1: [parts.root, parts.suffix],
    F2: [parts.root, parts.connector1, parts.suffix],
    F3: [parts.root, parts.infix, parts.suffix],
    F4: [parts.root, parts.connector1, parts.infix, parts.suffix],
    F5: [parts.root, parts.infix, parts.connector1, parts.suffix],
    F6: [parts.root, parts.connector1, parts.infix, parts.connector2, parts.suffix]
  }[parts.formula || 'F1'];

  const name = capitalize(formulaParts.reduce((result, item) => combine(result, item?.text || ''), ''));
  const meaning = [parts.suffix?.meaning, parts.infix?.meaning, parts.connector1?.meaning, parts.root?.meaning]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  return {
    id: `${name}-${parts.index}`,
    name,
    gender: parts.gender || 'NEUTER',
    meaning,
    formula: formulaLabel(parts.formula),
    style: parts.style
  };
}

function mergeComponents(styles) {
  return styles.reduce((merged, style) => {
    const components = getLocalComponents(style);
    Object.keys(merged).forEach((key) => merged[key].push(...components[key]));
    return merged;
  }, { roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
}

function findOrPick(items, text) {
  if (!text) {
    return pick(items);
  }
  const selected = items.find((item) => item.text.toLowerCase() === String(text).toLowerCase());
  if (selected) {
    return selected;
  }
  return pick(items);
}

function customFormulaIsReady(formula, connector1, infix, connector2) {
  if (['F2', 'F4', 'F5', 'F6'].includes(formula) && !connector1) return false;
  if (['F3', 'F4', 'F5', 'F6'].includes(formula) && !infix) return false;
  if (formula === 'F6' && !connector2) return false;
  return true;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function combine(a, b) {
  if (!a) return b;
  if (!b) return a;
  const last = a.at(-1);
  const first = b[0];
  if (isVowel(last) && isVowel(first)) {
    if (isDiphthong(last, first)) return a + b;
    if (last.toLowerCase() === 'a' && first.toLowerCase() === 'o') return combine(a, b.slice(1));
    return combine(a.slice(0, -1), b);
  }
  return a + b;
}

function isVowel(char) {
  return 'aeiouyAEIOUY'.includes(char);
}

function isDiphthong(a, b) {
  return ['ia', 'io', 'ie', 'iu', 'ea', 'eo', 'eu', 'ae', 'oe', 'ai', 'ei', 'ua', 'ui', 'ey', 'au'].includes(
    `${a}${b}`.toLowerCase()
  );
}

function capitalize(value) {
  return value ? value[0].toUpperCase() + value.slice(1).toLowerCase() : value;
}

function formulaLabel(formula) {
  return {
    F1: 'Formula 1: Prefijo + Sufijo',
    F2: 'Formula 2: Prefijo + Conector + Sufijo',
    F3: 'Formula 3: Prefijo + Infijo + Sufijo',
    F4: 'Formula 4: Prefijo + Conector + Infijo + Sufijo',
    F5: 'Formula 5: Prefijo + Infijo + Conector + Sufijo',
    F6: 'Formula 6: Prefijo + Conector + Infijo + Conector + Sufijo'
  }[formula || 'F1'];
}
