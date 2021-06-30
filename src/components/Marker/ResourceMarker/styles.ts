import styled from 'styled-components';
import { colors } from '@/theme';
import DefaultMarkerIcon from '@/components/MarkerIcon';
import { MarkerIconProps } from './types';

export const Container = styled.div``;

export const MarkerIcon = styled(DefaultMarkerIcon).attrs<MarkerIconProps>(
  ({ batteryLevel }) => ({
    color: batteryLevel > 25 ? colors.limeGreen : colors.darkModeratedRed,
  }),
)<MarkerIconProps>``;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  top: -45px;
  background-color: white;
  z-index: 1;
  border-radius: 5px;
`;

export const Text = styled.text`
  font-size: 14px;
`;
