document.getElementById("cadastrar").addEventListener("click", () => {
  const user = document.getElementById("cad_usuario").value.trim();
  const pass = document.getElementById("cad_senha").value.trim();

  if (user === "" || pass === "") {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.find(u => u.usuario === user);

  if (existe) {
    alert("Esse usuário já está cadastrado!");
    return;
  }

  usuarios.push({ usuario: user, senha: pass });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso! Redirecionando para login...");
  window.location.href = "login.html";
});