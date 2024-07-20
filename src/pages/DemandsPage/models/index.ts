export interface IDemand {
  id: number;
  businessUnitName: string;
  platformName: string;
  labName: string;
  featureTeamName: string;
  primarySkill: string;
  secondarySkill: string;
  tertiarySkill: string;
  grade: string;
  buHeadName: string;
  demandDate: string;
  status: string;
  comments: string;
}

export interface IDemandListResponse {
    list:IDemand[],
    totalEntries:number
}