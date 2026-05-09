/* atlas.js
   Melhora a usabilidade dos rótulos anatômicos do mini-atlas:
   - Lê a posição original (CSS .pontoN) de cada marcador
   - Aumenta a área sensível ao mouse para ~28px
   - Mantém uma bolinha visual menor centrada no ponto anatômico
   - Mostra o nome da estrutura num painel fixo no topo da imagem
   - Cancela o "salto" de posição no hover (que tornava o uso instável) */

(function () {
  'use strict';

  var HIT_SIZE = 28; // área de hover (px)

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  ready(function init() {
    var anchors = document.querySelectorAll('a[class^="ponto"], a[class*=" ponto"]');
    if (!anchors.length) return;

    var stage = anchors[0].closest('ul') || anchors[0].parentElement;
    if (!stage) return;
    stage.classList.add('atlas-stage');

    // Painel fixo no topo
    var bar = document.createElement('div');
    bar.className = 'atlas-label';
    var hintHtml =
      '<span class="atlas-label__hint">Passe o mouse sobre os marcadores para ver as estruturas anatômicas</span>';
    bar.innerHTML = hintHtml;
    document.body.insertBefore(bar, document.body.firstChild);

    function setLabel(num, text) {
      if (text) {
        bar.classList.add('is-active');
        bar.innerHTML =
          '<span class="atlas-label__num">' +
          escapeHtml(num) +
          '</span>' +
          '<span class="atlas-label__text">' +
          escapeHtml(text) +
          '</span>';
      } else {
        bar.classList.remove('is-active');
        bar.innerHTML = hintHtml;
      }
    }

    Array.prototype.forEach.call(anchors, function (a, i) {
      // Lê posição original a partir do CSS .pontoN
      var cs = window.getComputedStyle(a);
      var origLeft = parseFloat(cs.left) || 0;
      var origTop = parseFloat(cs.top) || 0;

      // O marcador original era um quadradinho de 6x6 (border:3px) cujo
      // centro fica em (left+3, top+3).
      var cx = origLeft + 3;
      var cy = origTop + 3;

      // Captura o nome da estrutura
      var span = a.querySelector('span');
      var tip = span ? (span.textContent || span.innerText || '').replace(/\s+/g, ' ').trim() : '';

      // Número do ponto (extraído do classname original "pontoN")
      var classMatch = (a.className || '').match(/ponto(\d+)/);
      var num = classMatch ? classMatch[1] : String(i + 1);

      // Remove classes antigas para desativar regras .pontoN:hover (que moviam o ponto)
      a.className = 'atlas-point';
      a.removeAttribute('href');
      a.setAttribute('role', 'button');
      a.setAttribute('tabindex', '0');
      a.setAttribute('aria-label', tip ? num + '. ' + tip : 'Ponto ' + num);
      a.setAttribute('data-num', num);
      if (tip) a.setAttribute('data-tip', tip);

      // Esvazia conteúdo e adiciona a bolinha visual
      a.innerHTML = '<i class="atlas-point__dot" aria-hidden="true"></i>';

      // Inline-style com alta especificidade vence o <style> embutido da página
      var halfHit = HIT_SIZE / 2;
      a.style.cssText =
        'position:absolute;' +
        'left:' + (cx - halfHit) + 'px;' +
        'top:' + (cy - halfHit) + 'px;' +
        'width:' + HIT_SIZE + 'px;' +
        'height:' + HIT_SIZE + 'px;' +
        'margin:0;padding:0;' +
        'border:none;' +
        'background:transparent;' +
        'border-radius:50%;' +
        'display:block;' +
        'cursor:help;' +
        'text-decoration:none;' +
        'color:transparent;' +
        'box-sizing:border-box;';

      function show() { setLabel(num, tip); }
      function hide() { setLabel('', ''); }

      a.addEventListener('mouseenter', show);
      a.addEventListener('mouseleave', hide);
      a.addEventListener('focus', show);
      a.addEventListener('blur', hide);
      a.addEventListener('touchstart', function (e) {
        e.preventDefault();
        show();
      }, { passive: false });
    });
  });
})();
