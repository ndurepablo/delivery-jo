import {createSelectHTML, createSelectOptions, createDatePickerInput, initializeDatePicker, removeElementInnerId} from './helpers/helpers.js';
import {capitalHoods, surHoods} from './helpers/hoods.js'

const selectLocation = document.querySelector("#select-location");
const barriosSelectContainer = document.querySelector("#barrios-select-container");
const barriosDiv = document.querySelector("#barrios-container")
const datePickerDiv = document.querySelector("#date-picker-container")
const capitalRadio = document.getElementById("capital");
const countryRadio = document.getElementById("country");
const barriosSelect = document.getElementById("#barrios-select");
const deliveryCostDiv = document.getElementById("delivery-cost");
const input = document.getElementById("order-cost-value");
let subTotalElement = document.querySelector("#order_review > table > tfoot > tr.cart-subtotal > td > span");



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
                removeElementInnerId("#date-picker-container");
                removeElementInnerId("#delivery-cost");
                for (let hood in capitalHoods) {
                    const hoodObj = capitalHoods[hood];
                    const barrios = Object.values(capitalHoods).map(hoodObj => hoodObj.name);           
                    barriosDiv.innerHTML = createSelectHTML(barrios)

                    // Agregar evento change para cada opción del select generado
                    barriosSelectContainer.addEventListener('change', (event) => {
                        const selectedOption = event.target.value;
                        const selectedHood = capitalHoods[event.target.selectedIndex];
                        
                        if (selectedOption === selectedHood.name) {
                            removeElementInnerId("#date-picker-container");
                            removeElementInnerId("#delivery-cost");
                            
                            // Agrega el código de jQuery y el datepicker
                            const datepickerInput = createDatePickerInput(selectedHood.id, datePickerDiv);
                            const calculateDisabledDate = selectedHood.calculateDisabledDate;
                            const rangeDays = selectedHood.rangeDays;
                            const days = selectedHood.days;
                            const shippingCost = selectedHood.shippingCost;
                            const freeShippingThreshold = selectedHood.freeShippingThreshold;
                            let orderCost = input.value;
                            let calculateShippingCost = orderCost > freeShippingThreshold ? 0 : shippingCost;

                            // Calcula el costo de envio con el costo que viene en la sesion
                            const deliveryCostNode = document.createElement("span");
                            deliveryCostNode.id = 'deliveryCostNode'
                            const msgCostNode = document.createElement("span");
                            msgCostNode.textContent = "Costo de envío: ";
                            deliveryCostNode.textContent = calculateShippingCost;
                            deliveryCostDiv.appendChild(msgCostNode);
                            deliveryCostDiv.appendChild(deliveryCostNode);

                            // Si el costo cambia, actualiza el costo de envio
                            input.addEventListener("input", () => {
                                let orderCost = parseFloat(input.value);
                                let calculateShippingCost = orderCost > freeShippingThreshold ? 0 : shippingCost;
                                deliveryCostNode.textContent = calculateShippingCost;
                              });


                            initializeDatePicker(datepickerInput, calculateDisabledDate, rangeDays, days);
                        }
                    });
                }
            }
            else if (selectedOption == "Zona sur"){
                removeElementInnerId("#date-picker-container");
                removeElementInnerId("#delivery-cost");
                for (let hood in surHoods) {
                    const hoodObj = surHoods[hood];
                    const barrios = Object.values(surHoods).map(hoodObj => hoodObj.name);           
                    barriosDiv.innerHTML = createSelectHTML(barrios)

                    // Agregar evento change para cada opción del select generado
                    barriosSelectContainer.addEventListener('change', (event) => {
                        const selectedOption = event.target.value;
                        const selectedHood = surHoods[event.target.selectedIndex];
                        
                        if (selectedOption === selectedHood.name) {
                            removeElementInnerId("#date-picker-container");
                            removeElementInnerId("#delivery-cost");
                            
                            // Agrega el código de jQuery y el datepicker
                            const datepickerInput = createDatePickerInput(selectedHood.id, datePickerDiv);
                            const calculateDisabledDate = selectedHood.calculateDisabledDate;
                            const rangeDays = selectedHood.rangeDays;
                            const days = selectedHood.days;
                            const shippingCost = selectedHood.shippingCost;
                            const freeShippingThreshold = selectedHood.freeShippingThreshold;
                            const calculateShippingCost = orderCost > freeShippingThreshold ? 0 : shippingCost;

                            const deliveryCostNode = document.createElement("span");
                            const msgCostNode = document.createElement("span");
                            msgCostNode.textContent = "Costo de envío: ";
                            deliveryCostNode.textContent = calculateShippingCost;
                            deliveryCostDiv.appendChild(msgCostNode);
                            deliveryCostDiv.appendChild(deliveryCostNode);


                            initializeDatePicker(datepickerInput, calculateDisabledDate, rangeDays, days);
                        }
                    });
                }
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

        options = ["Country Zona sur", "Country Zona Norte", "Country Zona oeste", "Country Zona suroeste"];
        selectLocation.innerHTML = createSelectOptions(options);
    }
}

capitalRadio.addEventListener("change", handleChange);
countryRadio.addEventListener("change", handleChange);

