import { FC, memo } from 'react';
import ResourceMarker from './ResourceMarker';
import { Container, Count } from './styles';
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
    <ResourceMarker batteryLevel={batteryLevel} />
  );

export default memo(Marker);
