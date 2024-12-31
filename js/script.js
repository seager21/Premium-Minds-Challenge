document.addEventListener('DOMContentLoaded', () => {
    const guardarButton = document.querySelector('');
    const cancelarButton = document.querySelector('');

    guardarButton.addEventListener('click', () => {
        alert('Informações guardadas com sucesso.');
    });

    cancelarButton.addEventListener('click', () => {
        alert('Cancelado.');
    });
});

function clearValue(inputElement) {
    inputElement.value = '';
  }

  tailwind.config = {
    plugins: [require('daisyui')],
  };