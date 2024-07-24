import React, { useCallback, useContext, useMemo } from 'react';
import {
  CustomReactSelect,
  CustomReactSelectAsync
} from '../../../../components/common/CustomReactSelect';
import axiosApiClient from '../../../../config/axiosConfig';
import { getAuthToken } from '../../../../utils';
import debounce from 'debounce-promise';
import { demandStatusList } from '../../utils';
import AppContext from '../../../../contexts/appContext';
import { EUserRole } from '../../../../contexts/appContext/model';

interface IOption {
  label: string;
  value: string;
}
interface IDemandFiltersProps {
  businessUnit: IOption;
  platform: IOption;
  lab: IOption;
  status: string;
  onFilter: (name: string, value: IOption | string) => void;
}
export default function DemandFilters({
  businessUnit,
  onFilter,
  platform,
  lab,
  status
}: IDemandFiltersProps) {
  const { user } = useContext(AppContext);
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

  const onBusinessChange = debounce((value: IOption) => {
    onFilter('businessUnit', value);
  }, 500);

  const onPlatformChange = debounce((value: IOption) => {
    onFilter('platform', value);
  }, 500);

  const onLabChange = debounce((value: IOption) => {
    onFilter('lab', value);
  }, 500);

  const onStatusChange = (value: string) => {
    onFilter('status', value);
  };

  const showPlatform = useMemo(() => {
    if (
      ((user.role === EUserRole.LBGADMIN ||
      user.role === EUserRole.LTCADMIN) && businessUnit.value)
    ) {
      return true;
    } else if (user.role === EUserRole.BUHEAD) {
      return true;
    }
    return false;
  }, [user,businessUnit]);

  const showLab = useMemo(() => {
    if (
      ((user.role === EUserRole.LBGADMIN ||
      user.role === EUserRole.LTCADMIN || user.role === EUserRole.BUHEAD) && platform.value)
    ) {
      return true;
    } else if (user.role === EUserRole.BUPLATFORMHEAD) {
      return true;
    }
    return false;
  }, [user,platform]);

  const loadPlatformOptions = useCallback(async (value: string) => {
    try {
        console.log(user,user.role === EUserRole.BUPLATFORMHEAD)
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_PLATFORMS_URL,
        {
          businessUnitId: (user.role === EUserRole.BUPLATFORMHEAD || user.role === EUserRole.BUHEAD )?user.businessUnit?.id:businessUnit.value,
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
  },[user,businessUnit]);

  const loadLabOptions = useCallback(async (value: string) => {
    try {
      const response = await axiosApiClient.get(
        axiosApiClient.URLS.api.GET_LABS_URL,
        {
          businessUnitId: (user.role === EUserRole.BUPLATFORMHEAD || user.role === EUserRole.BUHEAD)?user.businessUnit?.id:businessUnit.value,
          platform:(user.role === EUserRole.BUPLATFORMHEAD)?user.platform?.id:platform.value,
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
  },[user,platform,businessUnit]);

  return (
    <div className="grid grid-cols-5 gap-3">
      {user.role === EUserRole.LBGADMIN || user.role === EUserRole.LTCADMIN ? (
        <div>
          <label className="block text-xs font-ltc-b leading-6 text-black">Business Unit</label>
          <div className="mt-1">
            <CustomReactSelectAsync
              placeHolder={'Select Business Unit'}
              loadOptions={loadBusinessUnitOptions}
              onChange={onBusinessChange}
              value={businessUnit}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      {showPlatform ? (
        <div>
          <label className="block text-xs font-ltc-b leading-6 text-black">Platform</label>
          <div className="mt-1">
            <CustomReactSelectAsync
              placeHolder={'Select Platform'}
              loadOptions={loadPlatformOptions}
              onChange={onPlatformChange}
              value={platform}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      {showLab ? (
        <div>
          <label className="block text-xs font-ltc-b leading-6 text-black">Lab</label>
          <div className="mt-1">
            <CustomReactSelectAsync
              placeHolder={'Select Lab'}
              loadOptions={loadLabOptions}
              onChange={onLabChange}
              value={lab}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        <label className="block text-xs font-ltc-b leading-6 text-black">Status</label>
        <div className="mt-1">
          <CustomReactSelect
            placeHolder={'Select Status'}
            options={demandStatusList.map((e) => ({ label: e, value: e }))}
            onChange={onStatusChange}
            value={{ label: status, value: status }}
          />
        </div>
      </div>
    </div>
  );
}
