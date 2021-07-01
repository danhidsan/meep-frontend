export type ResourceData = {
  id: string;
  licencePlate: string;
  x: number;
  y: number;
  coordinatesStr: string;
  model: string;
  resourceType: 'MOPED';
  batteryLevel: number;
};

type Resource = ResourceData;

export default Resource;
