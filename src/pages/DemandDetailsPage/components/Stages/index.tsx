import React from 'react';
import RightArrowPng from '../../../../images/right_arrow_head.png';
import { IDemandStage } from '../../model';
import { replaceAllSpaces } from '../../../../utils';


interface IDetailsStagesComponent{
    list:IDemandStage[];
}
const DetailsStagesComponent = ({ list }:IDetailsStagesComponent) => {
  return (
    <div>
      <div className='py-3'>
        <h1 className='text-primary-dark text-center text-3xl font-ltc-b'>Demand Stages</h1>
      </div>

      <div className="flex items-center gap-3 mt-6">
        {
            list.map((item)=>{
                return(<div key={"Demand_Stage_"+replaceAllSpaces(item.name)} className={`flex-1 rounded-3xl flex items-center justify-center py-3 ${item.completed?'bg-primary-light':(item.active?'bg-primary':'bg-gray-50')}`}>
                    <div>
                      <h4 className={`font-ltc-b text-lg ${!(item.completed || item.active)?'text-black':'text-white'}`}>{item.name}</h4>
                    </div>
                    <div>
                      <img className='' src={RightArrowPng} alt={replaceAllSpaces(item.name)} />
                    </div>
                  </div>)
            })
        }

      </div>
    </div>
  );
};

export default DetailsStagesComponent;
