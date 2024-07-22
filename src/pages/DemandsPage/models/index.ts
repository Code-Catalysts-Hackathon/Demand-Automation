interface IValue{
  id:number;
  name:string;
}

export interface IDemand {
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

export interface IDemandListResponse {
    list:IDemand[],
    totalEntries:number
}

export interface IDemandValue {
  value: string | number | boolean | any;
  error?: string;
}

export interface IDemandOption extends IDemandValue {
  label: string;
}

export interface IDemandFormState {
  id:number;
  businessUnit: IDemandOption;
  platform: IDemandOption;
  lab: IDemandOption;
  featureTeam: IDemandOption;
  primarySkill: IDemandOption;
  secondarySkill: IDemandOption;
  tertiarySkill: IDemandOption;
  grade: IDemandOption;
  demandDate: IDemandOption;
}


export const getInitDemandOption = (label: string = '', value: any = ''): IDemandOption => {
  return {
    label,
    value,
    error: ''
  };
};

export const getInitDemandFormState = ():IDemandFormState=>{
  return ({
    id:0,
    businessUnit: getInitDemandOption(),
    platform: getInitDemandOption(),
    lab: getInitDemandOption(),
    featureTeam: getInitDemandOption(),
    primarySkill: getInitDemandOption(),
    secondarySkill: getInitDemandOption(),
    tertiarySkill: getInitDemandOption(),
    grade: getInitDemandOption(),
    demandDate: getInitDemandOption()
  })
}


export const demandToDemandFormState = (value:IDemand):IDemandFormState=>{
  const result = getInitDemandFormState();
  result.id=value.id;
  result.businessUnit.value=value.businessUnit.id;
  result.businessUnit.label=value.businessUnit.name;
  result.platform.value=value.platform.id;
  result.platform.label=value.platform.name;
  result.lab.value=value.lab.id;
  result.lab.label=value.lab.name;
  result.featureTeam.value=value.featureTeam.id;
  result.featureTeam.label=value.featureTeam.name;
  result.primarySkill.value=value.primarySkill.id;
  result.primarySkill.label=value.primarySkill.name;
  result.secondarySkill.value=value.secondarySkill.id;
  result.secondarySkill.label=value.secondarySkill.name;
  result.tertiarySkill.value=value.tertiarySkill.id;
  result.tertiarySkill.label=value.tertiarySkill.name;
  result.grade.value=value.grade;
  result.demandDate.value=value.demandDate;
  return result;
}