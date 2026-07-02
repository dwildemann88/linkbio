# Documentação Técnica — Linkbio PROJEM

## 1. Objetivo

Criar uma página de linkbio para a PROJEM Engenharia Elétrica, com foco em conversão no mobile e acesso direto aos principais canais: WhatsApp, site institucional e portfólio de projetos.

A página foi pensada para Instagram, WhatsApp, tráfego pago, QR Code e assinatura digital.

## 2. Direção visual da versão atual

Esta versão corrige o excesso visual da composição anterior. A regra agora é simples: contraste alto, poucos elementos e menos efeito artificial.

A composição usa:

- fundo preto com profundidade discreta;
- raios amarelos desfocados ao fundo, sem competir com os botões;
- símbolo da PROJEM em círculo no topo;
- borda amarela ao redor da logo;
- botões amarelos limpos, sem gradiente chamativo e sem brilho interno;
- ícones pretos à esquerda, sem borda e sem caixa;
- descrições curtas nos botões;
- espaçamento vertical maior entre os botões;
- tipografia Poppins.

## 3. Arquivos principais

### `index.html`

Responsável pela estrutura da página:

- importação da fonte Poppins;
- metadados básicos de SEO;
- favicon;
- bloco de fundo animado;
- seção da marca;
- lista de links;
- ícones SVG inline;
- rodapé.

Os comentários dentro do HTML indicam onde editar logo, textos e links.

### `styles.css`

Responsável por todo o visual:

- variáveis de cor no `:root`;
- fundo com gradientes escuros;
- animações discretas dos raios;
- círculo da logo com borda amarela;
- botões amarelos planos;
- textos e ícones pretos;
- estados de foco para acessibilidade;
- ajustes responsivos mobile first;
- redução de movimento para acessibilidade.

### `script.js`

Responsável apenas pelo preenchimento automático do ano no rodapé.

Os botões não dependem de JavaScript. O site continua funcional mesmo se o script não carregar.

## 4. Personalização rápida

### Alterar número do WhatsApp

No `index.html`, procure:

```html
href="https://wa.me/555584710193"
```

Troque pelo número desejado, sempre no formato internacional, sem espaços, parênteses ou hífen.

### Alterar link do site

Procure:

```html
href="https://projem.com.br"
```

### Alterar link dos projetos

Procure:

```html
href="https://projetos.projem.com.br"
```

### Alterar subtítulo da marca

Procure:

```html
<p class="brand-subtitle">Soluções técnicas em energia, projetos e engenharia.</p>
```

### Alterar descrições dos botões

As descrições ficam dentro das tags `<small>`.

Exemplo:

```html
<small>WhatsApp técnico</small>
```

A recomendação é manter descrições curtas. Não use frases longas aqui.

### Alterar cor dos botões

No `styles.css`, edite:

```css
--yellow: #f4bf00;
--yellow-border: #ffd22e;
--yellow-dark: #d8a700;
```

### Alterar cor dos textos e ícones

No `styles.css`, edite:

```css
--ink: #050505;
--ink-soft: rgba(5, 5, 5, 0.66);
```

## 5. Boas práticas de publicação

Antes de publicar:

1. Confira se todos os links abrem corretamente.
2. Teste no celular, pois linkbio é majoritariamente acessado via mobile.
3. Evite excesso de botões. O linkbio deve ser curto e decisivo.
4. Mantenha o WhatsApp como primeiro botão, porque tende a ser o canal de maior conversão.
5. Use UTM nos links se a página for divulgada em campanhas.
6. Verifique o contraste no aparelho real. O amarelo com texto preto foi escolhido para leitura rápida.

## 6. Sugestão de UTM futura

Para campanhas no Instagram:

```text
https://projem.com.br?utm_source=instagram&utm_medium=bio&utm_campaign=linkbio_projem
```

Para projetos:

```text
https://projetos.projem.com.br?utm_source=instagram&utm_medium=bio&utm_campaign=linkbio_projem&utm_content=projetos
```

Para WhatsApp:

```text
https://wa.me/555584710193?text=Ol%C3%A1%2C%20vim%20pelo%20link%20da%20PROJEM%20e%20quero%20falar%20com%20um%20engenheiro.
```

## 7. SEO básico configurado

O título da página é:

```text
PROJEM Engenharia Elétrica | Links
```

A descrição é:

```text
Linkbio oficial da PROJEM Engenharia Elétrica: WhatsApp técnico, site oficial e portfólio de projetos.
```

## 8. Manutenção recomendada

Revisar mensalmente:

- se o link do WhatsApp está correto;
- se o domínio principal está ativo;
- se o portfólio de projetos está atualizado;
- se a logo está em boa resolução;
- se o carregamento continua rápido no 4G;
- se os botões continuam legíveis em telas pequenas.
