// @ts-nocheck
import { FC, memo, useMemo, useCallback } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import Pagination from './Pagination';
import { Props } from './types';
import { Container, Sorted } from './styles';
import 'bootstrap/dist/css/bootstrap.css';

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
        Header: 'Modelo',
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
    state: { pageIndex },
  } = useTable<typeof data[0]>(
    { columns, data, initialState: {} },
    useSortBy,
    usePagination,
  );

  const handleStart = useCallback(() => {
    gotoPage(0);
  }, [gotoPage]);

  const handleEnd = useCallback(() => {
    gotoPage(pageCount - 1);
  }, [gotoPage, pageCount]);

  const handleChangePagination = useCallback(
    (e) => {
      const next = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(next);
    },
    [gotoPage],
  );

  return (
    <Container>
      <table className="table table-hover">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th
                className="th-sm"
                {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.Header}
                <Sorted
                  isSorted={column.isSorted}
                  isDesc={column.isSortedDesc}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {page.map((row) => {
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
      <Pagination
        onEnd={handleEnd}
        onStart={handleStart}
        onNext={nextPage}
        onPrevius={previousPage}
        onChange={handleChangePagination}
        pageIndex={pageIndex}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptionsLength={pageOptions.length}
      />
    </Container>
  );
};

export default memo(Table);
