import { FC } from 'react';
import { Container, Count, MarkerIcon } from './styles';
import { Props } from './types';

const Marker: FC<Props> = ({
  isCluster,
  pointCount,
  allPointsCount,
  batteryLevel,
}) =>
  isCluster ? (
    <Container pointCount={pointCount} allPointsCount={allPointsCount}>
      <Count>{pointCount}</Count>
    </Container>
  ) : (
    <MarkerIcon batteryLevel={batteryLevel} />
  );

export default Marker;
