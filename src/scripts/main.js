import * as functions from './modules/functions.js';
import * as libs from './modules/libs.js';

const ctx1 = document.getElementById('chart01').getContext('2d');
const Chart01 = new libs.Chart(ctx1, {
  type: 'line',
    data: {
      labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      datasets: [{
        fill: 'origin', // 0: fill to 'origin'
        label: 'Last week',
        data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
        backgroundColor: [
          'rgba(161, 198, 247, 1)',
        ],
        borderColor: [
          'rgb(47, 128, 237)',
        ],
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('chart02').getContext('2d');
const Chart02 = new libs.Chart(ctx2, {
  type: 'bar',
    data: {
      labels: ['rice', 'yam', 'tomato', 'potato', 'beans', 'maize', 'oil'],
      datasets: [{
        label: 'food Items',
        data: [300, 400, 200, 500, 800, 900, 200],
        backgroundColor: [
          'rgba(161, 198, 247, .8)',
          'rgba(255, 99, 132, .8)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 86, .8)',
          'rgba(75, 192, 192, .8)',
          'rgba(153, 102, 255, .8)',
          'rgba(255, 159, 64, .8)',
        ],
        borderColor: [
          'rgb(47, 128, 237)'
        ],
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('chart03').getContext('2d');
const Chart03 = new libs.Chart(ctx3, {
  type: 'pie',
    data: {
      labels: ['rice', 'yam', 'tomato', 'potato', 'beans', 'maize', 'oil'],
      datasets: [{
        label: 'food Items',
        data: [30, 40, 20, 50, 80, 90, 20],
        backgroundColor: [
          'rgba(161, 198, 247, .8)',
          'rgba(255, 99, 132, .8)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 86, .8)',
          'rgba(75, 192, 192, .8)',
          'rgba(153, 102, 255, .8)',
          'rgba(255, 159, 64, .8)',
        ],
        borderColor: [
          'rgba(161, 198, 247, .8)',
        ],
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx4 = document.getElementById('chart04').getContext('2d');
const Chart04 = new libs.Chart(ctx4, {
  type: 'doughnut',
    data: {
      labels: ['rice', 'yam', 'tomato', 'potato', 'beans', 'maize', 'oil'],
      datasets: [{
        label: 'food Items',
        data: [30, 40, 20, 50, 80, 90, 20],
        backgroundColor: [
          'rgba(161, 198, 247, .8)',
          'rgba(255, 99, 132, .8)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 86, .8)',
          'rgba(75, 192, 192, .8)',
          'rgba(153, 102, 255, .8)',
          'rgba(255, 159, 64, .8)',
        ],
        borderColor: [
          'rgba(161, 198, 247, .8)',
        ],
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

functions.isWebp();