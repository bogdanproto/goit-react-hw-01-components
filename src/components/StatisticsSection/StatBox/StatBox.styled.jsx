import styled from 'styled-components';
import { randomColor } from 'utils/randomColor';

export const StatBoxItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 4);
  height: 64px;

  span {
    display: block;
    text-transform: lowercase;
  }

  background-color: ${randomColor};
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
