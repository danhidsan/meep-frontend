import { FC, memo } from 'react';
import Item from './Item';
import { Props } from './types';
import { ParentList, Header } from './styles';

const Filter: FC<Props> = ({ items, onClickCheck }) => (
  <ParentList>
    {items.map((group) => (
      <>
        <Header>{group.header}</Header>
        <>
          {group.data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              onClick={onClickCheck}
            />
          ))}
        </>
      </>
    ))}
  </ParentList>
);

export default memo(Filter);
