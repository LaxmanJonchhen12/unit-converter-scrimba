
let inputValue,meter,feet,liters,gallons,kilograms,pounds;


let input = document.getElementById("conv-input");
let convertBtn = document.getElementById("convert");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let weight = document.getElementById("weight");


convertBtn.addEventListener("click", convert);
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  	convert();
  }
});


function convert() {
		inputValue =  Number(input.value);
		feet  = inputValue * 3.281;
		feet = feet.toFixed(3);
		meter = inputValue / 3.281;
		meter = meter.toFixed(3)
		length.innerHTML = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meter`;

		gallons = inputValue * 0.264;
		gallons = gallons.toFixed(3)
		liters = inputValue / 0.264;
		liters = liters.toFixed(3)
		volume.innerHTML = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;


		pounds = inputValue * 2.204;
		pounds = pounds.toFixed(3)
		kilograms = inputValue / 2.204; 
		kilograms = kilograms.toFixed(3)
		weight.innerHTML = `${inputValue} Kilos = ${pounds} pounds | ${inputValue} pounds = ${kilograms} kilos`;

		// input.value=0;
		// input.textContent="";

}