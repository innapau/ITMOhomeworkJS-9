function calcY(x) {
    let y;
    if (x >= 1) {
        y = 5 / x;
    } else if (x < 1) {
        y = x * x - 4 * x
    }
    return y;
};

let line = {
    x: [],
    y: [],
    type: 'lines',
    marker: {
        color: 'rgb(144, 61, 255)',
        size: 12
    }
};

let data = [line];

for (let i = -5; i <= 5; i+= 0.01 ) {
    line.x.push(i);
    line.y.push(calcY(i));
};

let layout = {
    title: 'График функции y = f(x)',
    xaxis: {
        title: 'X'
    },
    yaxis: {
        title: 'Y'
    }
};

Plotly.newPlot('chart-container', data, layout);
