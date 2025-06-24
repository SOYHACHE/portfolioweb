document.addEventListener("DOMContentLoaded", function () {
  // Animación de texto
  const typed = new Typed(".multiple-text", {
    strings: [
      "Desarrollador Web",
      "Diseñador Gráfico",
      "Freelancer",
      "Analista de Sistemas",
      "Flojo y Borracho ^_^"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
  });

  // Formulario contacto
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        if (response.ok) {
          form.reset();
          successMessage.style.display = 'block';
        } else {
          alert("❌ Error al enviar el formulario.");
        }
      } catch (error) {
        alert("❌ Problema de red.");
      }
    });
  }
});
