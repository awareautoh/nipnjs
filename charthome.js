Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChartS");
//debugger;
var data = {
  labels: ["Vientiane Capital","Phongsaly","Luangnamtha","Oudomxay","Bokeo","Luangprabang","Huaphanh","Xayaboury","Xiengkhuang","Vientiane","Borikhamxay","Khammuane","Savannakhet","Saravane","Sekong","Champasack","Attapeu","Xaysomboon"],
  datasets: [{
    data: [13.8,54,34.1,42.7,34.7,41.3,40.7,25.1,46.3,33,29.9,29.7,28.4,42.9,49.9,24.6,29.6,44],
    backgroundColor: "#46B4EB"
  }]
}
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    "hover": {
      "animationDuration": 0
    },
    "animation": {
      "duration": 1,
      "onComplete": function() {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;

        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function(dataset, i) {// this function add data to the end of graph
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            ctx.fillStyle = " #7f8383";
            ctx.font = "normal 9px verdana, sans-serif";
            ctx.fillText(data, bar._model.x, bar._model.y - 2);
          });
        });
      }
    },
    legend: {
      "display": false
    },
    tooltips: {
      "enabled": false
    },
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        },
        ticks: {
          //max: Math.max(...data.datasets[0].data) + 10,
          display: false,
          beginAtZero: true
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90
        }
      }]
    }
  }
});

                     //console.log(updateChartbar1);
 $( document ).ready(function() {
    function slide(){

                    var li=$('ul#latest-news-slider li.active');

                    if(li.next().length>0 )
                    {
                        li.removeClass('active', 3000, "easeInBack");
                        li.next().addClass('active', 3000, "easeInBack");

                    }else if(li.prev().length>0){
                       li.removeClass('active', 3000, "easeInBack");
                       $('ul#latest-news-slider li').first('li').addClass('active', 3000, "easeInBack");
                    }else
                    {
                        return;
                    }
                }
                
                $('.next').click(function(){
                 
                    var li=$('ul#latest-news-slider li.active');

                    if(li.next().length>0 )
                    {
                        li.removeClass('active', 100, "easeInBack");
                        li.next().addClass('active', 100, "easeInBack");

                    }else {
                       li.removeClass('active', 100, "easeInBack");
                       $('ul#latest-news-slider li').first('li').addClass('active', 100, "easeInBack");
                    }
                });

                $('.prev').click(function(){
                    
                    var li=$('ul#latest-news-slider li.active');

                    if(li.prev().length>0 && li.prev().is("li"))
                    {
                        li.removeClass('active', 100, "easeInBack");
                        li.prev().addClass('active', 100, "easeInBack");

                    }else {
                       
                    }
                });
                
});
