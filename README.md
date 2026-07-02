# Linkbio PROJEM Engenharia Elétrica

Projeto estático desenvolvido em HTML, CSS e JavaScript puro para a página de linkbio da PROJEM Engenharia Elétrica.

Esta versão foi ajustada para ficar menos genérica e menos carregada visualmente. A prioridade é mobile, leitura rápida e aparência técnica: fundo escuro com movimento discreto, logo central com borda amarela, botões amarelos limpos, ícones pretos à esquerda sem bordas e descrições curtas.

## Estrutura do projeto

```text
projem-linkbio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.png
│   ├── logo-projem-simbolo.png
│   └── logo-projem-completa.jpg
└── docs/
    └── DOCUMENTACAO.md
```

## Links configurados

| Botão | Destino |
|---|---|
| Fale com um engenheiro | https://wa.me/555584710193 |
| Visite nosso site | https://projem.com.br |
| Nossos projetos | https://projetos.projem.com.br |

## Características visuais

- Fonte Poppins.
- Layout mobile first.
- Fundo preto premium com raios desfocados e discretos.
- Logo da PROJEM centralizada em espaço circular.
- Borda amarela ao redor da logo.
- Botões amarelos sem brilho, sem relevo exagerado e sem decoração interna.
- Ícones pretos à esquerda, sem caixa e sem borda.
- Descrições curtas para leitura rápida.
- Maior espaçamento vertical entre os botões.
- Rodapé simples.

## Como publicar

O projeto não exige build. Basta subir todos os arquivos para a hospedagem.

Opções comuns:

1. Netlify: arraste a pasta `projem-linkbio` para o painel de deploy.
2. Vercel: importe a pasta como projeto estático.
3. Hostinger/cPanel: envie os arquivos para a pasta pública do domínio, normalmente `public_html`.
4. GitHub Pages: publique a pasta raiz do projeto.

## Como editar textos e links

Abra o arquivo `index.html`. Os botões estão dentro do bloco:

```html
<nav class="links-list" aria-label="Lista de links da PROJEM">
```

Para alterar um link, edite o atributo `href` da tag `<a>` correspondente.

Exemplo:

```html
<a class="link-balloon" href="https://wa.me/555584710193" target="_blank" rel="noopener noreferrer">
```

## Como trocar a logo

Substitua o arquivo abaixo mantendo o mesmo nome:

```text
assets/logo-projem-simbolo.png
```

Ou altere o caminho no `index.html`:

```html
<img src="assets/logo-projem-simbolo.png" alt="Símbolo da PROJEM" class="brand-logo" />
```

## Como ajustar cores

As principais cores ficam no início do arquivo `styles.css`, dentro de `:root`.

```css
:root {
  --yellow: #f4bf00;
  --yellow-border: #ffd22e;
  --yellow-dark: #d8a700;
  --ink: #050505;
}
```

## Pontos técnicos

- HTML semântico.
- CSS responsivo e comentado.
- JavaScript mínimo apenas para ano automático.
- SVGs inline para evitar dependência de bibliotecas de ícones.
- Suporte a `prefers-reduced-motion` para acessibilidade.
- Site funcional mesmo se o JavaScript não carregar.

## Observação de marca

O símbolo da PROJEM é usado no círculo superior porque encaixa melhor no formato de linkbio e mantém leitura forte no mobile. A versão completa da logo está incluída em `assets/logo-projem-completa.jpg` para uso futuro.
