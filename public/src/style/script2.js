// script.js
var map = L.map("map").setView([35.681236, 139.767125], 13); // 初期表示位置を設定
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// CSVファイルを読み込んで地点を追加する
function loadCSV(file) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var text = e.target.result;
    var data = text.split("\n").map(function (line) {
      return line.split(",");
    });

    // CSVの各行に対してマーカーを追加
    data.forEach(function (row) {
      if (row.length >= 3) {
        var lat = parseFloat(row[0]);
        var lng = parseFloat(row[1]);
        var info = row[2];
        addMarker(lat, lng, info);
      }
    });
  };
  reader.readAsText(file);
}

// マーカーを追加する関数
function addMarker(lat, lng, info) {
  var marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(info);
}

// 例示のためのCSVファイルのアップロード処理
var input = document.createElement("input");
input.type = "file";
input.onchange = (e) => {
  var file = e.target.files[0];
  loadCSV(file);
};
document.body.appendChild(input);
