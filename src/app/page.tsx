'use client';
import * as React from 'react';
import { type UserLocation } from '@/components/myLocation';
import dynamic from 'next/dynamic';
import { IpApiLocationHelper } from '@/lib/LocationHelper';
import Loading from '@/components/loading';
import Markdown from 'react-markdown';

const MyLocation = dynamic(() => import('@/components/myLocation'), {
  ssr: false,
  loading: () => <Loading />,
});

interface HomeState {
  userLocation?: UserLocation;
  isLoadingGeolocation?: boolean;
  isLoadingIpApi?: boolean;
}

export default function Home() {
  const locationHelper = new IpApiLocationHelper();

  const [homeState, setHomeState] = React.useState<HomeState>({
    isLoadingGeolocation: true,
    isLoadingIpApi: true,
  });

  React.useEffect(() => {
    setHomeState((prevState) => ({
      ...prevState,
      isLoadingGeolocation: true,
      isLoadingIpApi: true,
    }));

    if (window && 'geolocation' in window.navigator) {
      window.navigator.geolocation.watchPosition(
        (position) => {
          setHomeState((prevState) => ({
            ...prevState,
            userLocation: {
              ...prevState.userLocation,
              coords: position.coords,
              error: undefined,
              message: undefined,
            },
            isLoadingGeolocation: false,
          }));
        },
        (err) => {
          setHomeState((prevState) => ({
            ...prevState,
            userLocation: {
              ...prevState.userLocation,
              coords: undefined,
              error: err,
              message: err.message,
            },
            isLoadingGeolocation: false,
          }));

          console.warn('Cannot get user location: ', err);
        }
      );
    } else {
      setHomeState((prevState) => ({
        ...prevState,
        userLocation: {
          ...prevState.userLocation,
          coords: undefined,
          error: undefined,
          message: 'Geolocation is not support by user web browser',
        },
        isLoadingGeolocation: false,
      }));
      console.warn('Geolocation is not support by user web browser.');
    }

    locationHelper
      .getLocation()
      .then((data) => {
        setHomeState((prevState) => ({
          ...prevState,
          userLocation: {
            ...prevState.userLocation,
            detail: data,
          },
        }));
      })
      .catch((err) => {
        console.warn('Location api error:', err);
      })
      .finally(() => {
        setHomeState((prevState) => ({
          ...prevState,
          isLoadingIpApi: false,
        }));
      });

    return () => {
      setHomeState((_) => ({
        userLocation: undefined,
        isLoadingGeolocation: false,
        isLoadingIpApi: false,
      }));
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 py-14">
      <div className="flex flex-col justify-between w-full min-h-full flex-1">
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex flex-1">
          <MyLocation location={homeState?.userLocation} />
        </div>

        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
          <Markdown className="markdown">
            {locationHelper.getHelpDocument()}
          </Markdown>
        </div>
      </div>

      {(homeState?.isLoadingGeolocation || homeState?.isLoadingIpApi) && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex min-w-full min-h-screen flex-col items-center justify-center z-10 bg-slate-500 opacity-60">
          <Loading
            message={`Loading${
              homeState?.isLoadingGeolocation ? ' Geolocation' : ''
            }${homeState?.isLoadingIpApi ? ' Ip base location' : ''}`}
          />
        </div>
      )}
    </main>
  );
}
