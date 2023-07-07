import { LocationResponseModel } from './LocationResponseModel';
import { LocationHelper } from './LocationHelper';

export class IpApiLocationHelper implements LocationHelper {
  public async getLocation(): Promise<LocationResponseModel> {
    const fetchResponse = await fetch('http://ip-api.com/json');
    const data: LocationResponseModel = await fetchResponse.json();

    if (!data) {
      throw new Error('Not found');
    }

    return data;
  }

  getHelpDocument(): string {
    return `## 3rd party api usages

We use [ip-api](https://ip-api.com/).

Please see their [Terms and Policies](https://ip-api.com/docs/legal).
`;
  }
}
