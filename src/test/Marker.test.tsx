import Marker from '@/components/Marker';
import { render, screen } from '@testing-library/react';

describe('Marker test', () => {
  test('Render cluster marker correctly', () => {
    render(
      <Marker
        lat={38.7436883}
        lng={-9.1952225}
        isCluster
        pointCount={20}
        allPointsCount={200}
        batteryLevel={46}
      />,
    );
    expect(screen.getByText('20')).toBeInTheDocument();
  });

  test('Render cluster marker not correctly', () => {
    render(
      <Marker
        lat={38.7436883}
        lng={-9.1952225}
        pointCount={20}
        allPointsCount={200}
        batteryLevel={46}
      />,
    );
    expect(screen.queryByText('20')).not.toBeInTheDocument();
  });

  test('Render resource marker correctly', () => {
    render(
      <Marker
        lat={38.7436883}
        lng={-9.1952225}
        pointCount={20}
        allPointsCount={200}
        batteryLevel={46}
      />,
    );
    const element = screen.queryByTestId('resource-marker');
    expect(element).not.toBeUndefined();
    expect(element).not.toBeNull();
  });
});
