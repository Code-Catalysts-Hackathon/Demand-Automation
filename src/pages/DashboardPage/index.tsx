import React from 'react'
import withLayout from '../../layouts/withLayout';
import DrillDownBarChart from '../../components/Charts/DrillDownLineChart';
import PieSemiCircleChart from '../../components/Charts/PieSemiCircleChart';
import DrillDownPieChart from '../../components/Charts/DrillDownPieChart';

function DashboardPage() {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-3 text-3xl font-ltc-m text-primary-dark'>Dashboard Page</div>
      <div className=''>
        <DrillDownPieChart />
      </div>
      <div>
        <DrillDownBarChart />
      </div>
      {/* <div>
        <PieSemiCircleChart />
      </div> */}
    </div>
  )
}

export default withLayout(DashboardPage,'auth');