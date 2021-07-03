import styled from 'styled-components';
import { NestedListProps } from './types';

export const Header = styled.text``;

export const ParentList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NestedList = styled.ul<NestedListProps>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  & {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &:before {
    content: \25b6;
    color: black;
    display: inline-block;
    margin-right: 6px;
  }
`;
