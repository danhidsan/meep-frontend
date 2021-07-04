import { FC, useState, useCallback, memo } from 'react';
import { Props } from './types';
import { Container, MarkerIcon, Modal, Text } from './styles';

const ResourceMarker: FC<Props> = ({ batteryLevel }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);
  return (
    <Container
      data-testid="resource-marker"
      onMouseEnter={handleShowModal}
      onMouseLeave={handleShowModal}>
      {showModal && (
        <Modal>
          <Text>{`Batería: ${batteryLevel}%`}</Text>
        </Modal>
      )}
      <MarkerIcon batteryLevel={batteryLevel} />
    </Container>
  );
};

export default memo(ResourceMarker);
