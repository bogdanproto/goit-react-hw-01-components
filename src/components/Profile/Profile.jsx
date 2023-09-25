import { Card, Description, Title, Stats, Quantity } from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Card>
      <Description>
        <img src={avatar} alt="User avatar" width="96" height="96" />
        <Title>{username}</Title>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Card>
  );
};
