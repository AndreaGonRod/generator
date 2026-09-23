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
      ['Philo', 'el amor afín'],
      ['Xeno', 'lo misterioso y extranjero'],
      ['Neo', 'lo nuevo y moderno'],
      ['Paleo', 'la sabiduría antigua'],
      ['Mega', 'lo magnífico'],
      ['Kleo', 'el renombre'],
      ['Niko', 'lo triunfante'],
      ['Sofi', 'el conocimiento'],
      ['Aristo', 'lo excelente y mejor'],
      ['Demo', 'el pueblo'],
      ['Irena', 'la paz serena'],
      ['Leon', 'la fuerza del león'],
      ['Zeno', 'el firmamento de Zeus'],
      ['Chrono', 'el paso del tiempo'],
      ['Morpho', 'la forma cambiante'],
      ['Nyx', 'la noche oscura'],
      ['Krypto', 'lo oculto'],
      ['Agape', 'el amor incondicional'],
      ['Bios', 'la esencia de la vida'],
      ['Dyna', 'el poder absoluto'],
      ['Tele', 'la gran distancia'],
      ['Pneumo', 'el aliento vital'],
      ['Calli', 'la hermosura sublime'],
      ['Erebo', 'las sombras primigenias'],
      ['Hiero', 'lo sagrado'],
      ['Orpho', 'el misterio de la noche'],
      ['Aethero', 'el cielo superior'],
      ['Cosmo', 'el orden universal']
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
      ['althe', 'la curación de'],
      ['eleu', 'la libertad de'],
      ['io', 'la gracia de'],
      ['opol', 'la ciudad de'],
      ['ast', 'el espacio de'],
      ['arch', 'el origen de'],
      ['gen', 'el nacimiento de'],
      ['krat', 'el dominio de'],
      ['log', 'la razón de'],
      ['mach', 'la batalla de'],
      ['makh', 'la lucha por'],
      ['crat', 'el gobierno de'],
      ['nom', 'la ley de']
    ],
    suffixes: [
      ['os', 'MALE', 'aquel que representa'],
      ['is', 'MALE', 'noble guardián de'],
      ['as', 'MALE', 'fuerte como'],
      ['on', 'MALE', 'el gran protector de'],
      ['ander', 'MALE', 'hombre fuerte de'],
      ['crates', 'MALE', 'el que gobierna con'],
      ['sthenes', 'MALE', 'fuerza indomable de'],
      ['cles', 'MALE', 'fama inmortal de'],
      ['archos', 'MALE', 'líder supremo de'],
      ['doros', 'MALE', 'don divino de'],
      ['a', 'FEMALE', 'aquella que posee gracia de'],
      ['ia', 'FEMALE', 'la esencia mística de'],
      ['ne', 'FEMALE', 'suave melodía de'],
      ['thea', 'FEMALE', 'divina protectora de'],
      ['dora', 'FEMALE', 'regalo de'],
      ['phila', 'FEMALE', 'amiga de'],
      ['phone', 'FEMALE', 'voz cantante de'],
      ['mene', 'FEMALE', 'fuerza persistente de'],
      ['nike', 'FEMALE', 'la victoria de'],
      ['meda', 'FEMALE', 'la astucia de'],
      ['ma', 'NEUTER', 'manifestación concreta de'],
      ['ax', 'NEUTER', 'fuerza industrial de'],
      ['ox', 'NEUTER', 'visión moderna de'],
      ['ic', 'NEUTER', 'sistema de'],
      ['polis', 'NEUTER', 'gran bastión de'],
      ['tron', 'NEUTER', 'el instrumento de']
    ]
  },
  NORDIC: {
    roots: [
      ['Thor', 'el trueno'],
      ['Odin', 'la furia y sabiduría'],
      ['Frey', 'la fertilidad'],
      ['As', 'el entorno de los dioses'],
      ['Ing', 'el dios primordial'],
      ['Ragn', 'el destino'],
      ['Bjorn', 'la fuerza bruta'],
      ['Ulf', 'el lobo'],
      ['Arn', 'el águila'],
      ['Eir', 'la protección y paz'],
      ['Frost', 'la escarcha'],
      ['Snae', 'la nieve'],
      ['Fjord', 'el fiordo'],
      ['Sig', 'la victoria'],
      ['Gunn', 'la batalla'],
      ['Hild', 'la guerra'],
      ['Val', 'los caídos en combate'],
      ['Einar', 'el guerrero solitario'],
      ['Brand', 'la espada de fuego'],
      ['Hrim', 'la escarcha eterna'],
      ['Sol', 'la luz del sol'],
      ['Mani', 'el resplandor de la luna'],
      ['Vidar', 'el silencio profundo'],
      ['Heimdall', 'la guardia vigilante'],
      ['Loki', 'el caos astuto'],
      ['Freya', 'el amor y la guerra'],
      ['Tyr', 'la justicia implacable'],
      ['Draug', 'el espíritu vengativo'],
      ['Surt', 'el fuego negro'],
      ['Fenrir', 'el lobo devorador'],
      ['Skoll', 'la persecución'],
      ['Ymir', 'el gigante primordial'],
      ['Hugin', 'el pensamiento'],
      ['Munin', 'la memoria'],
      ['Asgard', 'el reino dorado'],
      ['Jotun', 'la escarcha gigante']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['ey', 'la herencia de'],
      ['au', 'el destino de'],
      ['va', 'el paso de'],
      ['heim', 'el hogar nevado de'],
      ['gard', 'la fortaleza de'],
      ['skald', 'el poema épico de'],
      ['jarl', 'el mandato de'],
      ['vard', 'el custodio de'],
      ['varg', 'la ferocidad de'],
      ['ulf', 'la manada de'],
      ['storm', 'la tormenta de'],
      ['hrafn', 'el vuelo de']
    ],
    suffixes: [
      ['or', 'MALE', 'el ejecutor de'],
      ['ar', 'MALE', 'el ejecutor de'],
      ['ulf', 'MALE', 'el lobo de'],
      ['mund', 'MALE', 'el protector de'],
      ['rik', 'MALE', 'el gobernante de'],
      ['sten', 'MALE', 'la roca inquebrantable de'],
      ['son', 'MALE', 'el hijo de'],
      ['grim', 'MALE', 'la máscara de'],
      ['thjof', 'MALE', 'el saqueador de'],
      ['thun', 'MALE', 'el trueno de'],
      ['rek', 'MALE', 'el rey de'],
      ['da', 'FEMALE', 'la batalla de'],
      ['hild', 'FEMALE', 'la batalla de'],
      ['borg', 'FEMALE', 'el castillo protector de'],
      ['dis', 'FEMALE', 'la diosa protectora de'],
      ['run', 'FEMALE', 'el secreto rúnico de'],
      ['a', 'FEMALE', 'la gracia de'],
      ['dottir', 'FEMALE', 'la hija de'],
      ['bjorg', 'FEMALE', 'la salvación de'],
      ['lief', 'FEMALE', 'la amada de'],
      ['um', 'NEUTER', 'el hogar de'],
      ['en', 'NEUTER', 'el elemento de'],
      ['ark', 'NEUTER', 'el territorio de'],
      ['k', 'NEUTER', 'el núcleo de'],
      ['thing', 'NEUTER', 'la asamblea de'],
      ['gard', 'NEUTER', 'la muralla de'],
      ['heim', 'NEUTER', 'el mundo de']
    ]
  },
  LATIN: {
    roots: [
      ['Lux', 'la luz brillante'],
      ['Ignis', 'el fuego devorador'],
      ['Terra', 'la tierra firme'],
      ['Bellum', 'la guerra implacable'],
      ['Aevum', 'la eternidad insondable'],
      ['Sol', 'el sol radiante'],
      ['Luna', 'la luna mística'],
      ['Cor', 'el corazón valiente'],
      ['Vox', 'la voz divina'],
      ['Fatum', 'el destino ineludible'],
      ['Pax', 'la paz duradera'],
      ['Lex', 'la ley inquebrantable'],
      ['Nox', 'la noche profunda'],
      ['Rex', 'la realeza suprema'],
      ['Umbra', 'la penumbra oscura'],
      ['Tempus', 'el tiempo incesante'],
      ['Aura', 'la brisa etérea'],
      ['Lumen', 'el resplandor ciego'],
      ['Somnus', 'el sueño eterno'],
      ['Mortis', 'el final inevitable'],
      ['Imperium', 'el mandato divino'],
      ['Sanguis', 'la sangre derramada']
    ],
    simpleConnectors: [
      ['i', ''],
      ['u', ''],
      ['a', '']
    ],
    complexInfixes: [
      ['ifer', 'el que porta'],
      ['potens', 'el poderoso'],
      ['victrix', 'la victoriosa'],
      ['fid', 'la fe de'],
      ['val', 'el valor de'],
      ['luc', 'el resplandor de'],
      ['ficus', 'el creador de'],
      ['vagus', 'el que vaga por'],
      ['dolor', 'el sufrimiento de'],
      ['glor', 'la gloria de']
    ],
    suffixes: [
      ['us', 'MALE', 'aquel que personifica'],
      ['ius', 'MALE', 'el hijo legítimo de'],
      ['or', 'MALE', 'el creador de'],
      ['ianus', 'MALE', 'perteneciente a'],
      ['maximus', 'MALE', 'el más grande de'],
      ['a', 'FEMALE', 'la que personifica'],
      ['ia', 'FEMALE', 'la esencia pura de'],
      ['trix', 'FEMALE', 'la que gobierna sobre'],
      ['ina', 'FEMALE', 'proveniente de'],
      ['rix', 'FEMALE', 'la reina indomable de'],
      ['um', 'NEUTER', 'el concepto de'],
      ['ium', 'NEUTER', 'el reino eterno de'],
      ['mentum', 'NEUTER', 'el instrumento de'],
      ['arium', 'NEUTER', 'el santuario de']
    ]
  },
  JAPANESE: {
    roots: [
      ['Ryu', 'el dragón ancestral'],
      ['Kami', 'el espíritu divino'],
      ['Kage', 'la sombra silenciosa'],
      ['Tsuki', 'la luna mística'],
      ['Kaze', 'el viento cortante'],
      ['Yama', 'la montaña eterna'],
      ['Mizu', 'el agua que fluye'],
      ['Kura', 'la oscuridad profunda'],
      ['Ten', 'el cielo infinito'],
      ['Shiro', 'el castillo inexpugnable'],
      ['Hi', 'el fuego abrasador'],
      ['Mori', 'el bosque sagrado'],
      ['Tora', 'el tigre feroz'],
      ['Hebi', 'la serpiente sigilosa'],
      ['Inu', 'el lobo guardián'],
      ['Hoshi', 'la estrella guía'],
      ['Yuki', 'la nieve pura'],
      ['Sora', 'el cielo despejado'],
      ['Gin', 'la plata brillante'],
      ['Kin', 'el oro imperial'],
      ['Tetsu', 'el acero inquebrantable'],
      ['Ken', 'la espada sagrada']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['no', 'perteneciente a'],
      ['mura', 'la aldea de'],
      ['moto', 'el origen de'],
      ['kawa', 'el río de'],
      ['kami', 'la divinidad de'],
      ['hashi', 'el puente hacia'],
      ['kaze', 'el viento de'],
      ['yama', 'el pico de'],
      ['zaka', 'la colina de']
    ],
    suffixes: [
      ['taro', 'MALE', 'el gran hijo de'],
      ['ro', 'MALE', 'el hijo de'],
      ['shi', 'MALE', 'el guerrero de'],
      ['maru', 'MALE', 'el guardián perfecto de'],
      ['jiro', 'MALE', 'el segundo hijo de'],
      ['suke', 'MALE', 'el asistente de'],
      ['yori', 'MALE', 'la confianza de'],
      ['ko', 'FEMALE', 'la niña de'],
      ['mi', 'FEMALE', 'la belleza de'],
      ['hana', 'FEMALE', 'la flor de'],
      ['hime', 'FEMALE', 'la princesa de'],
      ['nami', 'FEMALE', 'la ola de'],
      ['san', 'NEUTER', 'el honorable linaje de'],
      ['sama', 'NEUTER', 'el gran señorío de'],
      ['shin', 'NEUTER', 'el corazón de'],
      ['do', 'NEUTER', 'el camino de'],
      ['jin', 'NEUTER', 'el espíritu de']
    ]
  },
  ELVISH: {
    roots: [
      ['Celeb', 'la plata brillante'],
      ['Mith', 'la niebla gris'],
      ['Galad', 'la luz radiante'],
      ['Orod', 'la montaña alta'],
      ['Elen', 'la estrella fugaz'],
      ['Taur', 'el gran bosque'],
      ['Loth', 'la flor sagrada'],
      ['Gil', 'la estrella pura'],
      ['Gwae', 'el viento susurrante'],
      ['Fael', 'la justicia dorada'],
      ['Nim', 'el blanco inmaculado'],
      ['Mor', 'la oscuridad antigua'],
      ['Cal', 'la luz del amanecer'],
      ['Rin', 'el recuerdo eterno']
    ],
    simpleConnectors: [
      ['i', ''],
      ['a', ''],
      ['e', '']
    ],
    complexInfixes: [
      ['dil', 'el devoto de'],
      ['dur', 'el sirviente de'],
      ['ndil', 'el amante de'],
      ['los', 'la flor de nieve de'],
      ['wen', 'la doncella de'],
      ['rion', 'el príncipe de']
    ],
    suffixes: [
      ['ion', 'MALE', 'el hijo de'],
      ['dir', 'MALE', 'el guardián de'],
      ['rond', 'MALE', 'el custodio de la caverna de'],
      ['mir', 'MALE', 'la joya de'],
      ['randir', 'MALE', 'el peregrino de'],
      ['iel', 'FEMALE', 'la hija de'],
      ['wen', 'FEMALE', 'la doncella de'],
      ['thien', 'FEMALE', 'la musa de'],
      ['riel', 'FEMALE', 'la doncella coronada de'],
      ['lin', 'NEUTER', 'la melodía de'],
      ['falas', 'NEUTER', 'la costa de'],
      ['dor', 'NEUTER', 'la tierra de']
    ]
  }
};

