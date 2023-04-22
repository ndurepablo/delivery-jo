

const selectLocation = document.querySelector("#select-location");
const barriosSelectContainer = document.querySelector("#barrios-select-container");

const updateOptions = (event) => {
  const location = event.target.value;
  let options = [];

  if (location === "Capital Federal y GBA") {
    options = ["Capital Federal", "Zona sur", "Zona Norte", "Zona oeste"];
  } else if (location === "Barrio privado / Country") {
    options = ["Zona sur", "Zona Norte", "Zona oeste", "Zona suroeste"];
  }

  selectLocation.innerHTML = options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  // Reset barrios select
  barriosSelectContainer.innerHTML = "";

  if (location === "Capital Federal y GBA" && event.target.checked) {
    const selectedOption = document.querySelector(
      "#select-location option:checked"
    ).value;

    if (selectedOption === "Capital Federal") {
      const barrios = ["Seleccione su barrio","Palermo", "Caballito", "Almagro"];
      const barriosSelectHTML = `
        <label for="barrios-select">Selecciona tu barrio:</label>
        <select id="barrios-select" name="barrios-select">
          ${barrios
            .map((barrio) => `<option value="${barrio}">${barrio}</option>`)
            .join("")}
        </select>
      `;
      barriosSelectContainer.innerHTML = barriosSelectHTML;

      const barriosSelect = document.querySelector("#barrios-select");
      barriosSelect.addEventListener("change", () => {
        const selectedBarrio = barriosSelect.value;
        if (selectedBarrio === "Palermo") {
          const datepickerInputCaballito = document.getElementById('datepicker-caballito');
          const datepickerInputAlmagro = document.getElementById('datepicker-almagro');
          datepickerInputCaballito?.remove();
          datepickerInputAlmagro?.remove();
          console.log("El barrio seleccionado es Palermo");
          // Agrega el código de jQuery y el datepicker
          const datepickerInputPalermo = document.createElement("input");
          datepickerInputPalermo.setAttribute("type", "text");
          datepickerInputPalermo.setAttribute("id", "datepicker-palermo");
          barriosSelectContainer.appendChild(datepickerInputPalermo);

          $(function () {
            $("#datepicker-palermo").datepicker({
              beforeShowDay: function (date) {
                var today = new Date();
                var day = date.getDay();
                var nextDay = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 1
                );
                var threeDaysLater = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 10
                );
                if (date.getTime() == nextDay.getTime()) {
                  // si es el día siguiente, inhabilitarlo
                  return [false];
                }
                return [
                  date >= nextDay &&
                    date <= threeDaysLater &&
                    (day == 1 || day == 3 || day == 5),
                ];
              },
            });
          });
        }
        if (selectedBarrio === "Caballito") {
          const datepickerInputPalermo = document.getElementById('datepicker-palermo');
          const datepickerInputAlmagro = document.getElementById('datepicker-almagro');
          datepickerInputPalermo?.remove();
          datepickerInputAlmagro?.remove();
          console.log("El barrio seleccionado es Caballito");
          // Agrega el código de jQuery y el datepicker
          const datepickerInputCaballito = document.createElement("input");
          datepickerInputCaballito.setAttribute("type", "text");
          datepickerInputCaballito.setAttribute("id", "datepicker-caballito");
          barriosSelectContainer.appendChild(datepickerInputCaballito);

          $(function () {
            $("#datepicker-caballito").datepicker({
              beforeShowDay: function (date) {
                var today = new Date();
                var day = date.getDay();
                var nextDay = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 1
                );
                var threeDaysLater = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 10
                );
                if (date.getTime() == nextDay.getTime()) {
                  // si es el día siguiente, inhabilitarlo
                  return [false];
                }
                return [
                  date >= nextDay &&
                    date <= threeDaysLater &&
                    (day == 2 || day == 4 || day == 6),
                ];
              },
            });
          });
        }
        if (selectedBarrio === "Almagro") {
          const datepickerInputPalermo = document.getElementById('datepicker-palermo');
          const datepickerInputCaballito = document.getElementById('datepicker-caballito');
          datepickerInputCaballito?.remove();
          datepickerInputPalermo?.remove();
          console.log("El barrio seleccionado es Almagro");
          // Agrega el código de jQuery y el datepicker
          const datepickerInputAlmagro = document.createElement("input");
          datepickerInputAlmagro.setAttribute("type", "text");
          datepickerInputAlmagro.setAttribute("id", "datepicker-almagro");
          barriosSelectContainer.appendChild(datepickerInputAlmagro);

          $(function () {
            $("#datepicker-almagro").datepicker({
              beforeShowDay: function (date) {
                var today = new Date();
                var day = date.getDay();
                var nextDay = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 1
                );
                var threeDaysLater = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 10
                );
                if (date.getTime() == nextDay.getTime()) {
                  // si es el día siguiente, inhabilitarlo
                  return [false];
                }
                return [
                  date >= nextDay &&
                    date <= threeDaysLater &&
                    (day == 6),
                ];
              },
            });
          });
        }
      });
    }
  }
};

const radioButtons = document.querySelectorAll('input[name="location"]');
radioButtons.forEach((radioButton) =>
  radioButton.addEventListener("change", updateOptions)
);

selectLocation.addEventListener("change", (event) => {
  if (event.target.value === "Capital Federal") {
    const barrios = ["Palermo", "Caballito", "Almagro"];
    const barriosSelect = `
      <label for="barrios-select">Selecciona tu barrio:</label>
      <select id="barrios-select" name="barrios-select">
        ${barrios
          .map((barrio) => `<option value="${barrio}">${barrio}</option>`)
          .join("")}
      </select>
    `;
    barriosSelectContainer.innerHTML = barriosSelect;
  } else if (event.target.value === "Zona sur") {
    const barrios = ["Wilde", "Avellaneda", "Quilmes"];
    const barriosSelect = `
      <label for="barrios-select">Selecciona tu barrio:</label>
      <select id="barrios-select" name="barrios-select">
        ${barrios
          .map((barrio) => `<option value="${barrio}">${barrio}</option>`)
          .join("")}
      </select>
    `;
    barriosSelectContainer.innerHTML = barriosSelect;
  } else if (event.target.value === "Zona Norte") {
    const barrios = ["Escobar", "Pacheco", "Vicente lopez"];
    const barriosSelect = `
      <label for="barrios-select">Selecciona tu barrio:</label>
      <select id="barrios-select" name="barrios-select">
        ${barrios
          .map((barrio) => `<option value="${barrio}">${barrio}</option>`)
          .join("")}
      </select>
    `;
    barriosSelectContainer.innerHTML = barriosSelect;
  } else if (event.target.value === "Zona oeste") {
    const barrios = ["Moron", "Castellar", "Ciudadela"];
    const barriosSelect = `
      <label for="barrios-select">Selecciona tu barrio:</label>
      <select id="barrios-select" name="barrios-select">
        ${barrios
          .map((barrio) => `<option value="${barrio}">${barrio}</option>`)
          .join("")}
      </select>
    `;
    barriosSelectContainer.innerHTML = barriosSelect;
  } else {
    barriosSelectContainer.innerHTML = "";
  }
});
