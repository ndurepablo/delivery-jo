// Seleccionar elementos del form
const deliveryForm = document.getElementById('delivery');
const bs = document.getElementById('bs');

let bsSelect;
let countrySelect;
let subZoneSelect;
let northZoneSelect;

// Agregar evento change al formulario
deliveryForm.addEventListener('change', function(event) {
    // Obtener el elemento que desencadenó el evento
    const target = event.target;
    const bsZone = ['capital federal' ,'zona norte', 'zona sur', 'zona oeste'];
    const countryZone = ['zona norte', 'zona sur', 'zona oeste'];
    const caba = ['caballito', 'palermo'];
    const northZone = ['Escobar', 'Pacheco']
    // Si el elemento es el botón de BS y está seleccionado
    if (target === bs && target.checked) {
        countrySelect?.remove();
        // Crear un nuevo elemento select y asignarle un ID
        bsSelect = document.createElement('select');
        bsSelect.id = 'bs-select';

        // Iterar sobre la lista de zonas y crear un option para cada una
        for (let i = 0; i < bsZone.length; i++) {
            const option = document.createElement('option');
            option.value = bsZone[i];
            option.textContent = bsZone[i];
            bsSelect.appendChild(option);
        }
        // Crear un nuevo elemento select y asignarle un ID
        subZoneSelect = document.createElement('select');
        subZoneSelect.id = 'sub-zone-select';

        // Iterar sobre la lista de subzonas y crear un option para cada una
        for (let i = 0; i < caba.length; i++) {
            const option = document.createElement('option');
            option.value = caba[i];
            option.textContent = caba[i];
            subZoneSelect.appendChild(option);

            if (option.textContent == ''){

            }
        }

        // Agregar el elemento select al formulario
        deliveryForm.appendChild(bsSelect);
        deliveryForm.appendChild(subZoneSelect);

  } 
  // Si el elemento es el botón de Country y está seleccionado
    else if (target === country && target.checked) {
        // Remover el elemento select del formulario (si existe)
        bsSelect?.remove();
        subZoneSelect?.remove()
        // Crear un nuevo elemento select y asignarle un ID
        countrySelect = document.createElement('select');
        countrySelect.id = 'country-select';

        // Iterar sobre la lista de zonas y crear un option para cada una
        for (let i = 0; i < countryZone.length; i++) {
            const option = document.createElement('option');
            option.id = 'select-option'
            option.value = countryZone[i];
            option.textContent = countryZone[i];
            countrySelect.appendChild(option);
        }
        // Agregar el elemento select al formulario
        deliveryForm.appendChild(countrySelect);
  }
});