const FORMULAS = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];
const GENDERS = ['MALE', 'FEMALE', 'NEUTER'];

const toItem = ([text, meaning], style) => ({ text, meaning, style });
const toSuffix = ([text, gender, meaning], style) => ({ text, gender, meaning, style });

export function getLocalComponents(style = 'GREEK') {
  if (style === 'RANDOM') {
    return mergeComponents(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'ELVISH']);
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

  const count = params.count ?? 6;
  const useCustomFormula = params.formulaMode === 'CUSTOM';
  const results = [];
  const seenNames = new Set();
  let attempts = 0;
  const maxAttempts = count * 10;

  while (results.length < count && attempts < maxAttempts) {
    attempts++;
    const style = params.style === 'RANDOM' ? pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'ELVISH']) : params.style || 'GREEK';
    const gender = params.gender === 'RANDOM' || !params.gender ? pick(GENDERS) : params.gender;
    const formula = useCustomFormula ? (params.formula || 'F1') : pick(FORMULAS);
    const components = getLocalComponents(style);
    const suffixPool = params.suffix
      ? components.suffixes
      : components.suffixes.filter((item) => item.gender === gender);
      
    const newName = buildName({
      style,
      gender,
      formula,
      root: findOrPick(components.roots, params.root),
      suffix: findOrPick(suffixPool, params.suffix),
      connector1: findOrPick(components.simpleConnectors, params.connector1),
      infix: findOrPick(components.complexInfixes, params.infix),
      connector2: findOrPick(components.simpleConnectors, params.connector2),
      index: results.length
    });

    if (!seenNames.has(newName.name)) {
      seenNames.add(newName.name);
      results.push(newName);
    }
  }
  
  return results;
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
    .replace(/\bde el\b/g, 'del')
    .trim();

  return {
    id: `${name}-${parts.index}`,
    name,
    ipa: generateIPA(name, parts.style),
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

function generateIPA(name, style) {
  let ipa = name.toLowerCase();
  
  if (style === 'GREEK') {
    ipa = ipa
      .replace(/ai/g, 'e')
      .replace(/ei/g, 'i')
      .replace(/oi/g, 'i')
      .replace(/ou/g, 'u')
      .replace(/au/g, 'af')
      .replace(/eu/g, 'ef')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'x')
      .replace(/y/g, 'i')
      .replace(/c/g, 'k')
      .replace(/x/g, 'ks');
  } else if (style === 'NORDIC') {
    ipa = ipa
      .replace(/ei/g, 'eɪ')
      .replace(/au/g, 'aʊ')
      .replace(/th/g, 'θ')
      .replace(/j/g, 'j')
      .replace(/y/g, 'y')
      .replace(/v/g, 'v')
      .replace(/ö/g, 'ø')
      .replace(/o/g, 'o')
      .replace(/rs/g, 'ʂ')
      .replace(/rn/g, 'rn');
  } else if (style === 'LATIN') {
    ipa = ipa
      .replace(/qu/g, 'kw')
      .replace(/ae/g, 'aɪ')
      .replace(/c/g, 'k')
      .replace(/v/g, 'w')
      .replace(/ph/g, 'f')
      .replace(/th/g, 't')
      .replace(/y/g, 'i');
  } else if (style === 'JAPANESE') {
    ipa = ipa
      .replace(/sh/g, 'ɕ')
      .replace(/ch/g, 'tɕ')
      .replace(/j/g, 'dʑ')
      .replace(/y/g, 'j')
      .replace(/r/g, 'ɾ');
  } else if (style === 'ELVISH') {
    ipa = ipa
      .replace(/th/g, 'θ')
      .replace(/dh/g, 'ð')
      .replace(/ch/g, 'x')
      .replace(/ph/g, 'f')
      .replace(/lh/g, 'ɬ')
      .replace(/y/g, 'y');
  } else {
    ipa = ipa
      .replace(/ai/g, 'e')
      .replace(/ou/g, 'u')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'x')
      .replace(/y/g, 'i');
  }

  // Accent logic (using standard Spanish tildes instead of IPA stress marks for readability)
  const accents = { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'y': 'ý', 'ø': 'ǿ', 'θ': 'θ' };
  
  // Find all vowel characters
  const vowelsMatches = [...ipa.matchAll(/[aeiouyø]/g)];
  if (vowelsMatches.length >= 2) {
    // Penultimate syllable stress
    const penultMatch = vowelsMatches[vowelsMatches.length - 2];
    const char = penultMatch[0];
    const index = penultMatch.index;
    if (accents[char]) {
      ipa = ipa.substring(0, index) + accents[char] + ipa.substring(index + 1);
    }
  } else if (vowelsMatches.length === 1) {
    const match = vowelsMatches[0];
    const char = match[0];
    const index = match.index;
    if (accents[char]) {
      ipa = ipa.substring(0, index) + accents[char] + ipa.substring(index + 1);
    }
  }

  return ipa;
}
