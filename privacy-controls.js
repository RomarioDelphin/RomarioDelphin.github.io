(() => {
  'use strict';
  const key = 'rd_privacy_v1';
  const lifetime = 180 * 86400000;
  let preference = null;
  let lastTrigger = null;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && saved.version === 1 && typeof saved.external === 'boolean' && saved.expires > Date.now()) preference = saved;
    else if (saved) localStorage.removeItem(key);
  } catch (_) { /* The site also works with storage disabled. */ }
  const banner = document.createElement('section');
  banner.className = 'privacy-banner';
  banner.setAttribute('aria-label', 'Privacidade e conteúdos externos');
  banner.innerHTML = '<div><strong>Você escolhe os conteúdos externos.</strong><p>Não usamos analytics nem pixels de anúncios. Fontes e imagens de terceiros só carregam com sua autorização. <a href="/privacidade.html">Privacidade e cookies</a></p></div><div class="privacy-actions"><button type="button" data-choice="essential">Somente essenciais</button><button type="button" data-choice="external">Permitir conteúdos externos</button><button type="button" data-customize>Personalizar</button></div>';
  const dialog = document.createElement('dialog');
  dialog.className = 'privacy-dialog';
  dialog.setAttribute('aria-labelledby', 'privacy-dialog-title');
  dialog.innerHTML = '<h2 id="privacy-dialog-title">Suas preferências</h2><p>O site funciona sem autorizar conteúdos externos.</p><label><input type="checkbox" checked disabled> Essenciais</label><p>Memoriza esta escolha neste navegador por até 180 dias. Não guarda seu pedido ou seus dados de contato.</p><label><input type="checkbox" id="privacy-external"> Conteúdos externos</label><p>Permite fontes e imagens de serviços como Google Fonts, Blogger e Simple Icons. Esses serviços recebem informações técnicas da conexão.</p><p>Analytics e publicidade: não instalados.</p><div class="privacy-actions"><button type="button" data-save>Salvar preferências</button><button type="button" data-reject>Somente essenciais</button><button type="button" data-close>Fechar</button></div>';
  document.body.append(banner, dialog);
  const external = dialog.querySelector('#privacy-external');
  function apply() {
    document.querySelectorAll('[data-external-src]').forEach(el => {
      if (preference?.external) el.setAttribute('src', el.dataset.externalSrc);
      else el.setAttribute('src', '/logo-rd.svg');
    });
    document.querySelectorAll('link[data-external-href]').forEach(el => {
      if (preference?.external) el.setAttribute('href', el.dataset.externalHref);
      else el.removeAttribute('href');
    });
    banner.hidden = Boolean(preference);
    external.checked = Boolean(preference?.external);
  }
  function save(allowExternal) {
    preference = { version: 1, external: Boolean(allowExternal), expires: Date.now() + lifetime };
    try { localStorage.setItem(key, JSON.stringify(preference)); } catch (_) { }
    apply();
    if (dialog.open) dialog.close();
  }
  function open(trigger) {
    lastTrigger = trigger;
    external.checked = Boolean(preference?.external);
    dialog.showModal();
  }
  banner.querySelector('[data-choice="essential"]').addEventListener('click', () => save(false));
  banner.querySelector('[data-choice="external"]').addEventListener('click', () => save(true));
  banner.querySelector('[data-customize]').addEventListener('click', e => open(e.currentTarget));
  dialog.querySelector('[data-save]').addEventListener('click', () => save(external.checked));
  dialog.querySelector('[data-reject]').addEventListener('click', () => save(false));
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (lastTrigger?.isConnected && !lastTrigger.closest('[hidden]')) lastTrigger.focus(); });
  document.querySelectorAll('[data-privacy-settings]').forEach(el => el.addEventListener('click', e => open(e.currentTarget)));
  apply();
})();
