function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let packet = [];
let i = 0;
let count = 0;
while (i < 12) {
  let buf = randomInteger(100, 1000);
  count += buf;
  packet.push(buf);
  i++;
}
let pie_pack = [];
if (packet[0] > 500) {
  pie_pack.push(packet[0]);
}
if (packet[1] > 500) {
  pie_pack.push(packet[1]);
}
if (packet[2] > 500) {
  pie_pack.push(packet[2]);
}
if (packet[11] > 500) {
  pie_pack.push(packet[11]);
}
if (pie_pack.length == 0) {
  var ver = 0;
}
if (pie_pack.length > 0) {
  var sum_pie = 0;
  for (j = 0; j < pie_pack.length; j++) {
    sum_pie += pie_pack[j];
  }
  var div_sum = sum_pie / 12;
  var ver = Math.round(sum_pie) / count;
}
var globalVar = {
  value: count,
};
var ppp = {
  rezult: Number(Math.round(ver * 100)),
};

var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "line",
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "Количество пакетов",
      data: packet,
    },
  ],
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

var chart = new ApexCharts(document.querySelector("#pocketgraph"), options);

chart.render();
