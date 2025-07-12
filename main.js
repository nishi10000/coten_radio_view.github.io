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
            }
        }
    ]
};

// TimelineJSの初期化
window.addEventListener('load', function() {
    new TL.Timeline('timeline-area', timelineData);
});

// Leaflet.jsの初期化
const map = L.map('map-area').setView([35.6895, 139.6917], 5); // 東京の座標を中心

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([35.6895, 139.6917]).addTo(map)
    .bindPopup('東京')
    .openPopup();
