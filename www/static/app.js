const ctx = document.getElementById('positionChart').getContext('2d');
const positionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Timestamps or sequence of data points
        datasets: [{
            label: 'X Position',
            data: [],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255,99,132,0.2)',
            fill: true,
        }, {
            label: 'Z Position',
            data: [],
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54,162,235,0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Position'
                }
            }
        },
    }
});

// Function to fetch and update chart data
function updateChart() {
    fetch('/get_position_data')
        .then(response => response.json())
        .then(data => {
            const timestamp = new Date().toLocaleTimeString(); // or get from data.timestamp
            const xPos = data.x || null;
            const zPos = data.z || null;

            // Update page text
            document.getElementById('x-position').textContent = xPos !== null ? xPos : 'Null';
            document.getElementById('z-position').textContent = zPos !== null ? zPos : 'Null';

            // Update chart
            positionChart.data.labels.push(timestamp);
            positionChart.data.datasets[0].data.push(xPos);
            positionChart.data.datasets[1].data.push(zPos);

            if (positionChart.data.labels.length > 20) {
                positionChart.data.labels.shift(); // Keep the last 20 data points
                positionChart.data.datasets[0].data.shift();
                positionChart.data.datasets[1].data.shift();
            }
            positionChart.update();
        });
}

// Update every second
setInterval(updateChart, 1000);

