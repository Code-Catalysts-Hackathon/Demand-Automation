import React, { useState } from 'react';
import { IDemandDetails } from '../../model';

interface IDemandOperationView {
  details: IDemandDetails;
}
export default function DemandOperationView({ details }: IDemandOperationView) {
  const [status, setStatus] = useState('');

  return (
    <div className={'py-8 px-3'}>
      <div className="grid grid-cols-1 mb-4">
        <h4 className="text-xl font-ltc-b text-primary-dark">Operations</h4>
      </div>
      <div className="grid grid-cols-2">
        <div className={'flex items-center gap-[10px]'}>
          {status === '' ? (
            <>
              <button
                onClick={() => {
                  setStatus('approve');
                }}
                className="flex justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
                Approve
              </button>

              <button className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                Reject
              </button>
            </>
          ) : (
            <></>
          )}

          {status === 'approve' ? (
            <>
              <button
                onClick={() => {
                  setStatus('mapped');
                }}
                className="flex justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
                Map An Employee
              </button>
            </>
          ) : (
            <></>
          )}
          {status === 'mapped' ? (
            <>
              <p className="text-primary-dark">Successfully mapped</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
