import { FC, memo, useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { Props } from './types';
import { Container } from './styles';

const Table: FC<Props> = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Matrícula',
        accessor: 'plate',
      },
      {
        Header: 'Coordenadas',
        accessor: 'coordinates',
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
    ],
    [],
  );

  const {
    columns: tableColumns,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: {} }, usePagination);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const inputPage = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(inputPage);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
};

export default memo(Table);
