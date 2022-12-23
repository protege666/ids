var abc = 100 - ppp.rezult;
var datas = [ppp.rezult, abc];
// var options = {
//   series: datas,
//   chart: {
//     type: "donut",
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };
var options = {
  chart: {
    width: 400,
    type: "donut",
  },
  colors: ["#FF0000", "#0084ff"],
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Rubik",
            color: "#dfsda",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    },
  },
  series: datas,
  tooltip: {
    enabled: true,
    y: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  legend: {
    show: false,
  },
};

var chartt = new ApexCharts(document.querySelector("#pie"), options);
chartt.render();
