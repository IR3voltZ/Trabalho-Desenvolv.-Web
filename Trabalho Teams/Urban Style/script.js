function exibirProdutos(lista, containerId) {
  const container = document.getElementById(containerId);
  lista.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <strong>R$ ${produto.preco.toFixed(2)}</strong><br><br>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(div);
  });
}

let todosProdutos = [];

if (typeof produtosMasculinos !== "undefined" && typeof produtosFemininos !== "undefined") {
  todosProdutos = [...produtosMasculinos, ...produtosFemininos];
}

function adicionarAoCarrinho(id) {
  const produto = todosProdutos.find(p => p.id === id);
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const existenteIndex = carrinho.findIndex(item => item.id === id);
  if (existenteIndex > -1) {
    carrinho[existenteIndex].qtd += 1;
  } else {
    carrinho.push({ ...produto, qtd: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}

if (document.getElementById("produtos-masculinos")) {
  exibirProdutos(produtosMasculinos, "produtos-masculinos");
  exibirProdutos(produtosFemininos, "produtos-femininos");
}
(function robustDarkMode() {
  function applySavedTheme() {
    if (localStorage.getItem('tema') === 'dark') {
      document.body.classList.add('dark');
      return true;
    } else {
      document.body.classList.remove('dark');
      return false;
    }
  }

  function createToggleButton() {
    const header = document.querySelector('header');
    if (!header) return null;

    let btn = document.getElementById('themeToggle');
    if (btn) return btn;

    btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.className = 'btn';
    btn.style.marginLeft = '8px';
    header.appendChild(btn);
    return btn;
  }

  function initToggle() {
    let btn = document.getElementById('themeToggle');
    if (!btn) btn = createToggleButton();
    if (!btn) return; 

    if (applySavedTheme()) btn.textContent = '☀️ Claro';
    else btn.textContent = '🌙 Escuro';

    btn.removeEventListener('click', toggleHandler);
    btn.addEventListener('click', toggleHandler);
  }

  function toggleHandler() {
    document.body.classList.toggle('dark');
    const on = document.body.classList.contains('dark');
    localStorage.setItem('tema', on ? 'dark' : 'light');
    this.textContent = on ? '☀️ Claro' : '🌙 Escuro';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
document.addEventListener("DOMContentLoaded", () => {

  const paginasProtegidas = ["inicio.html", "carrinho.html"];
  const paginaAtual = window.location.pathname.split("/").pop();

  if (paginasProtegidas.includes(paginaAtual)) {
    if (localStorage.getItem("logado") !== "true") {
      window.location.href = "login.html";
      return;
    }
  }

  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("logado");
      alert("Você saiu da conta.");
      window.location.href = "login.html";
    });
  }

});