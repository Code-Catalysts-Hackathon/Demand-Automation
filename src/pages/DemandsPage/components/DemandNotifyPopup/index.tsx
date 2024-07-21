import React from 'react';
import Modal from '../../../../components/common/Modal';
import { FaCheckCircle } from 'react-icons/fa';
import { DialogTitle } from '@headlessui/react';

interface IDemandNotifyPopupProps{
    open:boolean;
    title:string;
    description:string;
    setOpen:(value:boolean)=>void
}
export default function DemandNotifyPopup({ open, title, description, setOpen }:IDemandNotifyPopupProps) {
  return (
    <Modal open={open} dialogPanelClassName='sm:max-w-sm'>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <FaCheckCircle aria-hidden="true" className="h-6 w-6 text-green-600" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <DialogTitle as="h3" className="text-base font-ltc-b leading-6 text-black">
            {title}
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex w-full justify-center rounded-md bg-primary-dark px-3 py-2 text-sm font-ltc-b text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          Close
        </button>
      </div>
    </Modal>
  );
}
