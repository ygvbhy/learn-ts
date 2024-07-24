interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
}

interface CountrySummeryResponse {
  Cases: number;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Status: string;
}

// 단순 배열이면 interface 보단 type 가 더 맞음
export type CountrySummeryInfo = CountrySummeryResponse[];

export enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}
