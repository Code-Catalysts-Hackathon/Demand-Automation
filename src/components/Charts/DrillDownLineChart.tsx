import React,{useState} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const DrillDownBarChart = () => {
  const [options, setOptions] = useState({
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Demands Allocation'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'No of Demands'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Monthly Demands Allocation',
        data: [
            10, 20, 40, 60, 100, 10, 25, 30, 25, 60,
            45, 10
        ]
    }]
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

export default DrillDownBarChart;