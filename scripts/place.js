document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Weather calculation
const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("windspeed").textContent);
const windchillSpan = document.getElementById("windchill");

function calculateWindChill(t, s) {
  // Formula for wind chill in Fahrenheit
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Check conditions before calculating
if (temp <= 50 && wind > 3) {
  windchillSpan.textContent = calculateWindChill(temp, wind) + " °F";
} else {
  windchillSpan.textContent = "N/A";
}