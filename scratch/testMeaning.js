const meanings = [
  ['la dama blanca', 'el guerrero'], 
  ['el victorioso en', 'el pueblo'], 
  ['el sabio de', 'la cueva de', 'el rey'], 
  ['la belleza', 'la luz'],
  ['el luchador por', 'el amor afín'],
  ['perteneciente a', 'el fuego']
];

for (const m of meanings) {
  let meaning = m.reduce((acc, curr) => {
    if (!acc) return curr;
    if (/\b(de|en|por|con|a|para)$/i.test(acc.trim())) {
        return acc + ' ' + curr;
    }
    return acc + ' de ' + curr;
  }, '');
  
  meaning = meaning
    .replace(/\s+/g, ' ')
    .replace(/\ba el\b/gi, 'al')
    .replace(/\bde el\b/g, 'del')
    .replace(/\bde de\b/g, 'de')
    .replace(/\by y\b/g, 'y')
    .replace(/\by de\b/g, 'y')
    .replace(/\bde y\b/g, 'y')
    .replace(/\bde del\b/g, 'del')
    .replace(/\bde ([a-záéíóúñ]+) (el|la|los|las|del|y)\b/gi, '$1 de $2')
    .replace(/\bde de\b/g, 'de')
    .replace(/\bde del\b/g, 'del')
    .replace(/\bde y\b/g, 'y')
    .trim();
  console.log(`Original: ${m.join(' | ')} => Result: ${meaning}`);
}
