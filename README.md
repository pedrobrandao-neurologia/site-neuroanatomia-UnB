# Site de Neuroanatomia Médica — FMD/UnB

Site de apoio à disciplina **174025 — Neuroanatomia Médica** do Departamento de
Morfologia da Faculdade de Medicina da Universidade de Brasília. Reúne um
mini-atlas de fotos de peças anatômicas próprias do departamento, ementa,
roteiros das aulas práticas, neuropatologia e neuroimagem.

## Acesso

O site é publicado via GitHub Pages a partir da branch `main`:

> https://pedrobrandao-neurologia.github.io/site-neuroanatomia-UnB/

A página inicial é `index.html`.

## Seções

| Seção | Página |
|---|---|
| Apresentação | `index.html` |
| Medula Espinhal | `medu.htm` |
| Síndromes medulares | `medu_le.htm` |
| Tronco Encefálico | `tron.htm` |
| Cerebelo | `cereb.htm` |
| Diencéfalo e Núcleos da Base | `dien.htm` |
| Córtex cerebral | `ctx.htm` |
| Vascularização do SNC e Meninges | `mening.htm` |
| Cortes coronais do Encéfalo | `coron.htm` |
| Roteiro das aulas práticas | `rot.htm` |
| Aulas Teóricas | `teor.htm` |
| Neuropatologia | `neuropat.htm` |
| Neuroimagem | `neuroimg.htm` |
| Links | `links.htm` |
| Notas | `notas.htm` |
| Autores | `autores.htm` |

Cada página de seção apresenta uma grade de miniaturas que, ao serem clicadas,
abrem um pop-up com a foto da peça anatômica. Sobre cada foto há marcadores
interativos: ao passar o mouse sobre eles, o nome da estrutura anatômica
correspondente aparece num painel fixo no topo do pop-up.

## Estrutura do repositório

```
.
├── index.html                  # página inicial (apresentação)
├── *.htm                       # páginas das seções e pop-ups do atlas
├── layout.css                  # layout principal (responsivo)
├── estilo.css                  # tipografia e componentes
├── atlas.css                   # estilo dos pop-ups interativos
├── atlas.js                    # comportamento dos rótulos anatômicos
├── posicao.js                  # utilitários originais (pop-ups)
├── Figuras/                    # ilustrações usadas nas aulas
├── imagens/                    # fotos de peças anatômicas (atlas)
├── neuroimagem/                # exames e imagens radiológicas
├── neuropatologia/             # imagens e textos de neuropatologia
├── thumbnails/                 # miniaturas das páginas-índice
└── etc/                        # documentos auxiliares
```

## Mini-atlas — como funciona

- Cada pop-up do atlas usa uma imagem anatômica como plano de fundo de uma
  `<ul>` posicionada relativamente.
- Os marcadores são âncoras `<a class="pontoN">` posicionadas em pixels sobre
  o ponto anatômico exato.
- `atlas.js` lê a posição CSS de cada marcador no carregamento da página,
  amplia a área sensível ao mouse (~28 px) mantendo uma bolinha visual menor
  centrada no mesmo ponto, e exibe o nome da estrutura num painel fixo no topo
  da imagem.
- O painel também responde a foco por teclado (Tab) e a toques em telas
  touch.

## Rodando localmente

Por se tratar de um site estático, basta servir a pasta com qualquer servidor
HTTP simples:

```bash
# Python 3
python3 -m http.server 8000
# em seguida abra http://localhost:8000/
```

> Os pop-ups do atlas usam `window.open` e podem ser bloqueados pelo navegador
> caso aberto via `file://`. Sirva por HTTP para evitar essa limitação.

## Tecnologias

- HTML estático (codificado em ISO-8859-1, conforme o conteúdo original)
- CSS moderno com variáveis e Flexbox, responsivo (≤ 820 px e ≤ 520 px)
- JavaScript vanilla (ES5) — sem dependências externas

## Autores

- **Pedro Renato de Paula Brandão** — Concepção, webdesign, catálogo de
  imagens, legendas, fotos. Ex-monitor de Neuroanatomia Médica.
- **Ivan Coelho Ferreira** — Catálogo de imagens, fotos, legendas, dissecções,
  concepção. Ex-monitor de Neuroanatomia Médica.
- **Prof. Paulo Maurício de Oliva Fonte-Boa, MD, MSc** — Professor responsável
  pela disciplina de Neuroanatomia Médica do Departamento de Morfologia
  (FMD/UnB). Concepção, fotos, legendas, roteiros, aulas, catálogo de
  imagens.

Colaboradores: Carlos Enrique Uribe Valencia, Fernanda Dias Weiler, Diovanni
de Paula.

## Licença e créditos

Copyright © 2006 — Departamento de Morfologia, Faculdade de Medicina,
Universidade de Brasília. Todos os direitos das imagens das peças anatômicas
pertencem ao Departamento de Morfologia da FMD/UnB.
