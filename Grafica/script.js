// Lista de países aleatorios

const estados = [
    "CDMX","Cancun","Oaxaca","Yucatan","Tlaxcala","Guadalajara","Monterey","Puebla"
];

// Función para generar clima
function generarDatosClima() {
    const temperaturas = [];
    const humedades = [];
    const condiciones = ["Soleado", "Nublado", "Lluvioso", "Tormenta", "Niebla"];
    const labels = [];

    // Genera los datos de un dia completo de la temperatura
    for (let i = 0; i < 24; i++) {
        const temperatura = (Math.random() * 40).toFixed(1); // Temperatura entre 0°C y 30°C
        const humedad = Math.floor(Math.random() * 100); // Humedad entre 0% y 100%
        const condicion = condiciones[Math.floor(Math.random() * condiciones.length)];

        temperaturas.push(temperatura);
        humedades.push(humedad);
        labels.push(`Hora(s) ${i + 1}`);
    }

    // Seleccionar un estado aleatorio
    const estado = estados[Math.floor(Math.random() * estados.length)];

    return { temperaturas, humedades, condiciones, labels, estado };
}

// Variable global para almacenar la gráfica
let weatherChart;

// Función para actualizar el clima en tiempo real
function actualizarClima() {
    const weatherInfo = document.getElementById('weather-info');
    const ctx = document.getElementById('weatherChart').getContext('2d');

    // Generar nuevos datos aleatorios
    const { temperaturas, humedades, condiciones, labels, estado } = generarDatosClima();

    // Mostrar los datos en la página
    weatherInfo.innerHTML = `
        <h2>Condiciones actuales en ${estado}:</h2>
        <p>Temperatura: ${temperaturas[temperaturas.length - 1]}°C</p>
        <p>Humedad: ${humedades[humedades.length - 1]}%</p>
        <p>Condición: ${condiciones[Math.floor(Math.random() * condiciones.length)]}</p>
    `;

    // Crear o actualizar la gráfica
    if (weatherChart) {
        // Si la gráfica ya existe, actualiza los datos
        weatherChart.data.labels = labels;
        weatherChart.data.datasets[0].data = temperaturas;
        weatherChart.update();
    } else {
        // Si la gráfica no existe, créala
        weatherChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperatura (°C)',
                    data: temperaturas,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                responsive: true, // Hacer la gráfica responsive
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Hora'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Temperatura (°C)'
                        }
                    }
                }
            }
        });
    }
}

// Actualizar el clima cada 5 segundos (simula tiempo real)
setInterval(actualizarClima, 5000);

// Mostrar datos iniciales al cargar la página
actualizarClima();