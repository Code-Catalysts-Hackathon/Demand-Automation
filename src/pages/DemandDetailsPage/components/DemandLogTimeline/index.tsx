import React from 'react';

interface IDemandLogTimeline {
  list: any[];
}

export default function DemandLogTimeline({ list }: IDemandLogTimeline) {
  return (
    <section className="mt-10">
      <div className="">
        <h3 className="font-ltc-b text-xl text-left">Demand Work Flow</h3>
      </div>
      <div className="flex flex-col mt-0 max-h-[500px] overflow-y-auto">
        <div className="w-full">
          <div className="flex flex-col divide-y divide-slate-200">
            <div className="w-full">
              <div className="">
                {list.map((item,index) => {
                  return (
                    <div key={"Timeline_"+index} className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="font-ltc-m text-sm text-primary mb-1 sm:mb-0">Stage {index+1}</div>

                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-primary-dark before:bg-opacity-50 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary-light after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-ltc-b uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-primary-dark rounded-full">
                          20 May, 24
                        </time>
                        <div className="text-lg font-bold text-primary-dark font-ltc-b">
                          Title of the Log
                        </div>
                      </div>
                      <div className="text-black font-ltc-l text-sm">
                        Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
                        Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
