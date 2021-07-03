export type Props = {
  items: FilterData[];
  onClickCheck: (id: string, checked: boolean) => void;
};

export type FilterData = {
  header: string;
  data: {
    id: string;
    text: string;
  }[];
};

export type NestedListProps = {
  active: boolean;
};
