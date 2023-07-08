export type LocationResponseModel = {
  status?: string;
  country?: string;
  countryCode?: string;
  lat?: number;
  lon: number;
  timezone?: string;
  query: string;
};

export type IpApiResponseModel = {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  languages: string;
  asn: string;
  org: string;
};
