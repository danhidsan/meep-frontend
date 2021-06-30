import { FC, useCallback, useState } from 'react';
import Map from 'google-map-react';
import { Container } from '@/components';
import useResource, { Bound } from '@/data/hooks/useResource';
import { Content, MapContainer } from './styles';

const Home: FC = () => {
  const [bounds, setBounds] = useState<Bound>([] as unknown as Bound);
  const [zoom, setZoom] = useState<number>(10);
  const { resources, clusters } = useResource({ bounds, zoom });

  const handleChangeMap = useCallback(({ zoom: eventZoom, bounds: eventBounds }: Map.ChangeEventValue) => {
    setZoom(eventZoom);
    setBounds([eventBounds.nw.lng, eventBounds.se.lat, eventBounds.se.lng, eventBounds.nw.lat] as unknown as Bound);
  }, []);

  return (
    <Container>
      <Content>
        <MapContainer>
          <Map
            bootstrapURLKeys={{ key: 'AIzaSyAdt0dsgpnnUoAmgQSPrsW_-sZS7X-WTVE' }}
            defaultCenter={{ lat: 38.7436883, lng: -9.1952225 }}
            zoom={11}
            onChange={handleChangeMap}
          />
        </MapContainer>
      </Content>
    </Container>
  );
};

export default Home;
