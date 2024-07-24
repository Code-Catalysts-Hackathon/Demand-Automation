import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from '../../../../components/common/Modal';
import { CustomReactSelectAsync } from '../../../../components/common/CustomReactSelect';
import { ImCross } from 'react-icons/im';
import axiosApiClient from '../../../../config/axiosConfig';
import { getAuthToken } from '../../../../utils';
import AppContext from '../../../../contexts/appContext';
import {
  getInitDemandFormState,
  getInitDemandOption,
  IDemandFormState,
  IDemandOption
} from '../../models';

interface IDemandPopupFormProps {
  open: boolean;
  setOpen: (value: boolean, submitted?: boolean) => void;
  demandForm: IDemandFormState;
}

export default function DemandPopupForm({ open, setOpen, demandForm }: IDemandPopupFormProps) {
  const { setLoader } = useContext(AppContext);
  const [formState, setFormState] = useState<IDemandFormState>(getInitDemandFormState());

  useEffect(() => {
    setFormState({ ...demandForm });
  }, [demandForm]);

  const onSelectBusinessUnit = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.businessUnit = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectPlatform = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.platform = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectLab = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.lab = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectFeatureTeam = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.featureTeam = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectPrimarySkill = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.primarySkill = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectSecondarySkill = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.secondarySkill = getInitDemandOption(label, value);
      return st;
    });
  };

  const onSelectTertiarySkill = ({ label, value }: IDemandOption) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.tertiarySkill = getInitDemandOption(label, value);
      return st;
    });
  };

  const onGradeChange = (value: string) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.grade = getInitDemandOption('', value);
      return st;
    });
  };

  const onDemandDateChange = (value: string) => {
    setFormState((prev) => {
      let st = { ...prev };
      st.demandDate = getInitDemandOption('', value);
      return st;
    });
  };

  const loadBusinessUnitOptions = async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
        {
          search: value
        },
        {
          Authorization: getAuthToken()
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
          businessUnitId: formState.businessUnit.value || undefined,
          search: value
        },
        {
          Authorization: getAuthToken()
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
          businessUnitId: formState.businessUnit.value || undefined,
          platformId: formState.platform.value || undefined,
          search: value
        },
        {
          Authorization: getAuthToken()
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
          businessUnitId: formState.businessUnit.value || undefined,
          platformId: formState.platform.value || undefined,
          labId: formState.lab.value || undefined,
          search: value
        },
        {
          Authorization: getAuthToken()
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
          businessUnitId: formState.businessUnit.value || undefined,
          platformId: formState.platform.value || undefined,
          labId: formState.lab.value || undefined,
          search: value
        },
        {
          Authorization: getAuthToken()
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

  const validateForm = () => {
    let validate = true;
    const stateCopy: IDemandFormState = JSON.parse(JSON.stringify(formState));
    if (!stateCopy.businessUnit.value) {
      stateCopy.businessUnit.error = 'Select a Business Unit';
      validate = false;
    }
    if (!stateCopy.platform.value) {
      stateCopy.platform.error = 'Select a Platform';
      validate = false;
    }
    if (!stateCopy.lab.value) {
      stateCopy.lab.error = 'Select a Lab';
      validate = false;
    }
    if (!stateCopy.featureTeam.value) {
      stateCopy.featureTeam.error = 'Select a Feature Team';
      validate = false;
    }
    if (!stateCopy.primarySkill.value) {
      stateCopy.primarySkill.error = 'Select a Primary Skill';
      validate = false;
    }
    if (!stateCopy.secondarySkill.value) {
      stateCopy.secondarySkill.error = 'Select a Secondary Skill';
      validate = false;
    }
    if (!stateCopy.grade.value) {
      stateCopy.grade.error = 'Enter a Grade';
      validate = false;
    }
    if (!stateCopy.demandDate.value) {
      stateCopy.demandDate.error = 'Select a Demand Date';
      validate = false;
    }
    if (!validate) {
      setFormState(stateCopy);
    }
    return validate;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validate = validateForm();
    if (validate) {
      setLoader(true);
      const request = {
        businessUnit: formState.businessUnit.value,
        platform: formState.platform.value,
        lab: formState.lab.value,
        featureTeam: formState.featureTeam.value,
        primarySkill: formState.primarySkill.value,
        secondarySkill: formState.secondarySkill.value,
        tertiarySkill: formState.tertiarySkill.value,
        grade: formState.grade.value,
        demandDate: formState.demandDate.value
      };
      try {
        if (formState.id) {
          await axiosApiClient.post(
            axiosApiClient.URLS.api.PUT_DEMAND_URL + '/' + formState.id,
            request,
            {
              Authorization: getAuthToken()
            }
          );
        } else {
          await axiosApiClient.post(axiosApiClient.URLS.api.POST_CREATE_DEMAND_URL, request, {
            Authorization: getAuthToken()
          });
        }

        setOpen(false, true);
      } catch (e) {
        console.log(e);
      }
      setLoader(false);
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
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-y-1 gap-x-8">
            <div className="sm:col-span-1">
              <label
                htmlFor="businessUnitName"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Business Unit
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelectAsync
                    loadOptions={loadBusinessUnitOptions}
                    onChange={onSelectBusinessUnit}
                    value={formState.businessUnit}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.businessUnit.error}</p>
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
                  <CustomReactSelectAsync
                    loadOptions={loadPlatformOptions}
                    onChange={onSelectPlatform}
                    value={formState.platform}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.platform.error}</p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="lab" className="block text-sm font-ltc-b leading-6 text-gray-900">
                Lab
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelectAsync
                    loadOptions={loadLabOptions}
                    onChange={onSelectLab}
                    value={formState.lab}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.lab.error}</p>
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
                  <CustomReactSelectAsync
                    loadOptions={loadFeatureTeamsOptions}
                    onChange={onSelectFeatureTeam}
                    value={formState.featureTeam}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.featureTeam.error}</p>
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
                  <CustomReactSelectAsync
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectPrimarySkill}
                    value={formState.primarySkill}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.primarySkill.error}</p>
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
                  <CustomReactSelectAsync
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectSecondarySkill}
                    value={formState.secondarySkill}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.secondarySkill.error}</p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="tertiarySkill"
                className="block text-sm font-ltc-b leading-6 text-gray-900">
                Tertiary Skill
              </label>
              <div className="mt-2">
                <div>
                  <CustomReactSelectAsync
                    loadOptions={loadSkillsOptions}
                    onChange={onSelectTertiarySkill}
                    value={formState.tertiarySkill}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.tertiarySkill.error}</p>
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
                    value={formState.grade.value}
                    onChange={(e) => onGradeChange(e.target.value)}
                    placeholder="Enter Grade"
                    className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${false ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
                  />
                  <p className="mt-2 text-sm text-red-600">{formState.grade.error}</p>
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
                  value={formState.demandDate.value}
                  onChange={(e) => onDemandDateChange(e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${false ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
                />
                <p className="mt-2 text-sm text-red-600">{formState.demandDate.error}</p>
              </div>
            </div>
            <div className="sm:col-span-1"></div>
            <div className="col-start-1 sm:col-span-1 mt-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
