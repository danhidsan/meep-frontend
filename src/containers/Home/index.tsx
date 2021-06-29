import { FC } from 'react';
import Map from 'google-map-react';
import { Container } from '@/components';
import { useResource } from '@/data/hooks';
import { Content, MapContainer } from './styles';

const Home: FC = () => {
  const { resources } = useResource();
  console.log(resources);
  return (
    <Container>
      <Content>
        <MapContainer>
          <Map
            bootstrapURLKeys={{ key: 'AIzaSyAdt0dsgpnnUoAmgQSPrsW_-sZS7X-WTVE' }}
            defaultCenter={{ lat: 37.3909835, lng: -6.0103336 }}
            zoom={11}
          />
        </MapContainer>
      </Content>
    </Container>
  );
};

export default Home;
