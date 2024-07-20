import React, { FormEvent, useState } from 'react';
import Modal from '../../../../components/common/Modal';
import CustomReactSelect from '../../../../components/common/CustomReactSelect';
import { ImCross } from 'react-icons/im';
import axiosApiClient from '../../../../config/axiosConfig';
import { getLocalToken } from '../../../../utils';

interface IDemandPopupFormProps {
  open: boolean;
  setOpen: (value: boolean, submitted?: boolean) => void;
}

interface IOption {
  label: string;
  value: string | number;
  error?: string;
}

export default function DemandPopupForm({ open, setOpen }: IDemandPopupFormProps) {
  const [businessUnit, setBusinessUnit] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });
  const [platform, setPlatform] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });
  const [lab, setLab] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });

  const [featureTeam, setFeatureTeam] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });

  const [primarySkill, setPrimarySkill] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });

  const [secondarySkill, setSecondarySkill] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });

  const [teritiarySkill, setTeritiarySkill] = useState<IOption>({
    label: '',
    value: 0,
    error: ''
  });

  const [grade, setGrade] = useState<string>('');
  const [demandDate, setDemandDate] = useState<string>('');

  const onSelectBusinessUnit = (value: IOption) => {
    setBusinessUnit(value);
  };

  const onSelectPlatform = (value: IOption) => {
    setPlatform(value);
  };

  const onSelectLab = (value: IOption) => {
    setLab(value);
  };

  const onSelectFeatureTeam = (value: IOption) => {
    setFeatureTeam(value);
  };

  const onSelectPrimarySkill = (value: IOption) => {
    setPrimarySkill(value);
  };

  const onSelectSecondarySkill = (value: IOption) => {
    setSecondarySkill(value);
  };

  const onSelectTeritiarySkill = (value: IOption) => {
    setTeritiarySkill(value);
  };

  const loadBusinessUnitOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          search: value
        },
        {
          Authorization: getLocalToken()
        }
      );
      const result = response.data.list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const loadPlatformOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          businessUnitId: businessUnit.value || undefined,
          search: value
        },
        {
          Authorization: getLocalToken()
        }
      );
      const result = response.data.list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const loadLabOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          businessUnitId: businessUnit.value || undefined,
          platformId: platform.value || undefined,
          search: value
        },
        {
          Authorization: getLocalToken()
        }
      );
      const result = response.data.list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const loadFeatureTeamsOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          businessUnitId: businessUnit.value || undefined,
          platformId: platform.value || undefined,
          labId: lab.value || undefined,
          search: value
        },
        {
          Authorization: getLocalToken()
        }
      );
      const result = response.data.list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const loadSkillsOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          businessUnitId: businessUnit.value || undefined,
          platformId: platform.value || undefined,
          labId: lab.value || undefined,
          search: value
        },
        {
          Authorization: getLocalToken()
        }
      );
      const result = response.data.list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = {
      businessUnit: businessUnit.value,
      platform: platform.value,
      lab: lab.value,
      featureTeam: featureTeam.value,
      primarySkill: primarySkill.value,
      secondarySkill: secondarySkill.value,
      teritiarySkill: teritiarySkill.value,
      grade,
      demandDate
    };
    try {
      await axiosApiClient.post(
        axiosApiClient.URLS.api.POST_CREATE_DEMAND_URL,
        request,
        {
          Authorization: getLocalToken()
        }
      );
      setOpen(true,true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal open={open} dialogPanelClassName="sm:max-w-4xl">
      <div className="absolute right-5 top-4">
        <ImCross className="text-red-500 cursor-pointer" onClick={() => setOpen(false)} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-center text-2xl text-primary-dark">Demand Request</h3>
        <div className="mt-4">
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-y-3 gap-x-8">
            <div className="sm:col-span-1">
              <label
                htmlFor="businessUnitName"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Business Unit
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadBusinessUnitOptions}
                    onChange={onSelectBusinessUnit}
                    value={businessUnit}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="platform"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Platform
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadPlatformOptions}
                    onChange={onSelectPlatform}
                    value={platform}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="lab" className="block text-sm font-ltc-b leading-6 text-gray-900">
                Lab
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadLabOptions}
                    onChange={onSelectLab}
                    value={lab}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="featureTeam"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Feature Team
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadFeatureTeamsOptions}
                    onChange={onSelectFeatureTeam}
                    value={featureTeam}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="primarySkill"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Primary Skill
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectPrimarySkill}
                    value={primarySkill}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="secondarySkill"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Secondary Skill
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectSecondarySkill}
                    value={secondarySkill}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="teritiarySkill"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Teritiary Skill
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelect
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectTeritiarySkill}
                    value={teritiarySkill}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="grade" className="block text-sm font-ltc-b leading-6 text-gray-900">
                Grade
              </label>
              <div className="mt-2">
                <div className="mt-2">
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="Enter Grade"
                    className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${false ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="demandDate"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Demand Date
              </label>
              <div className="mt-2">
                <input
                  id="demandDate"
                  name="demandDate"
                  type="date"
                  onChange={(e) => setDemandDate(e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${false ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
                />
              </div>
            </div>
            <div className="sm:col-span-1"></div>
            <div className="col-start-1 sm:col-span-1 mt-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
