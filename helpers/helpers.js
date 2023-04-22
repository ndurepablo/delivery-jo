export const createSelectHTML = (options) => {
    return `
      <label for="barrios-select">Selecciona tu barrio:</label>
      <select id="barrios-select" name="barrios-select">
        <option value="" disabled selected>Selecciona una opción</option>
        ${options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
      </select>
    `;
  };

export const createSelectOptions = (options) => {
  return `
    <option value="" disabled selected>Selecciona una opción</option>
    ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
  `;
  };

export const createDatePickerInput = (id, parentElement) => {
    const datePickerInput = document.createElement("input");
    datePickerInput.setAttribute("type", "text");
    datePickerInput.setAttribute("id", id);
    parentElement.appendChild(datePickerInput);
    return id
};
  
// Declaración de una arrow function llamada initializeDatePicker que toma dos parámetros
export const initializeDatePicker = (elementId, calculateDisabledDate, rangeDays, days) => {
    $(function () {
      const today = new Date();
      const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + calculateDisabledDate);
      const disabledUntil = new Date(today.getFullYear(), today.getMonth(), today.getDate() + rangeDays);
      $(`#${elementId}`).datepicker({
        beforeShowDay: function (date) {
            let day = date.getDay();
            if (date.getTime() == nextDay.getTime()) {
              // si es el día siguiente, inhabilitarlo
              return [false];
            };
            return [date >= nextDay && date <= disabledUntil && days.includes(day)];
          }
        }
      )
    }
  )
}

// eliminar datepicker ajenos al seleccionado
export const removeElementInnerId = (id) => {
  const element = document.querySelector(id);
  // Elimina el contenido del elemento si existe
  if (element && element.innerHTML) {
    element.innerHTML = '';
}
};
