document.getElementById("entrar").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (encontrado) {
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario_atual", usuario);
    alert("Bem-vindo(a), " + usuario + "!");
    window.location.href = "inicio.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
});