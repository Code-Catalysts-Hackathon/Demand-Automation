import React from 'react'
import withLayout from '../../layouts/withLayout';
import DrillDownPieChart from '../../components/Charts/DrillDownPieChart';
import DrillDownBarChart from '../../components/Charts/DrillDownBarChart';
import PieSemiCircleChart from '../../components/Charts/PieSemiCircleChart';

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
      <div>
        <PieSemiCircleChart />
      </div>
    </div>
  )
}

export default withLayout(DashboardPage,'auth');