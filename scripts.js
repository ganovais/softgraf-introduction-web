document.addEventListener("DOMContentLoaded", () => {
   const cep_input = document.querySelector(".cep-input");
   const value_frete = document.querySelector(".value-frete");
   const address = document.querySelector(".address");
   const increase_buttons = document.querySelectorAll(".increase");
   const subtract_buttons = document.querySelectorAll(".subtract");

   cep_input.onkeyup = (event) => {
      const value = event.target.value;

      if (value && value.length > 7) {
         address.innerHTML = "Carregando...";
         address.style.display = "block";
         cep_input.disabled = true;

         fetch(`https://viacep.com.br/ws/${value}/json`)
            .then((response) => response.json())
            .then((data) => {
               if (data.erro) {
                  address.innerHTML = "CEP inválido";
                  cep_input.disabled = false;
                  cep_input.focus();
                  return;
               }
               address.innerHTML = `${data.logradouro} - ${data.bairro} <br>
               ${data.localidade}/${data.uf}`;
               value_frete.innerHTML = "R$ 30,00";

               cep_input.disabled = false;
               cep_input.focus();
            });
      } else {
         address.style.display = "none";
      }
   };

   increase_buttons.forEach((button) => {
      button.onclick = () => {
         const product_id = button.dataset.product;
         const input = document.getElementById(`product-${product_id}`);

         const actual_value = parseInt(input.value); // "1" -> 1 (string to number)
         input.value = actual_value + 1;
      };
   });

   subtract_buttons.forEach((button) => {
      button.onclick = () => {
         const product_id = button.dataset.product;
         const input = document.getElementById(`product-${product_id}`);

         const actual_value = parseInt(input.value); // "1" -> 1 (string to number)
         input.value = actual_value - 1;

         if (input.value == 0) {
            const remove = confirm("Deseja remover esse produto?"); // true - false

            if (remove) {
               document.getElementById(`main-product-${product_id}`).remove();
            } else {
               input.value = 1;
            }
         }
      };
   });
});
