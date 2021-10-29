export interface IStateInfo {
  key: string;
  value: string;
  heading: string;
}

export const stateInfoData: IStateInfo[] = [
  {
    key: 'Total State Cases',
    value: 'totalStateCases',
    heading: 'State Cases',
  },
  {
    key: 'Total State Deaths',
    value: 'totalStateDeaths',
    heading: 'State Deaths',
  },
  {
    key: 'Total Recovery',
    value: 'Recovery_Proporation',
    heading: 'Recovery Percentage',
  },
];
