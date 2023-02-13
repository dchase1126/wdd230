const s = 1;
document.getElementById('wind_speed').innerText = s

const t = 32;
document.getElementById('temp').innerText = t
if (t <= 50 && s > 3.0) {
    const windchill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** .016));
    document.getElementById("wind_chill").innerText = windchill.toFixed(2)
}
else {
    document.getElementById("wind_chill").innerText = "N/A"
}



