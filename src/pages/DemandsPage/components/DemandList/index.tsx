import React, { useCallback, useContext, useEffect, useState } from 'react';
import axiosApiClient from '../../../../config/axiosConfig';
import { getAuthToken } from '../../../../utils';
import { IDemandListResponse } from '../../models';
import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt, FaSearch } from 'react-icons/fa';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import Pagination from '../../../../components/common/Pagination';
import AppContext from '../../../../contexts/appContext';
import { useDebounce } from '../../../../hooks/debounce';

interface IOperation {
  search: string;
  entriesPerPage: number;
  currentPage: number;
}

export default function DemandList() {
  const { setLoader } = useContext(AppContext);
  const [operation, setOperation] = useState<IOperation>({
    search: '',
    entriesPerPage: 5,
    currentPage: 0
  });

  const [demands, setDemands] = useState<IDemandListResponse>({
    list: [],
    totalEntries: 0
  });

  const getDemands = useCallback(async () => {
    try {
      setLoader(true);
      const response = await axiosApiClient.post(
        axiosApiClient.URLS.api.GET_DEMANDS_URL,
        {
          ...operation
        },
        {
          Authorization: getAuthToken()
        }
      );
      setDemands(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
  },[operation,setDemands]);

  useEffect(() => {
    getDemands();
  }, [getDemands]);

  const onChangePage = (pageNo: number) => {
    setOperation((prev) => {
        if(prev.currentPage === pageNo){
            return prev;
        }
        return ({ ...prev, currentPage: pageNo })});
  };

  const onSearch = (search:string)=>{
        setOperation(prev=>({
            ...prev,
            search,
            currentPage:0
        }))
  }

  const onSearchDebounce = useDebounce(onSearch);

  return (
    <div className="px-4 sm:px-2">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-ltc-b leading-6 text-gray-900">Demands</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the demands</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-primary-dark px-3 py-2 text-center text-sm font-ltc-m text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light">
            Add Demand
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <div className="flex">
          <div className="ml-auto">
            <div>
              <div className="relative rounded-md shadow-sm">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search"
                  onChange={(e)=>onSearchDebounce(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-black ring-1 ring-inset ring-primary-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <FaSearch aria-hidden="true" className="h-5 w-5 text-primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-ltc-m text-black sm:pl-0">
                Business Unit
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
                Feature Team
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                Primary Skill
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                Secondary Skill
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                Teritiary Skill
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                Grade
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                BU Head
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-ltc-m text-black">
                Demand Date
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
              <tr key={item.id}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-black font-ltc-m sm:w-auto sm:max-w-none sm:pl-0">
                  {item.businessUnitName}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.platformName}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.labName}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.featureTeamName}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.primarySkill}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.secondarySkill}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.tertiarySkill}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.grade}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.buHeadName}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.demandDate}
                </td>
                <td className="px-3 py-4 text-sm text-black font-ltc-r lg:table-cell">
                  {item.status}
                </td>

                <td className="py-4 pl-3 pr-4 flex gap-[5px] items-center text-sm font-medium sm:pr-0">
                  <Link to="#" title="Edit" className="text-primary-dark hover:text-primary">
                    <FaPencilAlt />
                  </Link>
                  <Link to="#" title="View" className="text-primary-dark hover:text-primary">
                    <FaEye />
                  </Link>
                  <Link to="#" title="Delete" className="text-red-600 hover:text-red-500">
                    <RiDeleteBin3Fill />
                  </Link>
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
  );
}
