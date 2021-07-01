import { useMemo } from 'react';
import useSwr from 'swr';
import useSupercluster from 'use-supercluster';
import { PointFeature } from 'supercluster';
import Resource from '@/model/resource';
import { request } from '@/data/client';

const URL =
  'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources? lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,- 9.137115&companyZoneIds=545,467,473';

export type Bound = [number, number, number, number, number, number];

export type UseResourceParams = {
  bounds: Bound;
  zoom: number;
};

const useResource = ({ bounds, zoom }: UseResourceParams) => {
  const { data, error, isValidating } = useSwr<Resource[]>(URL, {
    fetcher: request,
  });

  const points = useMemo(
    () =>
      data?.map((resource) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [resource.x, resource.y],
        },
        properties: {
          resourceId: resource.id,
          batteryLevel: resource.batteryLevel,
        },
      })) as PointFeature<{
        resourceId: string;
        batteryLevel: number;
        cluster: boolean;
        cluster_id?: number;
        point_count: number;
      }>[],
    [data],
  );

  const { clusters } = useSupercluster({
    bounds,
    zoom,
    points: points ?? [],
    options: { radius: 75, maxZoom: 20 },
  });

  return {
    allPointsCount: data?.length ?? 0,
    isLoading: isValidating,
    clusters,
  };
};

export default useResource;
