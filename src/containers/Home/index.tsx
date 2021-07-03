import { FC, useCallback, useState, useMemo } from 'react';
import Map from 'google-map-react';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';
import { Container, Marker, Table, Filter } from '@/components';
import useResource, { Bound } from '@/data/hooks/useResource';
import { Content, MapContainer } from './styles';

const Home: FC = () => {
  const [bounds, setBounds] = useState<Bound>([] as unknown as Bound);
  const [zoom, setZoom] = useState<number>(10);
  const [filters, setFilters] = useState<string[]>([]);
  const { allPointsCount, clusters, resources } = useResource({ bounds, zoom });

  const handleChangeMap = useCallback(
    ({ zoom: eventZoom, bounds: eventBounds }: Map.ChangeEventValue) => {
      setZoom(eventZoom);
      setBounds([
        eventBounds.nw.lng,
        eventBounds.se.lat,
        eventBounds.se.lng,
        eventBounds.nw.lat,
      ] as unknown as Bound);
    },
    [],
  );

  const handleClickCheck = useCallback((id: string, checked: boolean) => {
    if (checked) {
      setFilters((prev) => [...prev, id]);
    } else {
      setFilters((prev) => prev.filter((item) => item !== id));
    }
  }, []);

  const filterItems = useMemo(() => {
    const filtersData = map(
      keys(groupBy(resources, 'resourceType')),
      (item) => ({
        id: item,
        text: item,
      }),
    );

    return [{ header: 'Resource Type', data: filtersData }];
  }, [resources]);

  return (
    <Container>
      <Content>
        <Filter items={filterItems} onClickCheck={handleClickCheck} />
        <MapContainer>
          <Map
            bootstrapURLKeys={{
              key: 'AIzaSyAdt0dsgpnnUoAmgQSPrsW_-sZS7X-WTVE',
            }}
            defaultCenter={{ lat: 38.7436883, lng: -9.1952225 }}
            zoom={11}
            onChange={handleChangeMap}>
            {clusters.map((cluster) =>
              cluster.properties.cluster ||
              isEmpty(filters) ||
              filters.includes(cluster.properties.resourceType) ? (
                <Marker
                  key={`${
                    cluster.properties.cluster
                      ? cluster.properties.cluster_id
                      : cluster.properties.resourceId
                  }`}
                  isCluster={cluster.properties.cluster}
                  pointCount={cluster.properties.point_count}
                  clusterId={cluster.properties.cluster_id}
                  allPointsCount={allPointsCount}
                  lat={cluster.geometry.coordinates[1]}
                  lng={cluster.geometry.coordinates[0]}
                  batteryLevel={cluster.properties.batteryLevel}
                />
              ) : null,
            )}
          </Map>
        </MapContainer>
        <Table data={resources} />
      </Content>
    </Container>
  );
};

export default Home;
