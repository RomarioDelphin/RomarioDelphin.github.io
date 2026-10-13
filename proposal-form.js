(() => {
  'use strict';
  const form = document.querySelector('#proposal-form');
  if (!form) return;
  const result = document.querySelector('#proposal-result');
  const link = document.querySelector('#proposal-whatsapp');
  const preview = document.querySelector('#proposal-preview');
  const service = form.elements.namedItem('service');
  const params = new URLSearchParams(window.location.search);
  const modality = params.get('modalidade');
  if (modality && [...service.options].some(option => option.value === modality)) service.value = modality;
  const course = form.elements.namedItem('course');
  if (params.get('curso') === 'legislativo') course.value = 'IA na Prática para o Poder Legislativo';
  else if (params.get('tema')) course.value = params.get('tema').slice(0, 150);
  const clearResult = () => {
    result.hidden = true;
    link.removeAttribute('href');
    if (preview) preview.textContent = '';
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelectorAll('[required]').forEach(field => {
      field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo.');
    });
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('website')) return;
    const value = key => String(data.get(key) || '').trim();
    const lines = [
      'Olá, Romário! Quero solicitar uma proposta de capacitação.', '',
      'Modalidade/serviço: ' + service.options[service.selectedIndex].text,
      'Nome: ' + value('name'),
      'Instituição: ' + value('institution'),
      'Município/UF: ' + value('location'),
      'Contato para retorno: ' + value('contact')
    ];
    for (const [key,label] of [['role','Cargo/setor'],['course','Treinamento'],['goal','Objetivo']]) {
      if (value(key)) lines.push(label + ': ' + value(key));
    }
    lines.push('', 'Origem: romariodelphin.com.br/solicitar-proposta.html');
    const text = lines.join('\n');
    link.href = 'https://wa.me/5566999174504?text=' + encodeURIComponent(text);
    if (preview) preview.textContent = text;
    result.hidden = false;
    result.focus();
  });
  for (const event of ['input','change']) form.addEventListener(event, event => {
    if (event.target.setCustomValidity) event.target.setCustomValidity('');
    clearResult();
  });
  form.addEventListener('reset', clearResult);
  form.querySelector('button[type="submit"]').disabled = false;
})();
