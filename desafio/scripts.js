document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const h1 = document.querySelector('h1');

  button.onclick = () => {
    const isTrue = button.ariaSelected === 'true';

    if (!isTrue) {
      h1.style.visibility = 'hidden';
      h1.style.opacity = 0;
      button.ariaSelected = true;
      button.innerHTML = 'Mostrar';
    } else {
      h1.style.visibility = 'visible';
      h1.style.opacity = 1;
      button.setAttribute('aria-selected', false);
      button.innerHTML = 'Esconder';
    }
  };
});
