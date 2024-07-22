import React, { FormEvent, useContext, useState } from 'react';
import { allowOnlyNumsNo0Exp } from '../../../config/regexp';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axiosApiClient from '../../../config/axiosConfig';
import AppContext from '../../../contexts/appContext';
import { decodeTokenPayload } from '../../../utils/decryption';
import { IUserState } from '../../../contexts/appContext/model';
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../config/constants';

interface IFieldUserNameState {
  error: string;
  value: string;
}

interface IFieldPasswordState extends IFieldUserNameState {
  show: boolean;
}

export default function LoginPageForm() {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState('');
  const [userName, setUserName] = useState<IFieldUserNameState>({
    error: '',
    value: ''
  });

  const [password, setPassword] = useState<IFieldPasswordState>({
    error: '',
    value: '',
    show: false
  });

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === '' || (value && value.length <= 7 && allowOnlyNumsNo0Exp.test(value))) {
      setUserName({ value, error: '' });
      setAuthStatus('');
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword((prev: IFieldPasswordState) => {
      let st = { ...prev };
      st.value = value;
      st.error = '';
      return st;
    });
    setAuthStatus('');
  };

  const onTogglePassword = () => {
    setPassword((prev: IFieldPasswordState) => {
      let st = { ...prev };
      st.show = !st.show;
      return st;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior
    let validate = true;
    if (!userName.value) {
      setUserName((prev) => ({
        ...prev,
        error: 'Enter a username'
      }));
      validate = false;
    } else if (
      !(userName.value && userName.value.length === 7 && allowOnlyNumsNo0Exp.test(userName.value))
    ) {
      setUserName((prev) => ({
        ...prev,
        error: 'Enter a valid username'
      }));
      validate = false;
    }

    if (!password) {
      setPassword((prev) => ({
        ...prev,
        error: 'Enter a password'
      }));
      validate = false;
    }

    if (validate) {
      appContext.setLoader(true);
      const req = {
        userName: userName.value,
        password: password.value
      };
      try {
        const response = await axiosApiClient.post(axiosApiClient.URLS.api.POST_AUTH_VALIDATE_URL, req);
        const decoded = decodeTokenPayload(response.data.token);
        localStorage.setItem(AUTH_TOKEN,response.data.token)
        appContext.setUser(decoded.payload as IUserState);
        appContext.setLoader(false);
        navigate("/dashboard");
      } catch (e) {
        console.log(e);
        setAuthStatus('Credentials does not match');
        appContext.setLoader(false);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <p id="username-error" className="mt-2 text-sm text-center text-red-600">
          {authStatus}
        </p>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-black font-ltc-m">
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            onChange={onUserNameChange}
            required
            autoComplete="username"
            placeholder="Enter Username"
            value={userName.value}
            className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${userName.error ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
          />
        </div>
        <p id="username-error" className="mt-2 text-sm text-red-600">
          {userName.error}
        </p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-black font-ltc-m">
          Password
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="flex flex-grow items-stretch">
            <input
              id="password"
              name="password"
              type={password.show ? 'text' : 'password'}
              onChange={onPasswordChange}
              required
              placeholder="Enter Password"
              value={password.value}
              autoComplete="current-password"
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black   focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${password.error ? 'text-red-900 placeholder:text-red-300 ring-red-300 focus:ring-red-500' : 'text-black ring-primary-light focus:ring-primary-light placeholder:text-gray-400'}`}
            />
          </div>
          {/* <button
            type="button"
            onClick={onTogglePassword}
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {password.show ? <FaEyeSlash /> : <FaEye />}
          </button> */}
        </div>
        <p className="mt-2 text-sm text-red-600">
          {password.error}
        </p>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold font-ltc-b leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
          Add
        </button>
      </div>
    </form>
  );
}
