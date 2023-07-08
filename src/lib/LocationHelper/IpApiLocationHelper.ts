import { IpApiResponseModel } from './LocationResponseModel';
import { LocationHelper } from './LocationHelper';

export class IpApiLocationHelper implements LocationHelper {
  public getEndpoint() {
    return 'https://ipapi.co/json/';
  }

  public async getLocation(): Promise<IpApiResponseModel> {
    const uri = this.getEndpoint();
    const fetchResponse = await fetch(uri);
    const data: IpApiResponseModel = await fetchResponse.json();

    if (!data) {
      throw new Error('Not found');
    }

    return data;
  }

  getHelpDocument(): string {
    return `## 3rd party api usages

We use [ipapi](https://ipapi.co/).

Please see their [Terms and Policies](https://ipapi.co/terms/).
`;
  }
}
