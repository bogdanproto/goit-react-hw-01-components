import { FriendItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status $isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};
