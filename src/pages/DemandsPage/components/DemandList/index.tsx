import React, { useCallback, useContext, useEffect, useState } from 'react';
import axiosApiClient from '../../../../config/axiosConfig';
import { getAuthToken } from '../../../../utils';
import {
  demandToDemandFormState,
  getInitDemandFormState,
  IDemand,
  IDemandFormState,
  IDemandListResponse
} from '../../models';
import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import Pagination from '../../../../components/common/Pagination';
import AppContext from '../../../../contexts/appContext';
import DemandPopupForm from '../DemandPopupForm';
import DemandNotifyPopup from '../DemandNotifyPopup';
import { EUserRole } from '../../../../contexts/appContext/model';
import DemandFilters from '../DemandFilters';

interface IOption {
  label: string;
  value: string;
}
interface IOperation {
  businessUnit: IOption;
  platform: IOption;
  lab: IOption;
  status: string;
  entriesPerPage: number;
  currentPage: number;
}

interface IDemandNotificationPopup {
  open: boolean;
  title: string;
  description: string;
}

export default function DemandList() {
  const { user, setLoader } = useContext(AppContext);
  const [demandForm, setDemandForm] = useState<IDemandFormState>(getInitDemandFormState());
  const [operation, setOperation] = useState<IOperation>({
    businessUnit: { label: '', value: '' },
    platform: { label: '', value: '' },
    lab: { label: '', value: '' },
    status: '',
    entriesPerPage: 5,
    currentPage: 0
  });

  const [demandPopUpOpen, setDemandPopUpOpen] = useState<boolean>(false);
  const [demandNotificationPopup, setDemandNotificationPopup] = useState<IDemandNotificationPopup>({
    open: false,
    title: '',
    description: ''
  });

  const [demands, setDemands] = useState<IDemandListResponse>({
    list: [],
    totalEntries: 0
  });

  const getDemands = useCallback(async () => {
    try {
      setLoader(true);
      const { currentPage, entriesPerPage, businessUnit, platform, lab, status } = operation;
      const request: any = {
        currentPage,
        entriesPerPage,
        businessUnit: businessUnit.value ? businessUnit.value : undefined,
        platform: platform.value ? platform.value : undefined,
        lab: lab.value ? lab.value : undefined,
        status: status ? status : undefined
      };
      if (user.role === EUserRole.BUHEAD) {
        request.businessUnit = user.businessUnit?.id;
      } else if (user.role === EUserRole.BUPLATFORMHEAD) {
        request.businessUnit = user.businessUnit?.id;
        request.platform = user.platform?.id;
      }
      const response = await axiosApiClient.post(axiosApiClient.URLS.api.GET_DEMANDS_URL, request, {
        Authorization: getAuthToken()
      });
      setDemands(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
  }, [operation, user, setDemands, setLoader]);

  useEffect(() => {
    getDemands();
  }, [getDemands]);

  const onChangePage = (pageNo: number) => {
    setOperation((prev) => {
      if (prev.currentPage === pageNo) {
        return prev;
      }
      return { ...prev, currentPage: pageNo };
    });
  };

  const onToggleDemandForm = (status: boolean, completed: boolean = false) => {
    setDemandPopUpOpen(status);
    if (completed) {
      setDemandNotificationPopup({
        open: true,
        title: 'Successfully submitted',
        description: ''
      });
      setOperation((prev) => ({ ...prev, search: '', currentPage: 0 }));
    }
  };

  const onAddForm = () => {
    setDemandForm(getInitDemandFormState());
    onToggleDemandForm(true);
  };

  const onEdit = (entry: IDemand) => {
    setDemandForm(demandToDemandFormState(entry));
    onToggleDemandForm(true);
  };

  const onFiltersSearch = (name: string, value: IOption | string) => {
    switch (name) {
      case 'businessUnit':
        setOperation((prev) => ({
          ...prev,
          businessUnit: value as IOption,
          currentPage: 0
        }));
        break;
      case 'platform':
        setOperation((prev) => ({
          ...prev,
          platform: value as IOption,
          currentPage: 0
        }));
        break;
      case 'lab':
        setOperation((prev) => ({
          ...prev,
          lab: value as IOption,
          currentPage: 0
        }));
        break;
      case 'status':
        setOperation((prev) => ({
          ...prev,
          status: (value as IOption).value,
          currentPage: 0
        }));
        break;
    }
  };

  return (
    <>
      <div className="px-4 sm:px-2">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-ltc-b leading-6 text-gray-900">Demands</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the demands</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {user.role === EUserRole.LBGADMIN ? (
              <button
                onClick={() => onAddForm()}
                type="button"
                className="block rounded-md bg-primary-dark px-3 py-2 text-center text-sm font-ltc-m text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light">
                Add Demand
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="-mx-4 mt-8 sm:-mx-0">
          <div className="flex items-center">
            <div className="flex-1">
              <DemandFilters
                onFilter={onFiltersSearch}
                businessUnit={operation.businessUnit}
                platform={operation.platform}
                lab={operation.lab}
                status={operation.status}
              />
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-ltc-m text-black sm:pl-0">
                  ID
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-ltc-m text-black sm:pl-0">
                  Business&nbsp;Unit
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-ltc-m text-black lg:table-cell">
                  Platform
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-ltc-m text-black sm:table-cell">
                  Lab
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Feature&nbsp;Team
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Primary&nbsp;Skill
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Secondary&nbsp;Skill
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Grade
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Department
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Demand&nbsp;Date
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {demands.list.map((item) => (
                <tr key={'DEMANDS_TR_' + item.id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-black font-ltc-m sm:w-auto sm:max-w-none sm:pl-0">
                    {"HUSKY-"+item.id}
                  </td>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-black font-ltc-m sm:w-auto sm:max-w-none sm:pl-0">
                    {item.businessUnit.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.platform.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.lab.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.featureTeam.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.primarySkill.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.secondarySkill.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.grade}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.department}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.demandDate}
                  </td>
                  <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                    {item.status}
                  </td>

                  <td className="py-4 pl-3 pr-4 flex gap-[5px] justify-center items-center text-sm font-medium sm:pr-0">
                    {user.role === EUserRole.LBGADMIN ? (
                      <Link to="#" title="Edit" className="text-primary-dark hover:text-primary">
                        <FaPencilAlt onClick={() => onEdit(item)} />
                      </Link>
                    ) : (
                      <></>
                    )}

                    <Link to={"/demands/"+item.id} title="View" className="text-primary-dark hover:text-primary">
                      <FaEye />
                    </Link>

                    {user.role === EUserRole.LBGADMIN ? (
                      <Link to="#" title="Delete" className="text-red-600 hover:text-red-500">
                        <RiDeleteBin3Fill />
                      </Link>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalEntries={demands.totalEntries}
            currentPage={operation.currentPage}
            perPage={operation.entriesPerPage}
            onChange={onChangePage}
          />
        </div>
      </div>
      {user.role === EUserRole.LBGADMIN ? (
        <>
          <DemandPopupForm
            open={demandPopUpOpen}
            demandForm={demandForm}
            setOpen={onToggleDemandForm}
          />
          <DemandNotifyPopup
            {...demandNotificationPopup}
            setOpen={(value: boolean) => {
              setDemandNotificationPopup((prev: IDemandNotificationPopup) => ({
                ...prev,
                open: value
              }));
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
