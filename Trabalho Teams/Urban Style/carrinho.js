function exibirCarrinho() {
  const container = document.getElementById("itens-carrinho");
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    document.getElementById("total").innerText = "Total: R$ 0,00";
    return;
  }

  let total = 0;
  carrinho.forEach((produto, index) => {
    total += produto.preco * (produto.qtd || 1);
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>Quantidade: ${produto.qtd || 1}</p>
      <p>R$ ${(produto.preco * (produto.qtd || 1)).toFixed(2)}</p>
      <button onclick="removerItem(${index})">Remover</button>
    `;
    container.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinho();
}

document.getElementById("finalizar").addEventListener("click", () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }
  window.location.href = "pagamento.html";
});

exibirCarrinho();