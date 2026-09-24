// Dynamic Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

// Static weather values 
const temp = 8; // °C
const windSpeed = 10; // km/h

// Wind Chill calculation function (Metric formula)
const calculateWindChill = (t, v) =>
  (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(1);

// Viable condition check: temp <= 10 °C and wind speed > 4.8 km/h
let chillOutput = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
  chillOutput = `${calculateWindChill(temp, windSpeed)} °C`;
}

// Display result
document.getElementById("chill").textContent = chillOutput;
