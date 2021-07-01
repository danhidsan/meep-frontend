import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input.attrs(() => ({
  type: 'number',
}))`
  width: 100px;
`;

export const Text = styled.text`
  font-size: 14px;
  font-weight: 700;
  margin: 0px 10px;
  align-self: center;
`;
