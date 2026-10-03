(() => {
  'use strict';
  const form = document.querySelector('#proposal-form');
  if (!form) return;
  const result = document.querySelector('#proposal-result');
  const link = document.querySelector('#proposal-whatsapp');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelectorAll('[required]').forEach(field => {
      field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo.');
    });
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('website')) return;
    const text = 'Olá, Romário! Quero solicitar uma proposta.\n\n' +
      'Serviço: ' + data.get('service') + '\n' +
      'Nome: ' + String(data.get('name')).trim() + '\n' +
      'Instituição: ' + String(data.get('institution')).trim() + '\n' +
      (String(data.get('role') || '').trim() ? 'Cargo/função: ' + String(data.get('role')).trim() + '\n' : '') +
      (String(data.get('contact') || '').trim() ? 'Contato para retorno: ' + String(data.get('contact')).trim() + '\n' : '') +
      'Objetivo: ' + String(data.get('goal')).trim() + '\n\n' +
      'Origem: romariodelphin.com.br/solicitar-proposta.html';
    link.href = 'https://wa.me/5566999174504?text=' + encodeURIComponent(text);
    result.hidden = false;
    result.focus();
  });
  form.addEventListener('input', event => {
    if (event.target.setCustomValidity) event.target.setCustomValidity('');
    result.hidden = true;
    link.removeAttribute('href');
  });
  form.querySelector('button[type="submit"]').disabled = false;
})();
