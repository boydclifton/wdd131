const products = [
  { id: "fc-1888", name: "Flux Capacitor", averageRating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averageRating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averageRating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averageRating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averageRating: 5.0 }
];


const selectElement = document.getElementById("productName");


products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});


const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();


const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;