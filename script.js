/*
  PROJEM Linkbio — JavaScript mínimo
  Mantém apenas o ano automático do rodapé.
  Os botões foram deixados sem microefeitos para preservar um visual mais limpo.
*/

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
