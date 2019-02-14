// Our labels along the x-axis
Chart.defaults.global.defaultFontStyle = 'Bold'

// Bar chart showing the caffeine concentration by group of drinks
new Chart(document.getElementById("bar-chart-caffeine-concentration-by-group"), {
    type: 'bar',
    data: {
      labels: ['Sodas', 'Energy Drinks', 'Pod Coffees', 'Fast food Coffees', 'Iced Teas', 'Tea Infusions'],
      datasets: [
        {
          label: "Concentration",
          backgroundColor: ["#99ccff", "#9999ff","#996633","#999966","#336600","#339966"],
          data: [110.666, 338.3, 855.725, 332.22, 111.1, 211.9]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Caffeine concentration (mg/l)'
      }
    }
});


// Bar chart showing the caffeine mass contained in each drink (according its usual served way)
new Chart(document.getElementById("bar-chart-traditional-caffeine-concentration-by-drink"), {
    type: 'bar',
    data: {
      labels: ['Coca Cola \n (354ml can)', 'Red Bull \n (236ml can)', 'Monster \n (473ml can)', 'McCafe Mocha Small \n (473ml)', 
	  'Starbucks Caffe Mocha Grande \n (473ml)', 'Pod Espresso Intenso \n (44ml)', 'Pure Leaf Iced Tea \n (547ml bottle)', 
	  'Lipton Black Tea Infusion \n (236ml cup)', 'Lipton Green Tea Infusion  \n (236ml cup)', 'Barq\'s Root Beer  \n (354ml can)'],
      datasets: [
        {
          label: "Mass",
          backgroundColor: ["#b30000", "#141452","#008000","#ffd633","#003300","#663300","#336600","#ff8c1a", "#0d0d0d", "#4d4d00", "#800040"],
          data: [33.9, 80, 160, 167, 175, 115, 69, 55, 45, 22]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Caffeine Mass (mg)'
      }
    },
	plugins: [{
    beforeInit: function (chart) {
      chart.data.labels.forEach(function (e, i, a) {
        if (/\n/.test(e)) {
          a[i] = e.split(/\n/)
        }
      })
    }
  }]
});

// Bar chart showing the best caffeine concentration/price rate by group of drinks
new Chart(document.getElementById("bar-chart-coffee-dollar-rate-by-group"), {
    type: 'bar',
    data: {
      labels: ['Sodas', 'Energy Drinks', 'Pod Coffees', 'Fast food Coffees', 'Iced Teas', 'Tea Infusions'],
      datasets: [
        {
          label: "Mass",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [93.86, 81.98, 126.83, 39.21, 99.4, 1067.45]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Caffeine mass (mg) for 1$'
      }
    }
});


