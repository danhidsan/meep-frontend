import useSwr from 'swr';
import Resource from '@/model/resource';
import { request } from '@/data/client';

const URL =
  'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources? lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,- 9.137115&companyZoneIds=545,467,473';

const useResource = () => {
  const { data, error } = useSwr<Resource>(URL, { fetcher: request });

  return { resources: !error && data ? data : [] };
};

export default useResource;
