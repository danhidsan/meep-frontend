import { FC, memo } from 'react';
import { colors } from '@/theme';

type Props = {
  color?: string;
};

const MarkerIcon: FC<Props> = ({ color = colors.limeGreen }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24.986} height={32.01}>
      <path
        fill={color}
        d="M12.492-.005C5.593-.005-.001 5.413-.001 12.097c0 .13.062 3.24 1.136 5.458 3.077 6.875 11.346 14.488 11.357 14.449.014.026 8.248-7.545 11.34-14.408.918-1.627 1.154-5.234 1.154-5.5.001-6.683-5.594-12.101-12.494-12.101zm.002 16.004a3.498 3.498 0 01-3.5-3.499 3.5 3.5 0 113.5 3.499z"
      />
      <path
        fill={color}
        d="M12.494 7a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 8.999a3.498 3.498 0 01-3.5-3.499 3.5 3.5 0 113.5 3.499z"
      />
    </svg>
  );
};

export default memo(MarkerIcon);
