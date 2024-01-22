var map = L.map("map").setView([35.681236, 139.767125], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// リモートCSVファイルから地点を読み込む
fetch("/src/data/test.csv")
  .then((response) => response.text())
  .then((text) => {
    var data = text.split("\n").map(function (line) {
      return line.split(",");
    });

    data.forEach(function (row) {
      if (row.length >= 3) {
        var lat = parseFloat(row[0]);
        var lng = parseFloat(row[1]);
        var info = row[2];
        addMarker(lat, lng, info);
      }
    });
  });

function addMarker(lat, lng, info) {
  var marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(info);
}
