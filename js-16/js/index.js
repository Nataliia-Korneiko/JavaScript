const ctx = document.querySelector(".js-chart").getContext("2d");
const GLOBAL_MEAN_TEMPERATURE = 14;

// function fetchData() {
//   return fetch("../ZonAnn.Ts+dSST.csv")
//     .then((response) => response.text())
//     .then((data) => {
//       const parseData = Papa.parse(data, { header: true }).data;

//       // const years = parseData.map((entry) => entry.Year);
//       // const temps = parseData.map((entry) => Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
//       // console.log(temps);
//       // console.log(parseData);

//       const mappedData = parseData.reduce(
//         (acc, entry) => {
//           acc.years.push(entry.Year);
//           acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);

//           return acc;
//         },
//         { years: [], temps: [] }
//       );
//       // console.log(mappedData);

//       new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: mappedData.years,
//           datasets: [
//             {
//               label: "# Global average temperature",
//               data: mappedData.temps,
//               backgroundColor: "rgba(255, 99, 132, 0.2)",
//               borderColor: "rgba(255, 99, 132, 1)",
//               borderWidth: 1,
//               // fill: true,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               ticks: {
//                 // Include a dollar sign in the ticks
//                 callback(value, index, values) {
//                   return value + "˚C";
//                 },
//               },
//             },
//           },
//         },
//       });
//     });
// }

// fetchData();

// -----------------------
fetchData()
  .then(parseData)
  .then(getLabelsAndData)
  .then(({ years, temps }) => drawChart(years, temps));

function fetchData() {
  return fetch("../ZonAnn.Ts+dSST.csv").then((response) => response.text());
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data;
}

function getLabelsAndData(data) {
  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);

      return acc;
    },
    { years: [], temps: [] }
  );
}

function drawChart(years, temps) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "# Global average temperature",
          data: temps,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          // fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback(value) {
              return value + "˚C";
            },
          },
        },
      },
    },
  });
}
