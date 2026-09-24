import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'src', 'nameGenerator.js');

let txt = fs.readFileSync(filePath, 'utf-8');

const startIdx = txt.indexOf('  EGYPTIAN: {');
const endIdx = txt.indexOf('  SWAHILI: {');

if (startIdx !== -1 && endIdx !== -1) {
    const newBlock = `  EGYPTIAN: {
      ['Amon', 'el oculto'],
      ['Ankh', 'la vida'],
      ['Aten', 'el disco solar'],
      ['Heka', 'la magia'],
      ['Hor', 'el halcón'],
      ['Kha', 'la aparición'],
      ['Maat', 'la justicia'],
      ['Men', 'lo eterno'],
      ['Mer', 'el amor'],
      ['Nefer', 'lo hermoso'],
      ['Ptah', 'el creador'],
      ['Ra', 'el sol'],
      ['Sekhem', 'el poder'],
      ['Set', 'el pilar'],
      ['Thoth', 'la sabiduría']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['hotep', 'MALE', 'el que está en paz'],
      ['mose', 'MALE', 'el nacido de'],
      ['nakht', 'MALE', 'el fuerte'],
      ['kare', 'MALE', 'el alma de'],
      ['kheper', 'MALE', 'el creador'],
      ['neferu', 'FEMALE', 'la belleza de'],
      ['iti', 'FEMALE', 'la que viene'],
      ['mut', 'FEMALE', 'la madre de'],
      ['ankhes', 'FEMALE', 'la que vive por'],
      ['amun', 'FEMALE', 'la de Amón']
    ]
  },
  SUMERIAN: {
    roots: [
      ['An', 'el cielo'],
      ['En', 'el señor'],
      ['Lugal', 'el gran rey'],
      ['Nin', 'la señora'],
      ['Ur', 'el sirviente'],
      ['Lu', 'el hombre'],
      ['Gala', 'el cantor'],
      ['Amar', 'el becerro'],
      ['Dingir', 'lo divino'],
      ['E', 'el templo'],
      ['Ki', 'la tierra'],
      ['Me', 'la esencia divina'],
      ['Nam', 'el destino'],
      ['Utu', 'el sol'],
      ['Inanna', 'la diosa de los cielos']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['gal', 'MALE', 'el grande'],
      ['lil', 'MALE', 'el espíritu de'],
      ['gir', 'MALE', 'el fiero'],
      ['nanna', 'MALE', 'de la luna'],
      ['shag', 'MALE', 'el corazón de'],
      ['zida', 'MALE', 'el verdadero'],
      ['tur', 'FEMALE', 'la pequeña'],
      ['kalag', 'FEMALE', 'la fuerte'],
      ['saga', 'FEMALE', 'la buena'],
      ['bara', 'FEMALE', 'la soberana'],
      ['khegal', 'FEMALE', 'la abundante']
    ]
  },
`;

    txt = txt.substring(0, startIdx) + newBlock + txt.substring(endIdx);
    fs.writeFileSync(filePath, txt, 'utf-8');
    console.log('Fixed');
}
