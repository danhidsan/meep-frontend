export type Props = {
  onStart: () => void;
  onPrevius: () => void;
  onNext: () => void;
  onEnd: () => void;
  onChange: (e: any) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  pageOptionsLength: number;
};
