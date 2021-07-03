import { FC, memo, useCallback } from 'react';
import { Props } from './types';
import { Item, Text, Check } from './styles';

const ListItem: FC<Props> = ({ id, text, onClick }) => {
  const handleChange = useCallback(
    (event) => {
      if (onClick) onClick(id, event.target.checked);
    },
    [id, onClick],
  );
  return (
    <Item>
      <Check className="form-check-input" onChange={handleChange} />
      <Text>{text}</Text>
    </Item>
  );
};

export default memo(ListItem);
