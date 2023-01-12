var map = L.map('map').setView([20.6068, -100.3965], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([20.6068, -100.3965]).addTo(map)
.bindPopup("<b>Biblioteca Central</b><br>I am a popup.")
.openPopup();

    

