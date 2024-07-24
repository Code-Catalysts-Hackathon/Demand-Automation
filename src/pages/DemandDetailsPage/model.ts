interface IValue {
  id: number;
  name: string;
}

export interface IDemandDetails {
  id: number;
  businessUnit: IValue;
  platform: IValue;
  lab: IValue;
  featureTeam: IValue;
  primarySkill: IValue;
  secondarySkill: IValue;
  tertiarySkill: IValue;
  grade: string;
  buHeadName: string;
  department: string;
  demandDate: string;
  status: string;
  comments: string;
}

export interface IDemandStage{
    name:string;
    completed:boolean;
    active:boolean;
}

export const getInitDemandDetailsState = (): IDemandDetails => {
  return {
    id: 0,
    businessUnit: { id: 0, name: '' },
    platform: { id: 0, name: '' },
    lab: { id: 0, name: '' },
    featureTeam: { id: 0, name: '' },
    primarySkill: { id: 0, name: '' },
    secondarySkill: { id: 0, name: '' },
    tertiarySkill: { id: 0, name: '' },
    grade: '',
    demandDate: '',
    buHeadName: '',
    department: '',
    status: '',
    comments: ''
  };
};
