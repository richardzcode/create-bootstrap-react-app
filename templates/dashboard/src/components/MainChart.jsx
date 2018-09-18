import React, { Component } from 'react';
import { BCanvas } from 'bootstrap-4-react';

function drawChart() {
  const ctx = window.document.getElementById('myChart');
  new window.Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  });
}

export default class MainChart extends Component {
  componentDidMount() {
    drawChart();
  }

  render() {
    return (
      <BCanvas my="4" w="100" id="myChart" width="900" height="380"></BCanvas>
    )
  }
}
