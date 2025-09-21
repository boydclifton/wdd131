const currentYear = document.querySelector("#currentyear");
const today= new Date();
currentYear.innerHTML = today.getFullYear();

const lastModifiedDate = document.lastModified;
lastModified.innerHTML = lastModifiedDate


// const temp = parseFloat(document.getElementById("temperature").textContent);
// const wind = parseFloat(document.getElementById("windspeed").textContent);
// const windchillSpan = document.getElementById("windchill");

// function calculateWindChill(t, s) {
 
//   return (
//     35.74 +
//     0.6215 * t -
//     35.75 * Math.pow(s, 0.16) +
//     0.4275 * t * Math.pow(s, 0.16)
//   ).toFixed(1);
// }


// if (temp <= 50 && wind > 3) {
//   windchillSpan.textContent = calculateWindChill(temp, wind) + " °F";
// } else {
//   windchillSpan.textContent = "N/A";
// }

const temp = parseFloat(document.querySelector("#temperature").textContent);
const wind = parseFloat(document.querySelector("#windspeed").textContent);
const windChill = document.querySelector("#windchill");

function calculateWindChill(tempF, speedMph) {
  return (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)).toFixed(1);
}

if (temp <= 50 && wind > 3) {
  windChill.textContent = calculateWindChill(temp, wind) + " °F";

}
  else {
    windChill.textContent = "N/A";
  }