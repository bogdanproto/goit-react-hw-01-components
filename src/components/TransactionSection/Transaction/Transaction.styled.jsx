import styled from 'styled-components';

export const TransactionLine = styled.tr`
  text-transform: capitalize;
  color: gray;

  td {
    padding: 8px 64px;
    font-size: 12px;
    text-align: center;
  }

  td:nth-child(3n + 1) {
    text-align: left;
  }
`;
