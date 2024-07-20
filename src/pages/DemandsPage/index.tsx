import React from 'react'
import withLayout from '../../layouts/withLayout'
import DemandList from './components/DemandList';

function DemandsPage() {
  return (
    <div>
      <DemandList />
    </div>
  )
}


export default withLayout(DemandsPage,'auth');