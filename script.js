// Texto animado en el home
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

// Manejo del formulario de contacto con Formspree sin redirección
document.addEventListener("DOMContentLoaded", function () {
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
          form.reset(); // Limpia campos
          successMessage.style.display = 'block'; // Muestra mensaje
        } else {
          alert("❌ Hubo un error al enviar el formulario.");
        }
      } catch (error) {
        alert("❌ Error de red. Intenta nuevamente.");
      }
    });
  }
});
