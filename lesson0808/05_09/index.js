// var canvas = document.getElementById('canvas')
// var ctx=canvas.getContext('2d')
// // ctx.fillStyle='green'
// // ctx.fillRect(102,10,100,100)
// ctx.beginPath()
// ctx.moveTo(75,50)
// ctx.lineTo(100,75)
// ctx.lineTo(100,25)
// ctx.lineTo(75,50)
// ctx.stroke()
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);