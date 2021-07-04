import { FC, memo } from 'react';
import { Props } from './types';
import { Container, Input, Text } from './styles';

const Pagination: FC<Props> = ({
  onChange,
  onEnd,
  onNext,
  onPrevius,
  onStart,
  pageIndex,
  pageOptionsLength,
  canNextPage,
  canPreviousPage,
}) => {
  return (
    <Container>
      <div>
        <ul className="pagination">
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={onStart}
              disabled={!canPreviousPage}>
              inicio
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={onPrevius}
              disabled={!canPreviousPage}>
              anterior
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={onNext}
              disabled={!canNextPage}>
              siguiente
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={onEnd}
              disabled={!canNextPage}>
              final
            </button>
          </li>
        </ul>
      </div>
      <Text>
        {pageIndex + 1} of {pageOptionsLength}
      </Text>
      <span>
        <Input
          className="form-control"
          defaultValue={pageIndex + 1}
          onChange={onChange}
        />
      </span>
    </Container>
  );
};

export default memo(Pagination);
