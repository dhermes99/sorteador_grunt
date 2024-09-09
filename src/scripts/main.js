document.addEventListener("DOMContentLoaded", function () {
  const times = [
    "Grêmio",
    "Internacional",
    "Caxias",
    "Brasil de Pelotas",
    "São José",
    "Ypiranga",
    "Novo Hamburgo",
    "Pelotas",
    "Juventude",
    "Aimoré",
    "São Luiz",
    "Lajeado",
    "Brasil de Farroupilha",
    "Glória",
    "Tupi",
    "Veranópolis",
  ];

  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (evento) {
      evento.preventDefault();

      const timeSorteado = times[Math.floor(Math.random() * times.length)];

      document.getElementById("resultado-valor").innerText = timeSorteado;
      document.querySelector(".resultado").style.display = "block";
    });
});
