const map = L.map('map').setView([50.8503, 4.3517], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const customIcon = L.icon({
  iconUrl: 'assets/images/Logo.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

L.marker([50.8503, 4.3517], { icon: customIcon })
  .addTo(map)
  .bindPopup('Head Office');

L.marker([50.845, 4.357], { icon: customIcon })
  .addTo(map)
  .bindPopup('Shop');
