import styled from 'styled-components';
import DefaultMarkerIcon from '@/components/MarkerIcon';
import { colors } from '@/theme';
import { ContainerProps, MarkerIconProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${({ allPointsCount, pointCount }) =>
    30 + (pointCount / allPointsCount) * 100}px;
  height: ${({ allPointsCount, pointCount }) =>
    30 + (pointCount / allPointsCount) * 100}px;
  background-color: ${colors.darkModeratedBlue};
  justify-content: center;
  align-items: center;
  border-radius: ${({ allPointsCount, pointCount }) =>
    (30 + (pointCount / allPointsCount) * 100) / 2}px;
`;

export const Count = styled.text`
  font-size: 12px;
`;

export const MarkerIcon = styled(DefaultMarkerIcon).attrs<MarkerIconProps>(
  ({ batteryLevel }) => ({
    color: batteryLevel > 25 ? colors.limeGreen : colors.darkModeratedRed,
  }),
)<MarkerIconProps>``;
