const barchartjs = {
    morrisbar: {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            },
            gridTextSize: 11,
            hideHover: 'auto',
            resize: true
        },
        colors: ['#ff9b44', '#fc6075'],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'category',
            categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
        },
    },
    series: [{
        data: [100, 75, 50, 75, 50, 75, 100],
    }, {
        data: [90, 65, 40, 65, 40, 65, 90],
    }],
    datasets: [
        {
            label: "Total Income",
        },
        {
            label: "Total outcome",
        },
    ],
};


const lineChart = {
    morrisbar: {
        chart: {
            height: 350,
            type: "line",
            toolbar: {
                show: false,
            },
            grid: {
                show: true,
            },
        },
        xaxis: {
            categories: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
        },
        colors: ["#ff9b44", "#fc6075"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
    },
    series: [{
        name: "Total Sales",
        data: [50, 75, 50, 75, 50, 75, 100],
    },
    {
        name: "Total Revenue",
        data: [90, 65, 40, 65, 40, 65, 50],
    },
    ],
};

export {
    barchartjs,
    lineChart
}


