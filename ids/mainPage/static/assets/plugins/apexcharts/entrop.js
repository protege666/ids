function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
let entrop = [];
let j = 0;
let sum_entrop = 0;
while (j < 12) {
  let buf = getRandomFloat(2.5, 4.0).toFixed(4);
  sum_entrop += Number(buf);
  entrop.push(buf);
  j++;
}
let b = sum_entrop / 12;
var globalEnt = {
  res: Number(b.toFixed(4)),
};
var options = {
  series: [
    {
      name: "Энтропия",
      data: entrop,
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
  },
};

var chart = new ApexCharts(document.querySelector("#bar"), options);
chart.render();
