document.getElementById("pagar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cartao = document.getElementById("cartao").value.trim();
  const validade = document.getElementById("validade").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!nome || !endereco || !cartao || !validade || !cvv) {
    alert("Preencha todos os campos!");
    return;
  }

  if (cartao.length < 16) {
    alert("Número do cartão inválido!");
    return;
  }

  if (cvv.length < 3) {
    alert("CVV inválido!");
    return;
  }

  alert("Pagamento realizado com sucesso!");

  localStorage.removeItem("carrinho");

  window.location.href = "inicio.html";
});