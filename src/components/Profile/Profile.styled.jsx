import styled from 'styled-components';

export const Card = styled.div`
  width: 256px;
  height: auto;

  padding: 24px;

  text-align: center;
`;

export const Description = styled.div`
  padding: 24px;
  background-color: white;

  img {
    border-radius: 50%;
  }

  p {
    color: grey;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;

  margin: 0;
  padding: 0;

  background-color: lightgray;

  li {
    display: block;
    width: calc(100% - 4px);

    padding: 16px;

    border: 1px solid #e3dcdc;
  }

  span {
    display: block;
    font-size: 12px;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
