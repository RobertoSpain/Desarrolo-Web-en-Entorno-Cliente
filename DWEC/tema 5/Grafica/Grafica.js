google.charts.load('current', {'packages':['corechart','bar','geochart']});

// Datos de representación en el Congreso de los Diputados por partidos
var congressoData = [
    ['Partido','Escaños'],
    ['PSOE',120],
    ['PP',89],
    ['VOX',52],
    ['ERC',13],
    ['Junts',6],
    ['Podemos',35]
];

// Datos de ranking de países más turísticos 
var turismoData = [
    ['País', 'Número de visitantes (millones)'],
    ['France', 89.4],  
    ['Spain', 83.7],  
    ['United States', 79.6],
    ['China', 58.3],
    ['Italy', 58.3],  
    ['Mexico', 45.0],  
    ['Turkey', 44.7],  
    ['Thailand', 39.8]  
];

function drawBarChart() {
    var data = google.visualization.arrayToDataTable(congressoData);
    var options = {
        title: 'Representación en el Congreso de los Diputados por partidos',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Número de escaños',
            minValue: 0
        },
        vAxis: {
            title: 'Partido'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('barchart'));
    chart.draw(data, options);

    // Actualizar los datos después de 10 segundos.
    setTimeout(function() {
        congressoData = [
            ['Partido', 'Escaños'],
            ['PSOE', 118],
            ['PP', 91],
            ['VOX', 55],
            ['ERC', 15],
            ['Junts', 7],
            ['Podemos', 34]
        ];
        drawBarChart(); // Redibujar el gráfico con los nuevos datos
    }, 10000);
}

function drawPieChart() {
    var data = google.visualization.arrayToDataTable(congressoData);
    var options = {
        title: 'Distribución de escaños en el Congreso de los Diputados'
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function drawGeoChart() {
    var data = google.visualization.arrayToDataTable(turismoData);
    var options = {
        colorAxis: {colors: ['#e0e0e0', '#0d5b96']},
        backgroundColor: '#f0f0f0',
        displayMode: 'regions',  
        region: 'world', 
        resolution: 'countries',  
        tooltip: {isHtml: true}  
    };
    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));
    chart.draw(data, options);
}

// Dibujar los gráficos cuando Google Charts esté listo
google.charts.setOnLoadCallback(function() {
    drawBarChart(); 
    drawPieChart(); 
    drawGeoChart(); 
});
