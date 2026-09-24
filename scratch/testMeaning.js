const meanings = [
  ['la dama blanca', 'el guerrero'], // la dama blanca del guerrero
  ['el victorioso en', 'el pueblo'], // el victorioso en el pueblo (wait: en de el pueblo?)
  ['el sabio de', 'la cueva de', 'el rey'], // el sabio de la cueva del rey
  ['la belleza', 'la luz'] // la belleza de la luz
];

for (const m of meanings) {
  let joined = m.join(' de ');
  let replaced = joined
    .replace(/\s+/g, ' ')
    .replace(/\bde el\b/gi, 'del')
    .replace(/\bde de\b/gi, 'de')
    .replace(/\bde en\b/gi, 'en') // to fix 'en de' ? actually 'en de' -> 'en' maybe?
    .replace(/\ben de\b/gi, 'en')
    .replace(/\by y\b/gi, 'y')
    .replace(/\by de\b/gi, 'y')
    .replace(/\bde y\b/gi, 'y')
    .replace(/\bde del\b/gi, 'del')
    .replace(/\bde ([a-záéíóúñ]+) (el|la|los|las|del|y)\b/gi, '$1 de $2')
    .replace(/\bde de\b/gi, 'de')
    .replace(/\bde del\b/gi, 'del')
    .replace(/\bde y\b/gi, 'y')
    .trim();
  console.log(`Original: ${m.join(' | ')} => Result: ${replaced}`);
}
