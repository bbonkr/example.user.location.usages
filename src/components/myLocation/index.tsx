'use client';
import { type LocationResponseModel } from '@/lib/LocationHelper';
import * as React from 'react';

export interface UserLocation {
  coords?: GeolocationCoordinates;
  error?: GeolocationPositionError;
  detail?: LocationResponseModel;
  message?: string;
}

export type MyLocationProps = {
  location?: UserLocation;
};

const MyLocation = ({ location }: MyLocationProps) => {
  return (
    <div className="p-3 lg:p-10">
      <h3 className="mb-3 font-extrabold text-lg">My location</h3>
      <dl>
        {location?.coords && (
          <>
            <dt>Latitude:</dt>
            <dd>{location?.coords?.latitude}</dd>
            <dt>Longitude:</dt>
            <dd>{location?.coords?.longitude}</dd>
          </>
        )}

        {location?.detail && (
          <>
            <dt>Country:</dt>
            <dd>{location?.detail?.country}</dd>
            <dt>Country code:</dt>
            <dd>{location?.detail?.countryCode}</dd>
            <dt>Timezone</dt>
            <dd>{location.detail.timezone}</dd>
          </>
        )}

        {location?.message && (
          <>
            <dt>Message:</dt>
            <dd>
              <pre>{location.message}</pre>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
};

export default MyLocation;
