import styled from 'styled-components';

export const Table = styled.table`
  margin-bottom: 32px;

  width: 428px;

  thead {
    background-color: #64646a;
  }

  th {
    padding: 8px 64px;

    font-size: 10px;
    text-transform: uppercase;
    color: white;
  }

  tbody {
    background-color: white;

    tr:nth-child(2n + 1) {
      background-color: #d3d3d38a;
    }
  }
`;
