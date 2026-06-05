const status = document.getElementById('status');
const results = document.getElementById('results');
const generateButton = document.getElementById('generate');
const componentsButton = document.getElementById('components');

const styleInput = document.getElementById('style');
const genderInput = document.getElementById('gender');
const countInput = document.getElementById('count');

function showStatus(message, isError = false) {
  status.textContent = message;
  status.className = isError ? 'status status--error' : 'status';
}

function createQuery(params) {
  const query = new URLSearchParams();
  if (params.style) query.set('style', params.style);
  if (params.gender) query.set('gender', params.gender);
  if (params.count) query.set('count', params.count);
  return query.toString();
}

async function generateNames() {
  const style = styleInput.value;
  const gender = genderInput.value;
  const count = countInput.value;

  showStatus('Generando nombres...');
  results.innerHTML = '';

  try {
    const query = createQuery({ style, gender, count });
    const response = await fetch(`/api/names/generate?${query}`);
    if (!response.ok) throw new Error(`Error ${response.status}`);

    const names = await response.json();
    if (!Array.isArray(names) || names.length === 0) {
      showStatus('No se generaron nombres.', true);
      return;
    }

    showStatus(`Generados ${names.length} nombre(s) de estilo ${style}.`);
    results.innerHTML = names.map(renderNameCard).join('');
  } catch (error) {
    showStatus('No se pudieron generar nombres. Revisa la consola.', true);
    console.error(error);
  }
}

async function showComponents() {
  const style = styleInput.value;
  showStatus('Consultando componentes...');
  results.innerHTML = '';

  try {
    const query = createQuery({ style });
    const response = await fetch(`/api/names/components?${query}`);
    if (!response.ok) throw new Error(`Error ${response.status}`);

    const components = await response.json();
    const cards = Object.entries(components)
      .map(([key, value]) => renderComponentCard(key, value))
      .join('');

    showStatus(`Componentes de estilo ${style} cargados.`);
    results.innerHTML = cards;
  } catch (error) {
    showStatus('No se pudieron cargar los componentes.', true);
    console.error(error);
  }
}

function renderNameCard(item) {
  return `
    <article class="card">
      <h2>${item.name}</h2>
      <p><strong>Género:</strong> ${item.gender}</p>
      <p><strong>Estilo:</strong> ${item.style}</p>
      <p><strong>Fórmula:</strong> ${item.formula}</p>
      <p><strong>Significado:</strong> ${item.meaning}</p>
    </article>
  `;
}

function renderComponentCard(key, value) {
  const items = Array.isArray(value) ? value : [];
  const count = items.length;
  const list = items.slice(0, 10).map(item => `<li>${item.text ?? item.name ?? item.category ?? ''}</li>`).join('');

  return `
    <article class="card card--small">
      <h2>${key}</h2>
      <p><strong>Total:</strong> ${count}</p>
      ${list ? `<ul>${list}</ul>` : ''}
    </article>
  `;
}

generateButton.addEventListener('click', generateNames);
componentsButton.addEventListener('click', showComponents);
