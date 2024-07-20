import React from 'react'
import withLayout from '../../layouts/withLayout'
import LogoSymbol from '../../components/common/LogoSymbol'
import LoginPageForm from './components/LoginPageForm'

function LoginPage() {
  return (
    <div className="my-auto flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div><LogoSymbol className='mx-auto'/></div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-black font-ltc-b">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <LoginPageForm />
          </div>

        </div>
      </div>
  )
}

export default withLayout(LoginPage)