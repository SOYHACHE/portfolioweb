const typed = new Typed(".multiple-text", {
    strings: ["Desarrollador Web", "Diseñador Gráfico", "Freelancer", "Analista de Sistemas", "Flojo y Borracho ^_^"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
  });

  // Captura el envío del formulario y evita que se recargue
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById("form-success").style.display = "block";
        form.reset();
          setTimeout(() => {
  location.reload();
}, 3000); // 3000 = 3 segundos
      } else {
        alert("❌ Ocurrió un error al enviar. Por favor, intentá de nuevo.");
      }
    }).catch(error => {
      alert("❌ Error de red. Revisá tu conexión o probá más tarde.");
    });
  });
