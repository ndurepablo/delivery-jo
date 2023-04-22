import {createSelectHTML, createSelectOptions, createDatePickerInput, initializeDatePicker, removeElementInnerId} from '../helpers/helpers.js';

const selectLocation = document.querySelector("#select-location");
const barriosSelectContainer = document.querySelector("#barrios-select-container");
const barriosDiv = document.querySelector("#barrios-container")
const datePickerDiv = document.querySelector("#date-picker-container")
const capitalRadio = document.getElementById("capital");
const countryRadio = document.getElementById("country");
const barriosSelect = document.getElementById("#barrios-select");


const handleChange = (e) => {
    let options = [];

    if (capitalRadio.checked) {
        removeElementInnerId("#barrios-container");
        removeElementInnerId("#date-picker-container");

        options = ["Capital Federal", "Zona sur", "Zona Norte", "Zona oeste"];
        selectLocation.innerHTML = createSelectOptions(options);
        
        // Agregar un manejador de eventos onChange al elemento selectLocation
        selectLocation.addEventListener('change', (event) => {
            const selectedOption = event.target.value;
            if (selectedOption == "Capital Federal") {
                const barrios = ["Palermo", "Caballito", "Almagro"];            
                barriosDiv.innerHTML = createSelectHTML(barrios)

                barriosSelectContainer.addEventListener('change', (event) => {
                    const selectedOption = event.target.value;
                    if (selectedOption == "Palermo") {
                        removeElementInnerId("#date-picker-container");

                        // Agrega el código de jQuery y el datepicker
                        const datepickerInputPalermo = createDatePickerInput("datepicker-palermo", datePickerDiv);
                        const calculateDisabledDate = 1;
                        const rangeDays = 5;
                        const days = [1, 3, 5];

                        initializeDatePicker(datepickerInputPalermo, calculateDisabledDate, rangeDays, days);
                    }
                });
            }
            else if (selectedOption == "Zona sur"){
                const barrios = ["Wilde", "Avellaneda", "Quilmes"];            
                barriosDiv.innerHTML = createSelectHTML(barrios)
            }
            else if (selectedOption == "Zona Norte"){
                const barrios = ["Escobar", "Pacheco", "Vicente López"];            
                barriosDiv.innerHTML = createSelectHTML(barrios)
            }
            else if (selectedOption == "Zona oeste"){
                const barrios = ["Morón", "Ituzaingó", "Ramos Mejía"];            
                barriosDiv.innerHTML = createSelectHTML(barrios)
            }
      });
    } 
    else if (countryRadio.checked) {
        removeElementInnerId("#barrios-container");
        removeElementInnerId("#date-picker-container");

        options = ["Zona sur", "Zona Norte", "Zona oeste", "Zona suroeste"];
        selectLocation.innerHTML = createSelectOptions(options);
    }
}

capitalRadio.addEventListener("change", handleChange);
countryRadio.addEventListener("change", handleChange);



