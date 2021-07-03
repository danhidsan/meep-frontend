export type Props = {
  id: string;
  text: string;
  onClick?: (id: string, checked: boolean) => void;
};
