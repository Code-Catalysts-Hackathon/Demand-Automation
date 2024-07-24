import React, { useEffect, useState } from 'react';
import withLayout from '../../layouts/withLayout';
import { useParams } from 'react-router-dom';
import axiosApiClient from '../../config/axiosConfig';
import { getInitDemandDetailsState, IDemandDetails } from './model';
import DetailsStagesComponent from './components/Stages';
import { demandLogs, demandStages } from './utils';
import DemandLogTimeline from './components/DemadLogTimeline';

function DemandDetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState<IDemandDetails>(getInitDemandDetailsState());

  const fetchDetails = async (id: string) => {
    try {
      const response: any = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_DEMANDS_URL + '/' + id
      );
      setDetails(response);
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
        <DemandLogTimeline list={demandLogs} />
      </div>
    </div>
  );
}

export default withLayout(DemandDetailsPage, 'auth');
