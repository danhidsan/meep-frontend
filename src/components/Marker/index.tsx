import { FC } from 'react';
import MarkerIcon from '@/components/MarkerIcon';
import { Container, Count } from './styles';
import { Props } from './types';

const Marker: FC<Props> = ({ isCluster, pointCount, allPointsCount }) =>
  isCluster ? (
    <Container pointCount={pointCount} allPointsCount={allPointsCount}>
      <Count>{pointCount}</Count>
    </Container>
  ) : (
    <MarkerIcon />
  );

export default Marker;
