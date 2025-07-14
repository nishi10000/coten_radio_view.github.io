// ダミーデータ
const timelineData = {
    "title": {
        "text": {
            "headline": "コテンラジオ年表",
            "text": "<p>テスト用の年表データです。</p>"
        }
    },
    "events": [
        {
            "start_date": {
                "year": "2023",
                "month": "10",
                "day": "26"
            },
            "text": {
                "headline": "テストイベント1",
                "text": "<p>これは最初のテストイベントです。</p>"
            },
            "location": {
                "lat": 34.6937,
                "lon": 135.5023
            }
        },
        {
            "start_date": {
                "year": "2024",
                "month": "1",
                "day": "1"
            },
            "text": {
                "headline": "テストイベント2",
                "text": "<p>これは2番目のテストイベントです。</p>"
            },
            "location": {
                "lat": 40.7128,
                "lon": -74.0060
            }
        }
    ]
};

// Leaflet.jsの初期化
const map = L.map('map-area').setView([35.6895, 139.6917], 5); // 東京の座標を中心

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

function updateMap(event) {
    if (marker) {
        map.removeLayer(marker);
    }

    if (event.location) {
        const { lat, lon } = event.location;
        marker = L.marker([lat, lon]).addTo(map)
            .bindPopup(event.text.headline)
            .openPopup();
        map.setView([lat, lon], 10);
    }
}

// TimelineJSの初期化
const timeline = new TL.Timeline('timeline-area', timelineData);

timeline.on('change', (data) => {
    const event = timelineData.events[data.index];
    updateMap(event);
});

// 初期表示
updateMap(timelineData.events[0]);