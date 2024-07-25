function Adicionar() {
            const textoUsuario = document.getElementById("texto-do-input");
            let indiceLista = 0;
            const textoDigitado = textoUsuario.value
 
            textoUsuario.value = "";
 
            const lista = document.getElementById('lista')
 
            lista.innerHTML += `
            <li>
                <input type="checkbox" "name="item-${indiceLista}" id="item-${indiceLista}">
                ${textoDigitado}
            </li>
            `;
 
            indiceLista++
        }

function removerItem() {
      const lista = document.getElementById("lista");
      const itensMarcados = lista.querySelectorAll('input:checked');

      itensMarcados.forEach((variavelRepresentaItem) => {
        variavelRepresentaItem.parentElement.remove();
      });
    }
