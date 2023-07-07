import { LocationResponseModel } from './LocationResponseModel';

export interface LocationHelper {
  getLocation(): Promise<LocationResponseModel>;

  getHelpDocument(): string;
}
