export type ResourceData = {
  id: string;
  licencePlate: string;
  x: number;
  y: number;
  model: string;
  resourceType: 'MOPED';
};

type Resource = ResourceData;

export default Resource;
