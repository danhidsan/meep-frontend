export type Props = {
  isCluster?: boolean;
  pointCount: number;
  clusterId?: number;
  allPointsCount: number;
  lat: number;
  lng: number;
  batteryLevel: number;
};

export type ContainerProps = {
  pointCount: Props['pointCount'];
  allPointsCount: number;
};
