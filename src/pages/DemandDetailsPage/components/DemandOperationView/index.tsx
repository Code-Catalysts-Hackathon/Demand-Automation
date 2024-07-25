import React from 'react';
import { IDemandDetails } from '../../model';

interface IDemandOperationView {
  details: IDemandDetails;
}
export default function DemandOperationView({ details }: IDemandOperationView) {
  return (
    <div className={'py-8 px-3'}>
      <div className="grid grid-cols-1 mb-4">
        <h4 className="text-xl font-ltc-b text-primary-dark">Operations</h4>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="">Approval</p>
        </div>
        <div>
          <p>{details.platform.name}</p>
        </div>
      </div>
    </div>
  );
}
