import React, { useEffect, useState } from 'react';
import withLayout from '../../layouts/withLayout';
import { useParams } from 'react-router-dom';
import axiosApiClient from '../../config/axiosConfig';
import { getInitDemandDetailsState, IDemandDetails } from './model';
import DetailsStagesComponent from './components/Stages';
import { demandLogs, demandStages } from './utils';
import DemandLogTimeline from './components/DemandLogTimeline';

function DemandDetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState<IDemandDetails>(getInitDemandDetailsState());

  const fetchDetails = async (id: string) => {
    try {
      const response: any = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_DEMANDS_URL + '/' + id
      );
      setDetails(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchDetails(params.id);
    }   
  }, [params]);

  return (
    <div>
      <div className="">
        <DetailsStagesComponent list={demandStages} />
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className='py-8 px-3'>
              <div className="grid grid-cols-1 mb-4">
                <h4 className='text-xl font-ltc-b text-primary-dark'>Details</h4>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="">Demand ID</p>
                </div>
                <div>
                  <p className="text-black">{details.id}</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="">Status</p>
                </div>
                <div>
                  <p className="text-black">{details.status}</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="">Business Unit</p>
                </div>
                <div>
                  <p className="text-black">{details.businessUnit.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Platform</p>
                </div>
                <div>
                  <p>{details.platform.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Lab</p>
                </div>
                <div>
                  <p>{details.lab.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Feature Team</p>
                </div>
                <div>
                  <p>{details.featureTeam.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Primary Skill</p>
                </div>
                <div>
                  <p>{details.primarySkill.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Secondary Skill</p>
                </div>
                <div>
                  <p>{details.secondarySkill.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Teritiary Skill</p>
                </div>
                <div>
                  <p>{details.tertiarySkill?.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Department</p>
                </div>
                <div>
                  <p>{details.department}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">BU Head</p>
                </div>
                <div>
                  <p>{details.buHeadName}</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="">Grade</p>
                </div>
                <div>
                  <p>{details.grade}</p>
                </div>
              </div>


              <div className="grid grid-cols-2">
                <div>
                  <p className="">Demand Date</p>
                </div>
                <div>
                  <p>{details.demandDate}</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <DemandLogTimeline list={demandLogs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(DemandDetailsPage, 'auth');
