import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  width: 240px;

  margin-bottom: 8px;
  padding: 8px;

  background-color: white;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Status = styled.span`
  display: block;
  margin-left: 8px;

  width: 16px;
  height: 16px;

  border-radius: 50%;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
`;
