import { FC, memo } from 'react';
import { colors } from '@/theme';

type Props = {
  isSorted: boolean;
  isDesc: boolean;
  className?: string;
};

const SortedIcon: FC<Props> = ({ isSorted, isDesc, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 16 16"
      className={className}>
      <path
        fill={isSorted && !isDesc ? colors.black : colors.grey}
        d="M11 7h-6l3-4z"
      />
      <path
        fill={isSorted && isDesc ? colors.black : colors.grey}
        d="M5 9h6l-3 4z"
      />
    </svg>
  );
};

export default memo(SortedIcon);
