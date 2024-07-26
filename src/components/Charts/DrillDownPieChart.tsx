import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const DrillDownPieChart = () => {
  const options = ({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Business Units Allocation',
      align: 'left'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
  
    accessibility: {
      announceNewData: {
        enabled: true
      },
      point: {
        valueSuffix: '%'
      }
    },
  
    plotOptions: {
      series: {
        borderRadius: 5,
        dataLabels: [{
          enabled: true,
          distance: 15,
          format: '{point.name}'
        }, {
          enabled: true,
          distance: '-30%',
          filter: {
            property: 'percentage',
            operator: '>',
            value: 5
          },
          format: '{point.y:.1f}%',
          style: {
            fontSize: '0.9em',
            textOutline: 'none'
          }
        }]
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
        '<b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: 'Business Units',
        colorByPoint: true,
        data: [
          {
            name: 'CL',
            y: 40,
            drilldown: 'Consumer_Lending'
          },
          {
            name: 'CR',
            y: 25,
            drilldown: 'Consumer Relationship'
          },
          {
            name: 'CML',
            y: 15,
            drilldown: 'Commercial Lending'
          },
          {
            name: 'DML',
            y: 20,
            drilldown: 'DML'
          }
        ]
      }
    ],
    drilldown: {
      series: []
    }
  });

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      ;
    </div>
  );
};

export default DrillDownPieChart;